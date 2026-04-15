import { NavLink } from "react-router-dom";
import { topNavLinks } from "../../data/navigation";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import BrandLogo from "./BrandLogo";
import SocialLinks from "../primitives/SocialLinks";

function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="footer">
      <Container className="footer-grid">
        <div className="footer-brand">
          <BrandLogo className="footer-brand-logo" />
          <p>{t("footer.description")}</p>
          <p>{t("business.address")}</p>
          <p>{t("business.hours")}</p>
          <SocialLinks tone="footer" />
        </div>
        <ul className="footer-links">
          {topNavLinks.map((link) => (
            <li key={link.key}>
              <NavLink to={link.to} end={link.to === "/"}>
                {t(`navigation.${link.key}`)}
              </NavLink>
            </li>
          ))}
        </ul>
        <ul className="footer-links">
          <li>{t("footer.highlights.cloneBuild")}</li>
          <li>{t("footer.highlights.tokenBased")}</li>
          <li>{t("footer.highlights.responsive")}</li>
        </ul>
      </Container>
      <div className="footer-bottom">{t("footer.rights")}</div>
    </footer>
  );
}

export default SiteFooter;
