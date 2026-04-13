import { aboutPillars } from "../../data/demoContent";
import { Link } from "react-router-dom";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function AboutBlock() {
  const { t } = useI18n();
  const paragraphs = t("pages.about.storyText")
    .split("\n")
    .map((paragraph) => paragraph.trim())
    .filter(Boolean);

  return (
    <section className="surface-section">
      <Container>
        <SectionHeading
          title={t("pages.about.title")}
          description={t("pages.about.description")}
        />

        <div className="about-story-card">
          <h3>{t("pages.about.storyTitle")}</h3>
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div
          className="card-grid three about-pillars-grid"
          aria-label={t("pages.about.pillarsAria")}
        >
          {aboutPillars.map((item) => (
            <article key={item.id} className="surface-card about-pillar-card">
              <div className="surface-card__body">
                <h3>{t(`catalog.aboutPillars.${item.id}.title`)}</h3>
                <p>{t(`catalog.aboutPillars.${item.id}.description`)}</p>
              </div>
            </article>
          ))}
        </div>

        <Link className="btn btn-primary about-services-cta" to="/servicios">
          {t("pages.about.servicesCta")}
        </Link>
      </Container>
    </section>
  );
}

export default AboutBlock;
