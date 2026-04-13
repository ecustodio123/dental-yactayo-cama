import AboutBlock from "../components/blocks/AboutBlock";
import StaffBlock from "../components/blocks/StaffBlock";
import TestimonialsBlock from "../components/blocks/TestimonialsBlock";

function AboutPage() {
  return (
    <main>
      <AboutBlock />
      <StaffBlock />
      <TestimonialsBlock
        sectionId="community-reviews"
        titleKey="pages.about.reviewsTitle"
        descriptionKey="pages.about.reviewsDescription"
        sectionClassName="surface-section"
      />
    </main>
  );
}

export default AboutPage;
