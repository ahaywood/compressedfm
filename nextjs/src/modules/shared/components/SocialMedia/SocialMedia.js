import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'modules/shared/components/Icon';
import Link from 'next/link';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SocialMedia = (props) => {
  const {
    devTo,
    discord,
    dribbble,
    facebook,
    github,
    hashnode,
    instagram,
    linkedin,
    medium,
    pinterest,
    rss,
    tiktok,
    twitch,
    twitter,
    website,
    youtube,
    className,
  } = props;
  return (
    <StyledSocialMedia className={className}>
      {/* DevTo */}
      {devTo && (
        <li>
          <Link href={devTo} target="_blank" rel="noreferrer">
            <Icon name="devto" />
          </Link>
        </li>
      )}

      {/* Dribbble */}
      {dribbble && (
        <li>
          <Link href={dribbble} target="_blank" rel="noreferrer">
            <Icon name="dribbble" />
          </Link>
        </li>
      )}

      {/* Facebook */}
      {facebook && (
        <li>
          <Link href={facebook} target="_blank" rel="noreferrer">
            <Icon name="facebook" />
          </Link>
        </li>
      )}

      {/* Hashnode */}
      {hashnode && (
        <li>
          <Link href={hashnode} target="_blank" rel="noreferrer">
            <Icon name="hashnode" />
          </Link>
        </li>
      )}

      {/* Instagram */}
      {instagram && (
        <li>
          <Link href={instagram} target="_blank" rel="noreferrer">
            <Icon name="instagram" />
          </Link>
        </li>
      )}

      {/* GitHub */}
      {github && (
        <li>
          <Link href={github} target="_blank" rel="noreferrer">
            <Icon name="github" />
          </Link>
        </li>
      )}

      {/* LinkedIn */}
      {linkedin && (
        <li>
          <Link href={linkedin} target="_blank" rel="noreferrer">
            <Icon name="linkedin" />
          </Link>
        </li>
      )}

      {/* Medium */}
      {medium && (
        <li>
          <Link href={medium} target="_blank" rel="noreferrer">
            <Icon name="medium" />
          </Link>
        </li>
      )}

      {/* Pinterest */}
      {pinterest && (
        <li>
          <Link href={pinterest} target="_blank" rel="noreferrer">
            <Icon name="pinterest" />
          </Link>
        </li>
      )}

      {/* TikTok */}
      {tiktok && (
        <li>
          <Link href={tiktok} target="_blank" rel="noreferrer">
            <Icon name="tiktok" />
          </Link>
        </li>
      )}

      {/* Twitch */}
      {twitch && (
        <li>
          <Link href={twitch} target="_blank" rel="noreferrer">
            <Icon name="twitch" />
          </Link>
        </li>
      )}

      {/* Twitter */}
      {twitter && (
        <li>
          <Link href={twitter} target="_blank" rel="noreferrer">
            <Icon name="twitter" />
          </Link>
        </li>
      )}

      {/* YouTube */}
      {youtube && (
        <li>
          <Link href={youtube} target="_blank" rel="noreferrer">
            <Icon name="youtube" />
          </Link>
        </li>
      )}

      {/*  RSS */}
      {rss && (
        <li>
          <Link href={rss} target="_blank" rel="noreferrer">
            <Icon name="rss" />
          </Link>
        </li>
      )}

      {/*  Discord */}
      {discord && (
        <li>
          <Link href={discord} target="_blank" rel="noreferrer">
            <Icon name="discord" />
          </Link>
        </li>
      )}

      {/*  Website */}
      {website && (
        <li>
          <Link href={website} target="_blank" rel="noreferrer">
            <Icon name="website" />
          </Link>
        </li>
      )}
    </StyledSocialMedia>
  );
};

SocialMedia.propTypes = {
  className: PropTypes.string,
  discord: PropTypes.string,
  dribbble: PropTypes.string,
  facebook: PropTypes.string,
  github: PropTypes.string,
  instagram: PropTypes.string,
  linkedin: PropTypes.string,
  pinterest: PropTypes.string,
  twitch: PropTypes.string,
  twitter: PropTypes.string,
  rss: PropTypes.string,
  youtube: PropTypes.string,
};

SocialMedia.defaultProps = {
  className: '',
  discord: '',
  dribbble: '',
  facebook: '',
  github: '',
  instagram: '',
  linkedin: '',
  pinterest: '',
  twitch: '',
  twitter: '',
  rss: '',
  youtube: '',
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledSocialMedia = styled.ul`
  align-items: center;
  color: ${(props) => props.theme.lavenderIndigo};
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    margin: 0 45px 45px 0;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export { SocialMedia };
