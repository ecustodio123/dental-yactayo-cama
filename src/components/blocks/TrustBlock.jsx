import { trustStats } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function TrustBlock() {
  const { t } = useI18n();

  return (
    <section id="about" className="surface-section surface-section--soft">
      <Container>
        <SectionHeading title={t("home.trustBlock.title")} description={t("home.trustBlock.description")} />
        <div className="card-grid four trust-grid">
          {trustStats.map((item) => (
            <article key={item.id} className="surface-card trust-card">
              <div className="surface-card__body">
                <p className="trust-card__value">{t(`catalog.trustStats.${item.id}.value`)}</p>
                <h3>{t(`catalog.trustStats.${item.id}.label`)}</h3>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default TrustBlock;
