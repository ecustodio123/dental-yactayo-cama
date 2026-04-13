import { heroImage } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";

function HeroBlock() {
  const { t } = useI18n();

  return (
    <section id="home" className="page-hero">
      <Container className="page-hero__inner">
        <div className="my-4">
          <p className="hero-kicker">{t("home.hero.kicker")}</p>
          <h1>{t("home.hero.title")}</h1>
          <p>{t("home.hero.description")}</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={t("business.whatsappHref")} target="_blank" rel="noreferrer">
              {t("home.hero.cta")}
            </a>
            <a className="btn btn-outline" href="/contacto">
              {t("home.hero.ctaSecondary")}
            </a>
          </div>
          <ul className="hero-highlights" aria-label={t("home.hero.highlightsAria")}>
            <li>{t("home.hero.highlight1")}</li>
            <li>{t("home.hero.highlight2")}</li>
            <li>{t("home.hero.highlight3")}</li>
          </ul>
        </div>
        <img src={heroImage} alt={t("home.hero.imageAlt")} />
      </Container>
    </section>
  );
}

export default HeroBlock;
