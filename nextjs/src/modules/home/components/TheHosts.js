import Image from "next/image";
import styled from "styled-components";
import { MixinSectionHeading, MixinBodyCopy, MixinLargeBodyCopy } from "styles/Typography"
import { SocialMedia } from "modules/shared/components/SocialMedia";

const TheHosts = () => {
  return (
    <StyledTheHosts>
      <div className="section-heading__wrapper">
        <h3 className="section-heading">The Hosts</h3>
      </div>
      {/* james */}
      <div className="james">
        <div>
          <div className="meta">
            <div className="avatar">
              <Image alt="James Q Quick" src="/images/james.png" height={187} width={187} layout="intrinsic" />
            </div>
            <div>
              <h2 className="name"><span className="first">James</span> <span className="last">Q Quick</span></h2>
              <h3 className="title">FULLSTACK DEVELOPER</h3>
            </div>
          </div>
        </div>
        <p className="large-body-copy">
          I'm a Fullstack Web Developer who is addicted to learning and loves working with people.
          </p>
        <p className="body-copy">
          I’m a Developer Advocate at Auth0 and have over 7 years of experience in Advocacy and Software Development. In my spare time, I run a YouTube channel, play co-ed soccer with my wife, spend time with my dogs, and can solve a Rubik's cube in under a minute.
          </p>
        <div className="social-media">
          <SocialMedia
            twitter="http://twitter.com/jamesqquick"
            github="http://github.com/jamesqquick"
            youtube="http://youtube.com/jamesqquick"
            twitch="http://twitch.com/jamesqquick"
          />
        </div>
      </div>

      {/* amy */}
      <div className="amy">
        <div>
          <div className="meta">
            <div className="avatar">
              <Image alt="Amy Dutton" src="/images/amy.png" height={187} width={187} layout="intrinsic" />
            </div>
            <div>
              <h2 className="name"><span className="first">Amy</span> <span className="last">Dutton</span></h2>
              <h3 className="title">Senior UI/UX</h3>
            </div>
          </div>
        </div>
        <p className="large-body-copy">
          I love️ teaching designers how to code and developers how to design.
            </p>
        <p className="body-copy">
          I'm a Senior UI / UX designer and frontend developer at ZEAL. I have over 20 years of web experience, officially making me a granny in Internet years. I live in Nashville, TN with my husband, 3 adorable kids, and 2 dogs. If I'm not sitting in front of my computer making things, I'm hanging out with family and friends. I love streaming all the things, playing cards, reading, and drinking coffee. Lots of coffee.
            </p>
        <div className="social-media">
          <SocialMedia
            twitter="http://twitter.com/selfteachme"
            instagram="http://instagram.com/selfteachme"
            github="http://github.com/ahaywood"
            youtube="http://youtube.com/c/selfteachme"
          />
        </div>
      </div>
    </StyledTheHosts>
  )
}

const StyledTheHosts = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0;
  margin: 0 auto 60px;
  max-width: ${props => props.theme.pageWidth};
  width: 100%;

  .james {
    border-right: 1px solid ${props => props.theme.white};
    padding-right: 85px;
  }

  .amy {
    padding-left: 85px;
  }

  .james,
  .amy {
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .section-heading__wrapper {
    grid-column: span 2;
    margin-bottom: 60px;
    text-align: center;
    width: 100%;
  }

  .meta {
    display: flex;
    padding-top: 60px;
    width: 100%;
  }

  .avatar {
    margin-right: 20px;
    width: 187px;
  }

  /* name */
  h2.name {
    font-family: ${props => props.theme.sansSerif};
    font-size: 6.8rem;
    line-height: .9;
    margin: 0 0 10px 0;
    padding: 0;

    .first {
      color: ${props => props.theme.yellow};
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
    padding: 7px 40px;
    font-style: normal;
    margin-left: -40px;
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

export { TheHosts }
