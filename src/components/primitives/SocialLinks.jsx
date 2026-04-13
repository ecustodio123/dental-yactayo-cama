import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa6";
import { useI18n } from "../../lang/i18n";

const SOCIAL_ICONS = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  tiktok: FaTiktok,
};

function SocialLinks({ className = "", tone = "default" }) {
  const { t } = useI18n();

  const items = ["facebook", "instagram", "tiktok"];

  return (
    <div className={`social-links ${tone === "footer" ? "social-links--footer" : ""} ${className}`.trim()}>
      {items.map((network) => {
        const Icon = SOCIAL_ICONS[network];

        return (
          <a
            key={network}
            className="social-links__item"
            href={t(`business.social.${network}`)}
            target="_blank"
            rel="noreferrer"
            aria-label={t(`social.${network}`)}
            title={t(`social.${network}`)}
          >
            <Icon aria-hidden="true" />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
