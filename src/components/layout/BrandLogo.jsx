import { useI18n } from "../../lang/i18n";
import yactayoCamLogoTransparent from "../../assets/img/YactayoCamLogo-transparent.png";

function BrandLogo({ className = "" }) {
  const { t } = useI18n();

  return (
    <div className={`brand-logo ${className}`.trim()}>
      <span className="brand-logo__badge">
        <img
          className="brand-logo__image"
          src={yactayoCamLogoTransparent}
          alt={`${t("footer.title")} ${t("logo.subtitle")}`}
          width="1600"
          height="1564"
        />
      </span>
      <div className="brand-logo__text">
        <span className="brand-logo__title">{t("footer.title")}</span>
        <span className="brand-logo__subtitle">{t("logo.subtitle")}</span>
      </div>
    </div>
  );
}

export default BrandLogo;
