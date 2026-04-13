import { staffMembers } from "../../data/demoContent";
import { useI18n } from "../../lang/i18n";
import Container from "../primitives/Container";
import SectionHeading from "../primitives/SectionHeading";

function StaffBlock() {
  const { t } = useI18n();

  return (
    <section id="staff" className="surface-section surface-section--soft">
      <Container>
        <SectionHeading title={t("pages.about.staffTitle")} description={t("pages.about.staffDescription")} />
        <div className="staff-grid">
          {staffMembers.map((member) => (
            <article key={member.id} className="surface-card staff-card">
              <img src={member.image} alt={t(`catalog.staff.${member.id}.imageAlt`)} loading="lazy" />
              <div className="surface-card__body">
                <h3>{t(`catalog.staff.${member.id}.name`)}</h3>
                <p className="staff-role">{t(`catalog.staff.${member.id}.role`)}</p>
                <p className="staff-bio">{t(`catalog.staff.${member.id}.bio`)}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default StaffBlock;
