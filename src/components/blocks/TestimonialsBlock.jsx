import { testimonials } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import TestimonialCard from "../composites/TestimonialCard";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function TestimonialsBlock({
  sectionId = "testimonials",
  titleKey = "home.testimonialsBlock.title",
  descriptionKey = "home.testimonialsBlock.description",
  sectionClassName = "surface-section",
}) {
  const { t } = useI18n();

  return (
    <section id={sectionId} className={sectionClassName}>
      <Container>
        <SectionHeading title={t(titleKey)} description={t(descriptionKey)} />
        <div className="card-grid three">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.id}
              item={{
                name: t(`catalog.testimonials.${item.id}.name`),
                text: t(`catalog.testimonials.${item.id}.text`),
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TestimonialsBlock;
