import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useI18n } from "../../lang/i18n";
import Button from "../primitives/Button";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function ContactBlock({ showHeading = true, sectionClassName = "" }) {
  const { t } = useI18n();
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const isConfigured = Boolean(serviceId && templateId && publicKey);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isConfigured) {
      setStatus("config_error");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus("success");
      formRef.current?.reset();
    } catch (error) {
      console.error("EmailJS send error", error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className={`surface-section surface-section--soft ${sectionClassName}`.trim()}>
      <Container>
        {showHeading ? <SectionHeading title={t("contactBlock.title")} description={t("contactBlock.description")} /> : null}
        <div className="contact-block">
          <article className="contact-panel">
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="form-grid">
                <input className="input" name="user_name" placeholder={t("contactBlock.fields.fullName")} required />
                <input className="input" name="user_phone" placeholder={t("contactBlock.fields.phone")} required />
              </div>
              <input
                className="input"
                type="email"
                name="user_email"
                placeholder={t("contactBlock.fields.email")}
                style={{ marginTop: "0.7rem" }}
                required
              />
              <select className="select" name="specialty" style={{ marginTop: "0.7rem" }} defaultValue="" required>
                <option value="" disabled>
                  {t("contactBlock.fields.interestedIn")}
                </option>
                <option>{t("contactBlock.options.option1")}</option>
                <option>{t("contactBlock.options.option2")}</option>
                <option>{t("contactBlock.options.option3")}</option>
              </select>
              <textarea
                className="textarea"
                rows="5"
                name="message"
                placeholder={t("contactBlock.fields.message")}
                style={{ marginTop: "0.7rem" }}
                required
              />

              {status === "success" ? <p className="contact-feedback is-success">{t("contactBlock.feedback.success")}</p> : null}
              {status === "error" ? <p className="contact-feedback is-error">{t("contactBlock.feedback.error")}</p> : null}
              {status === "config_error" ? (
                <p className="contact-feedback is-error">{t("contactBlock.feedback.configError")}</p>
              ) : null}

              <Button className="w-full" style={{ marginTop: "0.7rem" }} type="submit" disabled={status === "sending"}>
                {status === "sending" ? t("contactBlock.sending") : t("contactBlock.submit")}
              </Button>
            </form>
          </article>

          <article className="contact-panel">
            <h3 className="contact-panel__title">{t("contactBlock.panelTitle")}</h3>
            <p className="contact-panel__text">{t("contactBlock.panelDescription")}</p>
            <p className="contact-panel__meta">{t("business.address")}</p>
            <p className="contact-panel__meta">{t("business.hours")}</p>
            <a className="btn btn-primary contact-panel__cta" href={t("business.whatsappHref")} target="_blank" rel="noreferrer">
              {t("contactBlock.whatsappCta")}
            </a>
            <iframe
              title={t("contactBlock.mapTitle")}
              src={t("business.mapEmbedUrl")}
              loading="lazy"
            />
          </article>
        </div>
      </Container>
    </section>
  );
}

export default ContactBlock;
