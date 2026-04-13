import { serviceShowcase, supportServiceKeys } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function ServicesBlock({
  sectionClassName = "surface-section",
  maxItems = serviceShowcase.length,
  showSupport = true,
  showAllServicesLink = false,
}) {
  const { t } = useI18n();
  const servicesToRender = serviceShowcase.slice(0, maxItems);

  return (
    <section id="services" className={sectionClassName}>
      <Container>
        <SectionHeading title={t("home.servicesBlock.title")} description={t("home.servicesBlock.description")} />

        <div className="services-overview">
          <p className="services-overview__intro">{t("home.servicesBlock.intro")}</p>

          <div className="services-showcase-grid">
            {servicesToRender.map((service) => (
              <article key={service.id} className="service-showcase-card">
                <img src={service.image} alt={t(`catalog.serviceShowcase.${service.id}.title`)} />
                <div className="service-showcase-card__body">
                  <h3>{t(`catalog.serviceShowcase.${service.id}.title`)}</h3>
                  <p>{t(`catalog.serviceShowcase.${service.id}.description`)}</p>
                  <ul className="services-points-list">
                    {service.pointKeys.map((pointKey) => (
                      <li key={pointKey}>{t(`catalog.serviceShowcase.${service.id}.${pointKey}`)}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>

          {showSupport ? (
            <article className="services-support">
              <h3>{t("home.servicesBlock.supportTitle")}</h3>
              <div className="services-chip-list">
                {supportServiceKeys.map((key) => (
                  <span key={key} className="service-chip">
                    {t(`catalog.serviceSupport.${key}`)}
                  </span>
                ))}
              </div>
              <a className="btn btn-primary services-overview__cta" href="/contacto">
                {t("home.servicesBlock.cta")}
              </a>
            </article>
          ) : null}

          {showAllServicesLink ? (
            <div className="services-overview__all-link">
              <a className="btn btn-outline" href="/servicios">
                {t("home.servicesBlock.allServicesCta")}
              </a>
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

export default ServicesBlock;
