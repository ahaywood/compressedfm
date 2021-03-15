import PropTypes from "prop-types";
import styled from "styled-components";
import { Icon } from "../icon";

const SocialMedia = ({
  className,
  facebook,
  instagram,
  github,
  twitch,
  twitter,
  youtube
}) => {
  return (
    <StyledSocialMedia className={className}>
      {/* Facebook */}
      {facebook && (
        <li>
          <a href={facebook} target="_blank"><Icon name="facebook" /></a>
          facebook
        </li>
      )}

      {instagram && (
        <li>
          <a href={instagram} target="_blank"><Icon name="instagram" /></a>
        </li>
      )}

      {/* GitHub */}
      { github && (
        <li>
          <a href={github} target="_blank"><Icon name="github" /></a>
        </li>
      )}

      {/* Twitch */}
      { twitch && (
        <li>
          <a href={twitch} target="_blank"><Icon name="twitch" /></a>
          twitch
        </li>
      )}

      {/* Twitter */}
      { twitter && (
        <li>
          <a href={twitter} target="_blank"><Icon name="twitter" /></a>
        </li>
      )}

      {/* YouTube */}
      { youtube && (
        <li>
          <a href={youtube} target="_blank"><Icon name="youtube" /></a>
          youtube
        </li>
      )}

    </StyledSocialMedia>
  )
}

SocialMedia.propTypes = {
  className: PropTypes.string,
  facebook: PropTypes.string,
  github: PropTypes.string,
  twitch: PropTypes.string,
  twitter: PropTypes.string,
  youtube: PropTypes.string
};

SocialMedia.defaultProps = {
  className: "",
  facebook: "",
  github: "",
  twitch: "",
  twitter: "",
  youtube: ""
};

const StyledSocialMedia = styled.ul`
  align-items: center;
  color: ${props => props.theme.lavendarIndigo};
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

  svg {
    fill: currentColor;
  }
`;

export { SocialMedia }
