import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";

function HomeCtaStripBlock() {
  const { t } = useI18n();

  return (
    <section className="surface-section surface-section--soft">
      <Container>
        <div className="home-cta-strip">
          <div>
            <p className="hero-kicker">{t("home.ctaStrip.kicker")}</p>
            <h2>{t("home.ctaStrip.title")}</h2>
            <p>{t("home.ctaStrip.description")}</p>
          </div>
          <div className="home-cta-strip__actions">
            <a className="btn btn-primary" href={t("business.whatsappHref")} target="_blank" rel="noreferrer">
              {t("home.ctaStrip.primaryCta")}
            </a>
            <a className="btn btn-outline" href={`tel:${t("business.phoneHref")}`}>
              {t("home.ctaStrip.secondaryCta")}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeCtaStripBlock;
