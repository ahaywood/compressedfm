import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon } from 'modules/shared/components/Icon';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SocialMedia = ({
  className,
  discord,
  devTo,
  dribbble,
  facebook,
  instagram,
  hashnode,
  github,
  linkedin,
  medium,
  tiktok,
  twitch,
  twitter,
  rss,
  pinterest,
  website,
  youtube,
}) => (
  <StyledSocialMedia className={className}>
    {/* DevTo */}
    {devTo && (
      <li>
        <a href={devTo} target="_blank" rel="noreferrer">
          <Icon name="devto" />
        </a>
      </li>
    )}

    {/* Dribbble */}
    {dribbble && (
      <li>
        <a href={dribbble} target="_blank" rel="noreferrer">
          <Icon name="dribbble" />
        </a>
      </li>
    )}

    {/* Facebook */}
    {facebook && (
      <li>
        <a href={facebook} target="_blank" rel="noreferrer">
          <Icon name="facebook" />
        </a>
      </li>
    )}

    {/* Hashnode */}
    {hashnode && (
      <li>
        <a href={hashnode} target="_blank" rel="noreferrer">
          <Icon name="hashnode" />
        </a>
      </li>
    )}

    {/* Instagram */}
    {instagram && (
      <li>
        <a href={instagram} target="_blank" rel="noreferrer">
          <Icon name="instagram" />
        </a>
      </li>
    )}

    {/* GitHub */}
    {github && (
      <li>
        <a href={github} target="_blank" rel="noreferrer">
          <Icon name="github" />
        </a>
      </li>
    )}

    {/* LinkedIn */}
    {linkedin && (
      <li>
        <a href={linkedin} target="_blank" rel="noreferrer">
          <Icon name="linkedin" />
        </a>
      </li>
    )}

    {/* Medium */}
    {medium && (
      <li>
        <a href={medium} target="_blank" rel="noreferrer">
          <Icon name="medium" />
        </a>
      </li>
    )}

    {/* Pinterest */}
    {pinterest && (
      <li>
        <a href={pinterest} target="_blank" rel="noreferrer">
          <Icon name="pinterest" />
        </a>
      </li>
    )}

    {/* TikTok */}
    {tiktok && (
      <li>
        <a href={tiktok} target="_blank" rel="noreferrer">
          <Icon name="tiktok" />
        </a>
      </li>
    )}

    {/* Twitch */}
    {twitch && (
      <li>
        <a href={twitch} target="_blank" rel="noreferrer">
          <Icon name="twitch" />
        </a>
      </li>
    )}

    {/* Twitter */}
    {twitter && (
      <li>
        <a href={twitter} target="_blank" rel="noreferrer">
          <Icon name="twitter" />
        </a>
      </li>
    )}

    {/* YouTube */}
    {youtube && (
      <li>
        <a href={youtube} target="_blank" rel="noreferrer">
          <Icon name="youtube" />
        </a>
      </li>
    )}

    {/*  RSS */}
    {rss && (
      <li>
        <a href={rss} target="_blank" rel="noreferrer">
          <Icon name="rss" />
        </a>
      </li>
    )}

    {/*  Discord */}
    {discord && (
      <li>
        <a href={discord} target="_blank" rel="noreferrer">
          <Icon name="discord" />
        </a>
      </li>
    )}

    {/*  Website */}
    {website && (
      <li>
        <a href={website} target="_blank" rel="noreferrer">
          <Icon name="website" />
        </a>
      </li>
    )}
  </StyledSocialMedia>
);

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
