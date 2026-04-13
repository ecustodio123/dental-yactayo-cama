function BrandLogo({ className = "" }) {
  return (
    <div className={`brand-logo ${className}`.trim()}>
      <img
        className="brand-logo__image"
        src="/brand/logo-main.png"
        alt="Enro's Vet Veterinaria"
        width="1084"
        height="713"
      />
    </div>
  );
}

export default BrandLogo;
