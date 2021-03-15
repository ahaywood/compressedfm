import { format } from "date-fns";
import styled from "styled-components";
import { SocialMedia } from "../SocialMedia"
import { VerticalDivider } from "../VerticalDivider"
import { Constants } from "utils/constants";

const Footer = () => {

  const getCurrentYear = () => {
    return format(new Date(), "yyyy");
  }

  return (
    <StyledFooter>
      <VerticalDivider className="vertical-divider" />
      <SocialMedia
        className="social-media"
        instagram={Constants.COMPRESSEDFM_INSTAGRAM_URL}
        github={Constants.COMPRESSEDFM_GITHUB_URL}
        twitter={Constants.COMPRESSEDFM_TWITTER_URL}
      />
      <div className="copyright">
        Copyright &copy;{getCurrentYear()}. COMPRESSED.fm. All Rights Reserved.
      </div>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  text-align: center;

  .vertical-divider {
    margin-bottom: 90px;
  }

  .social-media {
    a {
      color: ${props => props.theme.mediumOrchard};
    }

    svg {
      fill: currentColor;
      height: 32px;
      width: 32px;
    }
  }

  .copyright {
    border-top: 1px solid #454545;
    color: ${props => props.theme.white};
    font-size: 1.6rem;
    font-family: ${props => props.theme.mono};
    font-style: italic;
    text-align: center;
    margin: 0 auto;
    max-width: 1245px;
    padding: 40px 0 65px;
    position: relative;
    }
`;

export { Footer }
