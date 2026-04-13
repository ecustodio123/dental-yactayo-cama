import { faqs } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function FaqBlock({
  sectionId = "faq",
  titleKey = "home.faqBlock.title",
  descriptionKey = "home.faqBlock.description",
  sectionClassName = "surface-section",
}) {
  const { t } = useI18n();

  return (
    <section id={sectionId} className={sectionClassName}>
      <Container>
        <SectionHeading title={t(titleKey)} description={t(descriptionKey)} />
        <div className="faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.id}>
              <summary>{t(`catalog.faq.${item.id}.question`)}</summary>
              <p>{t(`catalog.faq.${item.id}.answer`)}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FaqBlock;
