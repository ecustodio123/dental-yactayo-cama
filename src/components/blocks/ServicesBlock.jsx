import { serviceShowcase, supportServiceKeys } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function ServicesBlock() {
  const { t } = useI18n();

  return (
    <section id="services" className="surface-section">
      <Container>
        <SectionHeading title={t("home.servicesBlock.title")} description={t("home.servicesBlock.description")} />

        <div className="services-overview">
          <p className="services-overview__intro">{t("home.servicesBlock.intro")}</p>

          <div className="services-showcase-grid">
            {serviceShowcase.map((service) => (
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
        </div>
      </Container>
    </section>
  );
}

export default ServicesBlock;
