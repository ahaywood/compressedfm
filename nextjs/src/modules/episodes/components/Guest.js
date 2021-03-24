import PropTypes from "prop-types";
import styled from "styled-components";
import { MixinSectionHeading, MixinBodyCopy, MixinLargeBodyCopy } from "styles/Typography"
import { SocialMedia } from "modules/shared/components/SocialMedia";
import { Breakpoints } from "styles/Breakpoints";

const Guest = ({ className, guest }) => {
  return (
    <div className={className}>
      {guest && guest.map(item => {
        const {
          avatar,
          firstName,
          lastName,
          jobTitle,
          largeBody,
          body,
          socialMedia: {
            facebook,
            twitter,
            instagram,
            github,
            twitch,
            youtube,
            website,
          }
        } = item;
        return (
          <StyledPersonBio>
            <div>
              <div className="meta">
                <div className="avatar">
                  <img alt={`{firstName} {lastName}`} src={avatar} />
                </div>
                <div>
                  <h2 className="name"><span className="first">{firstName}</span> <span className="last">{lastName}</span></h2>
                  <h3 className="title">{jobTitle}</h3>
                </div>
              </div>
            </div>
            <p className="large-body-copy">{largeBody}</p>
            <p className="body-copy">{body}</p>
            <div className="social-media">
              <SocialMedia
                facebook={facebook ? facebook : ''}
                github={github ? github : ''}
                instagram={instagram ? instagram : ''}
                twitch={twitch ? twitch : ''}
                twitter={twitter ? twitter : ''}
                youtube={youtube ? youtube : ''}
                website={website ? website : ''}
              />
            </div>
          </StyledPersonBio>
        )
      })}
    </div>
  )
}

const StyledPersonBio = styled.section`
  display: flex;
  flex-direction: column;

  .meta {
    display: flex;
    padding-top: 60px;
    width: 100%;
  }

  .avatar {
    margin-right: 20px;

    img {
      border: 3px solid ${props => props.theme.white};
      border-radius: 50%;
      height: 187px;
      width: 187px;
    }
  }

  /* name */
  h2.name {
    font-family: ${props => props.theme.sansSerif};
    font-size: 6.8rem;
    font-weight: ${props => props.theme.fontBlack};
    line-height: .9;
    margin: 25px 0 15px 0;
    padding: 0;

    .first {
      color: ${props => props.theme.yellow};
    }

    .last {
      white-space: nowrap;
    }
  }

  /* job title */
  h3 {
    ${MixinSectionHeading}
  }

  .title {
    font-style: normal;
    margin-left: -40px;
    padding: 7px 40px;
  }

  .large-body-copy {
    ${MixinLargeBodyCopy}
  }

  .body-copy {
    ${MixinBodyCopy}
  }

  .social-media {
    padding-top: 10px;

    ul {
      justify-content: flex-start;
    }

    li {
      margin-bottom: 0;
    }

    a {
      color: #747474;

      &:hover {
        color: ${props => props.theme.yellow};
      }
    }

    svg {
      height: 32px;
      width: 32px;
    }
  }
`;

export { Guest }
