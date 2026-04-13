import { Link } from "react-router-dom";
import { aboutTeaserImage } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";

function HomeAboutTeaserBlock() {
  const { t } = useI18n();

  return (
    <section className="surface-section">
      <Container>
        <div className="home-about-teaser">
          <div>
            <p className="hero-kicker">{t("home.aboutTeaser.kicker")}</p>
            <h2>{t("home.aboutTeaser.title")}</h2>
            <p>{t("home.aboutTeaser.description")}</p>
            <ul className="hero-highlights" aria-label={t("home.aboutTeaser.listAria")}>
              <li>{t("home.aboutTeaser.point1")}</li>
              <li>{t("home.aboutTeaser.point2")}</li>
              <li>{t("home.aboutTeaser.point3")}</li>
            </ul>
            <Link className="btn btn-outline" to="/nosotros">
              {t("home.aboutTeaser.cta")}
            </Link>
          </div>

          <div className="home-about-teaser__media">
            <img src={aboutTeaserImage} alt={t("home.aboutTeaser.imageAlt")} loading="lazy" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeAboutTeaserBlock;
