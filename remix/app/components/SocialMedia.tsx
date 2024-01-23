import { Icon } from './Icon';

interface SocialMediaProps {
  className?: string;
  socialMedia: SocialMedia;
}

const SocialMedia = ({ className = '', socialMedia }: SocialMediaProps) => {
  return (
    <ul className={`social-media list-none gap-x-11 flex items-center text-lavenderIndigo m-0 p-0 ${className}`}>
      {/* DevTo */}
      {socialMedia?.devTo && (
        <li>
          <a href={socialMedia?.devTo} target="_blank" rel="noreferrer">
            <Icon name="devto" />
          </a>
        </li>
      )}

      {/* Dribbble */}
      {socialMedia?.dribbble && (
        <li>
          <a href={socialMedia?.dribbble} target="_blank" rel="noreferrer">
            <Icon name="dribbble" />
          </a>
        </li>
      )}

      {/* Facebook */}
      {socialMedia?.facebook && (
        <li>
          <a href={socialMedia?.facebook} target="_blank" rel="noreferrer">
            <Icon name="facebook" />
          </a>
        </li>
      )}

      {/* Hashnode */}
      {socialMedia?.hashnode && (
        <li>
          <a href={socialMedia?.hashnode} target="_blank" rel="noreferrer">
            <Icon name="hashnode" />
          </a>
        </li>
      )}

      {/* Instagram */}
      {socialMedia?.instagram && (
        <li>
          <a href={socialMedia?.instagram} target="_blank" rel="noreferrer">
            <Icon name="instagram" />
          </a>
        </li>
      )}

      {/* GitHub */}
      {socialMedia?.github && (
        <li>
          <a href={socialMedia?.github} target="_blank" rel="noreferrer">
            <Icon name="github" />
          </a>
        </li>
      )}

      {/* LinkedIn */}
      {socialMedia?.linkedin && (
        <li>
          <a href={socialMedia?.linkedin} target="_blank" rel="noreferrer">
            <Icon name="linkedin" />
          </a>
        </li>
      )}

      {/* Medium */}
      {socialMedia?.medium && (
        <li>
          <a href={socialMedia?.medium} target="_blank" rel="noreferrer">
            <Icon name="medium" />
          </a>
        </li>
      )}

      {/* Pinterest */}
      {socialMedia?.pinterest && (
        <li>
          <a href={socialMedia?.pinterest} target="_blank" rel="noreferrer">
            <Icon name="pinterest" />
          </a>
        </li>
      )}

      {/* TikTok */}
      {socialMedia?.tiktok && (
        <li>
          <a href={socialMedia?.tiktok} target="_blank" rel="noreferrer">
            <Icon name="tiktok" />
          </a>
        </li>
      )}

      {/* Twitch */}
      {socialMedia?.twitch && (
        <li>
          <a href={socialMedia?.twitch} target="_blank" rel="noreferrer">
            <Icon name="twitch" />
          </a>
        </li>
      )}

      {/* Twitter */}
      {socialMedia?.twitter && (
        <li>
          <a href={socialMedia?.twitter} target="_blank" rel="noreferrer">
            <Icon name="twitter" />
          </a>
        </li>
      )}

      {/* YouTube */}
      {socialMedia?.youtube && (
        <li>
          <a href={socialMedia?.youtube} target="_blank" rel="noreferrer">
            <Icon name="youtube" />
          </a>
        </li>
      )}

      {/*  RSS */}
      {socialMedia?.rss && (
        <li>
          <a href={socialMedia?.rss} target="_blank" rel="noreferrer">
            <Icon name="rss" />
          </a>
        </li>
      )}

      {/*  Discord */}
      {socialMedia?.discord && (
        <li>
          <a href={socialMedia?.discord} target="_blank" rel="noreferrer">
            <Icon name="discord" />
          </a>
        </li>
      )}

      {/*  Website */}
      {socialMedia?.website && (
        <li>
          <a href={socialMedia?.website} target="_blank" rel="noreferrer">
            <Icon name="website" />
          </a>
        </li>
      )}
    </ul>
  );
};

export { SocialMedia };
