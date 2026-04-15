import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import { heroImage } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";

function HeroBlock({ variant = "a" }) {
  const { t } = useI18n();

  const copy = (
    <div className="hero-copy">
      <p className="hero-kicker">{t("home.hero.kicker")}</p>
      <h1>{t("home.hero.title")}</h1>
      <p className="hero-description">{t("home.hero.description")}</p>
      <a className="btn btn-primary hero-cta" href={t("business.whatsappHref")} target="_blank" rel="noreferrer">
        <CalendarMonthOutlinedIcon sx={{ fontSize: 18, marginRight: "0.35rem" }} />
        {t("home.hero.cta")}
      </a>
    </div>
  );

  return (
    <section id="home" className={`page-hero page-hero--${variant}`}>
      <Container className="hero-layout">
        {copy}

        <div className={`hero-visual hero-visual--${variant}`}>
          <div className="hero-circle-wrap">
            <div className="hero-circle-bg" aria-hidden="true" />
            <div className="hero-circle-ring" aria-hidden="true" />
            <img className="hero-figure-image" src={heroImage} alt={t("home.hero.imageAlt")} />
          </div>

          <>
            <div className="hero-bubble hero-bubble--one" aria-hidden="true" />
            <div className="hero-bubble hero-bubble--two" aria-hidden="true" />
            {variant !== "a" ? (
              <div className="hero-badge" aria-hidden="true">
                <p>{t("catalog.trustStats.experienceYears.value")}</p>
                <span>{t("catalog.trustStats.experienceYears.label")}</span>
              </div>
            ) : null}
          </>
        </div>
      </Container>
    </section>
  );
}

export default HeroBlock;
