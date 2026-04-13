import { services } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import LoopCarousel from "../composites/LoopCarousel";
import ServiceCard from "../composites/ServiceCard";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function ServicesBlock() {
  const { t } = useI18n();

  return (
    <section className="surface-section">
      <Container>
        <SectionHeading title={t("home.servicesBlock.title")} description={t("home.servicesBlock.description")} />
        <LoopCarousel
          items={services}
          renderItem={(item, key) => (
            <ServiceCard
              key={key}
              item={{
                image: item.image,
                title: t(`catalog.services.${item.id}.title`),
                description: t(`catalog.services.${item.id}.description`),
              }}
            />
          )}
          visibleItems={4}
        />
      </Container>
    </section>
  );
}

export default ServicesBlock;
