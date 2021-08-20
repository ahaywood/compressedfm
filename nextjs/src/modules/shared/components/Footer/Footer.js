import { useEffect, useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import styled from 'styled-components';
import client from 'utils/client';
import groq from 'groq';

// components
import { Breakpoints } from 'styles/Breakpoints';
import { Constants } from 'utils/constants';
import { SocialMedia } from '../SocialMedia';
import { VerticalDivider } from '../VerticalDivider';

// utils

/** -------------------------------------------------
* QUERY
---------------------------------------------------- */
const query = groq`*[_type == "legal" && published == true] {
  _id,
  title,
  slug
}`;

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Footer = () => {
  const [footerLinks, setFooterLinks] = useState();

  useEffect(() => {
    client.fetch(query).then((res) => setFooterLinks(res));
  }, []);

  const getCurrentYear = () => format(new Date(), 'yyyy');

  return (
    <StyledFooter>
      <VerticalDivider className="vertical-divider" />
      <SocialMedia
        className="social-media"
        instagram={Constants.COMPRESSEDFM_INSTAGRAM_URL}
        github={Constants.COMPRESSEDFM_GITHUB_URL}
        twitter={Constants.COMPRESSEDFM_TWITTER_URL}
        rss={Constants.COMPRESSEDFM_RSS}
      />

      <div className="links-wrapper">
        {footerLinks && (
          <div className="legal">
            <ul>
              {footerLinks.map((link) => (
                <li key={link._id}>
                  <Link href={`/legal/${link.slug.current}`}>
                    <a>{link.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="copyright">
          <span className="line">Copyright &copy;{getCurrentYear()}. COMPRESSED.fm.</span>{' '}
          <span className="line">All Rights Reserved.</span>
        </div>
      </div>
    </StyledFooter>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledFooter = styled.footer`
  padding: 0 ${(props) => props.theme.mobilePadding};
  text-align: center;

  @media (${Breakpoints.portrait}) {
    padding: 0;
  }

  .vertical-divider {
    margin-bottom: 90px;
  }

  .social-media {
    a {
      color: ${(props) => props.theme.mediumOrchard};

      &:hover {
        color: ${(props) => props.theme.yellow};
      }
    }

    svg {
      height: 32px;
      width: 32px;
    }
  }

  .links-wrapper {
    border-top: 1px solid #454545;
    padding: 40px 0 65px;
    color: ${(props) => props.theme.white};
    font-size: 1.6rem;
    font-family: ${(props) => props.theme.mono};
  }

  .legal {
    ul {
      display: flex;
      justify-content: center;
      list-style: none;
      text-transform: uppercase;
      padding: 0;
      margin: 0 0 20px;
      flex-direction: column;

      // add stars between links
      @media (${Breakpoints.small}) {
        flex-direction: row;

        li {
          &:first-child:before {
            content: '*';
            margin: 0 10px 0 0;
          }

          &:after {
            content: '*';
            margin: 0 10px;
          }
        }
      }

      // add vertical spacing for mobile
      li {
        margin-bottom: 10px;

        @media (${Breakpoints.small}) {
          margin: 0;
        }
      }

      a {
        color: ${(props) => props.theme.white};

        &:hover {
          color: ${(props) => props.theme.yellow};
          text-decoration: none;
        }
      }
    }
  }

  .copyright {
    font-style: italic;
    text-align: center;
    margin: 0 auto;
    max-width: 1245px;
    position: relative;

    .line {
      white-space: nowrap;
    }
  }
`;

export { Footer };
