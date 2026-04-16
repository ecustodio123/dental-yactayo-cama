import ContactBlock from "../components/blocks/ContactBlock";
import { useI18n } from "../lang/i18n";
import Container from "../components/primitives/Container";
import SectionHeading from "../components/primitives/SectionHeading";
import SocialLinks from "../components/primitives/SocialLinks";

function ContactPage() {
  const { t } = useI18n();

  return (
    <main>
      <section className="surface-section">
        <Container>
          <SectionHeading title={t("pages.contact.title")} description={t("pages.contact.description")} />
          <div className="contact-info-grid" aria-label={t("pages.contact.infoAria")}>
            <article className="contact-info-card">
              <h3>{t("pages.contact.cards.whatsapp.title")}</h3>
              <p>{t("pages.contact.cards.whatsapp.text")}</p>
              <a className="btn btn-primary" href={t("business.whatsappHref")} target="_blank" rel="noreferrer">
                {t("pages.contact.cards.whatsapp.cta")}
              </a>
            </article>

            <article className="contact-info-card">
              <h3>{t("pages.contact.cards.phone.title")}</h3>
              <p>{t("business.phoneDisplay")}</p>
              <a className="btn btn-primary" href={`tel:${t("business.phoneHref")}`}>
                {t("pages.contact.cards.phone.cta")}
              </a>
            </article>

            <article className="contact-info-card">
              <h3>{t("pages.contact.cards.schedule.title")}</h3>
              <p>{t("business.hours")}</p>
              <p>{t("business.hoursWeekend")}</p>
              <p>{t("business.address")}</p>
            </article>
          </div>
          <div className="contact-social">
            <p className="contact-social__title">{t("pages.contact.socialTitle")}</p>
            <SocialLinks />
          </div>
        </Container>
      </section>

      <ContactBlock showHeading={false} sectionClassName="contact-page-form" />
    </main>
  );
}

export default ContactPage;
