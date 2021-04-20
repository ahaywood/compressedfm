import styled from 'styled-components';
import { MixinSectionHeading } from 'styles/Typography';
import { Breakpoints } from 'styles/Breakpoints';
import { PersonBio } from './PersonBio';

const TheHosts = () => (
  <StyledTheHosts>
    <div className="section-heading__wrapper">
      <h3 className="section-heading">The Hosts</h3>
    </div>
    {/* james */}
    <PersonBio
      className="james"
      avatar="/images/james.png"
      firstName="James"
      lastName="Q Quick"
      jobTitle="Fullstack Developer"
      largeBody="I'm a Fullstack Web Developer who is addicted to learning and loves working with people."
      body="I’m a Developer Advocate at Auth0 and have over 7 years of experience in Advocacy and Software Development. In my spare time, I run a YouTube channel, play co-ed soccer with my wife, spend time with my dogs, and can solve a Rubik's cube in under a minute."
      twitter="http://twitter.com/jamesqquick"
      github="http://github.com/jamesqquick"
      youtube="http://youtube.com/jamesqquick"
      twitch="http://twitch.com/jamesqquick"
    />

    {/* amy */}
    <PersonBio
      className="amy"
      avatar="/images/amy.png"
      firstName="Amy"
      lastName="Dutton"
      jobTitle="Senior UI/UX"
      largeBody="I love️ teaching designers how to code and developers how to design."
      body="I'm a Senior UI / UX designer and frontend developer at ZEAL. I have over 20 years of web experience, officially making me a granny in Internet years. I live in Nashville, TN with my husband, 3 adorable kids, and 2 dogs. If I'm not sitting in front of my computer making things, I'm hanging out with family and friends. I love streaming all the things, playing cards, reading, and drinking coffee. Lots of coffee."
      twitter="http://twitter.com/selfteachme"
      instagram="http://instagram.com/selfteachme"
      github="http://github.com/ahaywood"
      youtube="http://youtube.com/c/selfteachme"
    />
  </StyledTheHosts>
);

const StyledTheHosts = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 0;
  margin: 60px auto;
  max-width: ${(props) => props.theme.pageWidth};
  width: 100%;

  @media (${Breakpoints.portrait}) {
    grid-template-columns: repeat(2, 1fr);
  }

  .section-heading__wrapper {
    margin-bottom: 60px;
    text-align: center;
    width: 100%;

    @media (${Breakpoints.portrait}) {
      grid-column: span 2;
    }
  }

  .section-heading {
    ${MixinSectionHeading}
  }

  .james {
    @media (${Breakpoints.portrait}) {
      border-right: 1px solid ${(props) => props.theme.white};
      padding-right: 85px;
    }
  }

  .amy {
    @media (${Breakpoints.portrait}) {
      padding-left: 85px;
    }
  }

  .james,
  .amy {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0 ${(props) => props.theme.mobilePadding};

    @media (${Breakpoints.regular}) {
      padding: 0;
    }
  }
`;

export { TheHosts };
