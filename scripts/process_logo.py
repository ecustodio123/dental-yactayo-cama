#!/usr/bin/env python3
from __future__ import annotations

import json
from collections import Counter
from pathlib import Path

import cv2
import numpy as np
from PIL import Image


REPO_ROOT = Path(__file__).resolve().parents[1]
SRC_PATH = Path('/Users/enriquecustodio/Downloads/504103200_1269728871828020_1239362465700923657_n.jpg')
OUT_DIR = REPO_ROOT / 'public' / 'brand'


def sample_corner_background(img: np.ndarray, patch: int = 80) -> np.ndarray:
    h, w = img.shape[:2]
    p = min(patch, h // 5, w // 5)
    patches = [
        img[0:p, 0:p],
        img[0:p, w - p:w],
        img[h - p:h, 0:p],
        img[h - p:h, w - p:w],
    ]
    stacked = np.concatenate([x.reshape(-1, 3) for x in patches], axis=0)
    return np.median(stacked, axis=0)


def remove_background(img_bgr: np.ndarray) -> np.ndarray:
    bg = sample_corner_background(img_bgr).astype(np.float32)
    dist = np.linalg.norm(img_bgr.astype(np.float32) - bg[None, None, :], axis=2)

    # Candidate background: close to corner color (gray backdrop)
    bg_candidate = (dist < 34).astype(np.uint8)

    # Keep only connected bg components that touch image edges
    count, labels = cv2.connectedComponents(bg_candidate)
    edge_labels = set(np.unique(np.concatenate([
        labels[0, :],
        labels[-1, :],
        labels[:, 0],
        labels[:, -1],
    ])))

    edge_labels.discard(0)
    bg_mask = np.isin(labels, list(edge_labels)).astype(np.uint8)

    # Morphological cleanup
    kernel = np.ones((3, 3), np.uint8)
    bg_mask = cv2.morphologyEx(bg_mask, cv2.MORPH_OPEN, kernel, iterations=1)
    bg_mask = cv2.morphologyEx(bg_mask, cv2.MORPH_CLOSE, kernel, iterations=2)

    alpha = np.where(bg_mask == 1, 0, 255).astype(np.uint8)

    rgba = cv2.cvtColor(img_bgr, cv2.COLOR_BGR2BGRA)
    rgba[:, :, 3] = alpha
    return rgba


def crop_to_alpha(rgba: np.ndarray, pad: int = 20) -> np.ndarray:
    ys, xs = np.where(rgba[:, :, 3] > 0)
    if ys.size == 0 or xs.size == 0:
        return rgba
    y1 = max(0, int(ys.min()) - pad)
    y2 = min(rgba.shape[0], int(ys.max()) + pad)
    x1 = max(0, int(xs.min()) - pad)
    x2 = min(rgba.shape[1], int(xs.max()) + pad)
    return rgba[y1:y2, x1:x2]


def palette_from_rgba(rgba: np.ndarray, top_n: int = 8) -> list[dict[str, str | float]]:
    # cv2 stores channels as BGR(A); convert to RGB for human-readable hex output.
    rgb = rgba[:, :, :3][:, :, ::-1]
    alpha = rgba[:, :, 3]
    valid = rgb[alpha > 0]
    if valid.size == 0:
        return []

    # Quantize for stable palette extraction
    quant = (valid // 16) * 16
    c = Counter(map(tuple, quant.tolist()))
    total = sum(c.values())

    palette = []
    for color, cnt in c.most_common(top_n):
        r, g, b = color
        palette.append({
            'hex': f'#{r:02x}{g:02x}{b:02x}',
            'ratio': round(cnt / total, 4),
        })
    return palette


def build_mark_icon(cropped_rgba: np.ndarray) -> np.ndarray:
    h = cropped_rgba.shape[0]

    # Keep upper section where symbol lives (exclude text rows).
    upper = cropped_rgba[: int(h * 0.58), :, :].copy()

    # Remove small leftovers.
    alpha = upper[:, :, 3]
    n, labels, stats, _ = cv2.connectedComponentsWithStats((alpha > 0).astype(np.uint8), connectivity=8)
    if n > 1:
        areas = stats[1:, cv2.CC_STAT_AREA]
        largest = 1 + int(np.argmax(areas))
        upper[:, :, 3] = np.where(labels == largest, 255, 0).astype(np.uint8)

    return crop_to_alpha(upper, pad=10)


def make_favicon(mark_rgba: np.ndarray, out_ico: Path, out_png: Path) -> None:
    canvas_size = 256
    canvas = np.zeros((canvas_size, canvas_size, 4), dtype=np.uint8)

    # soft cream circular background to improve recognition on tabs
    cv2.circle(canvas, (canvas_size // 2, canvas_size // 2), 118, (255, 250, 245, 255), -1)

    mh, mw = mark_rgba.shape[:2]
    scale = min(0.72 * canvas_size / mw, 0.72 * canvas_size / mh)
    new_w = max(1, int(mw * scale))
    new_h = max(1, int(mh * scale))

    resized = cv2.resize(mark_rgba, (new_w, new_h), interpolation=cv2.INTER_AREA)
    x = (canvas_size - new_w) // 2
    y = (canvas_size - new_h) // 2

    overlay = canvas[y:y + new_h, x:x + new_w]
    a = resized[:, :, 3:4] / 255.0
    overlay[:, :, :3] = (1 - a) * overlay[:, :, :3] + a * resized[:, :, :3]
    overlay[:, :, 3:4] = np.maximum(overlay[:, :, 3:4], resized[:, :, 3:4])
    canvas[y:y + new_h, x:x + new_w] = overlay

    Image.fromarray(cv2.cvtColor(canvas, cv2.COLOR_BGRA2RGBA)).save(out_png)

    im = Image.open(out_png)
    im.save(out_ico, format='ICO', sizes=[(16, 16), (32, 32), (48, 48), (64, 64), (128, 128), (256, 256)])


def main() -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)

    img_bgr = cv2.imread(str(SRC_PATH), cv2.IMREAD_COLOR)
    if img_bgr is None:
        raise FileNotFoundError(f'Could not read source logo: {SRC_PATH}')

    rgba = remove_background(img_bgr)
    cropped = crop_to_alpha(rgba, pad=20)

    transparent_full_path = OUT_DIR / 'logo-transparent-full.png'
    transparent_crop_path = OUT_DIR / 'logo-main.png'

    cv2.imwrite(str(transparent_full_path), rgba)
    cv2.imwrite(str(transparent_crop_path), cropped)

    mark = build_mark_icon(cropped)
    mark_path = OUT_DIR / 'logo-mark.png'
    cv2.imwrite(str(mark_path), mark)

    favicon_png = REPO_ROOT / 'public' / 'favicon.png'
    favicon_ico = REPO_ROOT / 'public' / 'favicon.ico'
    make_favicon(mark, favicon_ico, favicon_png)

    palette = palette_from_rgba(cropped, top_n=10)
    with open(OUT_DIR / 'logo-palette.json', 'w', encoding='utf-8') as f:
        json.dump({'source': str(SRC_PATH), 'palette': palette}, f, ensure_ascii=False, indent=2)

    print('Generated:')
    print('-', transparent_full_path)
    print('-', transparent_crop_path)
    print('-', mark_path)
    print('-', favicon_png)
    print('-', favicon_ico)
    print('-', OUT_DIR / 'logo-palette.json')


if __name__ == '__main__':
    main()
