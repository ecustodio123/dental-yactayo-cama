import PhoneIcon from "@mui/icons-material/Phone";
import { NavLink } from "react-router-dom";
import { topNavLinks } from "../../data/navigation";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import BrandLogo from "./BrandLogo";

function SiteHeader() {
  const { t } = useI18n();

  return (
    <header className="site-header">
      <Container className="header-top">
        <NavLink to="/" aria-label={t("header.homeAria")}>
          <BrandLogo />
        </NavLink>

        <nav className="header-links" aria-label={t("header.navAria")}>
          {topNavLinks.map((link) => (
            <NavLink key={link.key} to={link.to} end={link.to === "/"} className={({ isActive }) => (isActive ? "active" : "")}>
              {t(`navigation.${link.key}`)}
            </NavLink>
          ))}
          <a className="header-phone" href={`tel:${t("business.phoneHref")}`}>
            <PhoneIcon sx={{ fontSize: 15, marginBottom: "-2px" }} /> {t("business.phoneDisplay")}
          </a>
          <a className="btn btn-primary header-cta" href={t("business.whatsappHref")} target="_blank" rel="noreferrer">
            {t("header.cta")}
          </a>
        </nav>
      </Container>

    </header>
  );
}

export default SiteHeader;
