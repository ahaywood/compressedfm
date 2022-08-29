import styled from 'styled-components';
import { MixinSectionHeading, MixinBodyCopy, MixinLargeBodyCopy } from 'styles/Typography';
import { SocialMedia } from 'modules/shared/components/SocialMedia';
import BlockContent from '@sanity/block-content-to-react';
import { serializers } from 'modules/shared/blockContent/Serializers';

const Guest = ({ className, guest }) => (
  <div className={className}>
    {guest &&
      guest.map((item) => {
        const { _id, avatar, firstName, lastName, jobTitle, largeBody, bio, socialMedia } = item;
        return (
          <StyledPersonBio key={_id}>
            <div>
              <div className="meta">
                <div className="avatar">
                  <img alt="{firstName} {lastName}" src={avatar} />
                </div>
                <div>
                  <h2 className="name">
                    <span className="first">{firstName}</span> <span className="last">{lastName}</span>
                  </h2>
                  <h3 className="title">{jobTitle}</h3>
                </div>
              </div>
            </div>
            <p className="large-body-copy">{largeBody}</p>
            <BlockContent blocks={bio} serializers={serializers} />
            <div className="social-media">
              <SocialMedia className={className} socialMedia={socialMedia} />
            </div>
          </StyledPersonBio>
        );
      })}
  </div>
);

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
      border: 3px solid ${(props) => props.theme.white};
      border-radius: 50%;
      height: 187px;
      width: 187px;
    }
  }

  /* name */
  h2.name {
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 6.8rem;
    font-weight: ${(props) => props.theme.fontBlack};
    line-height: 0.9;
    margin: 25px 0 15px 0;
    padding: 0;

    .first {
      color: ${(props) => props.theme.yellow};
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
        color: ${(props) => props.theme.yellow};
      }
    }

    svg {
      height: 32px;
      width: 32px;
    }
  }
`;

export { Guest };
