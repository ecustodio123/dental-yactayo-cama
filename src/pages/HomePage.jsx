import FaqBlock from "../components/blocks/FaqBlock";
import HeroBlock from "../components/blocks/HeroBlock";
import HomeAboutTeaserBlock from "../components/blocks/HomeAboutTeaserBlock";
import HomeCtaStripBlock from "../components/blocks/HomeCtaStripBlock";
import ServicesBlock from "../components/blocks/ServicesBlock";
import TestimonialsBlock from "../components/blocks/TestimonialsBlock";
import TrustBlock from "../components/blocks/TrustBlock";

function HomePage() {
  const heroVariant = "b"; // Change to "b" to try the second hero design

  return (
    <main>
      <HeroBlock variant={heroVariant} />
      <TrustBlock />
      <HomeAboutTeaserBlock />
      <ServicesBlock sectionClassName="surface-section surface-section--soft" maxItems={3} showAllServicesLink showSupport={false} />
      <TestimonialsBlock sectionClassName="surface-section" />
      <HomeCtaStripBlock />
      <FaqBlock sectionClassName="surface-section" />
    </main>
  );
}

export default HomePage;
