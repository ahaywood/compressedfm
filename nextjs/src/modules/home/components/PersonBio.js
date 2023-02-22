import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import { SocialMedia } from 'modules/shared/components/SocialMedia';

// styles
import { MixinSectionHeading, MixinBodyCopy, MixinLargeBodyCopy } from 'styles/Typography';
import { Breakpoints } from 'styles/Breakpoints';

const PersonBio = ({
  className,
  avatar,
  firstName,
  lastName,
  jobTitle,
  largeBody,
  body,
  twitter,
  instagram,
  github,
  youtube,
  twitch,
  website,
  tiktok,
}) => (
  <StyledPersonBio className={className}>
    <div>
      <div className="meta">
        <div className="avatar">
          <Image alt="{firstName} {lastName}" src={avatar} height={187} width={187} layout="intrinsic" />
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
    <p className="body-copy">{body}</p>
    <div className="social-media">
      <SocialMedia
        twitter={twitter}
        instagram={instagram}
        github={github}
        youtube={youtube}
        twitch={twitch}
        website={website}
        tiktok={tiktok}
      />
    </div>
  </StyledPersonBio>
);

PersonBio.propTypes = {
  className: PropTypes.string,
  avatar: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  jobTitle: PropTypes.string,
  largeBody: PropTypes.string,
  body: PropTypes.string,
  twitter: PropTypes.string,
  instagram: PropTypes.string,
  github: PropTypes.string,
  youtube: PropTypes.string,
  twitch: PropTypes.string,
};

PersonBio.defaultProps = {
  className: '',
  avatar: '',
  firstName: '',
  lastName: '',
  jobTitle: '',
  largeBody: '',
  body: '',
  twitter: '',
  instagram: '',
  github: '',
  youtube: '',
};

const StyledPersonBio = styled.section`
  display: flex;
  flex-direction: column;

  .meta {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 60px;
    width: 100%;

    @media (${Breakpoints.small}) {
      flex-direction: row;
      justify-content: flex-start;
    }
  }

  .avatar {
    border-radius: 50%;
    margin-right: 20px;
    width: 187px;
  }

  /* name */
  h2.name {
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 6.8rem;
    line-height: 0.9;
    margin: 0 0 10px 0;
    padding: 0;

    .first {
      color: ${(props) => props.theme.yellow};
      display: block;
    }

    .last {
      display: block;
      white-space: nowrap;
    }
  }

  /* job title */
  h3 {
    ${MixinSectionHeading}
  }

  .title {
    font-style: normal;
    margin-bottom: 10px;
    padding: 7px;

    @media (${Breakpoints.medium}) {
      margin-bottom: 0;
      margin-left: -40px;
      padding: 7px 40px;
    }
  }

  .large-body-copy {
    ${MixinLargeBodyCopy}
  }

  .body-copy {
    ${MixinBodyCopy}
  }

  .social-media {
    margin: auto auto 0 0;
    justify-self: flex-end;
    padding-top: 10px;
    padding-bottom: 60px;

    ul {
      justify-content: flex-start;
    }

    a {
      color: ${(props) => props.theme.doveGray};

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

export { PersonBio };
