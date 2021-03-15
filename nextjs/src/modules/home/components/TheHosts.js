import Image from "next/image";
import styled from "styled-components";
import { MixinSectionHeading } from "styles/Typography"

const TheHosts = () => {
  return (
    <StyledTheHosts>
      <h3 className="section-heading">The Hosts</h3>
      <div className="two-columns">
        <div>
          <div className="meta">
            <div className="avatar">
              <Image alt="James Q Quick" src="/images/james.png" height={187} width={187} />
            </div>
            <div>
              <h2 className="name"><span className="first">James</span> <span className="last">Q Quick</span></h2>
              <h3 className="title">FULLSTACK DEVELOPER</h3>
            </div>
          </div>
        </div>
        <div>
          <p className="large-body-copy">
            I'm a Fullstack Web Developer who is addicted to learning and loves working with people.
          </p>
          <p className="body-copy">
            I’m a Developer Advocate at Auth0 and have over 7 years of experience in Advocacy and Software Development. In my spare time, I run a YouTube channel, play co-ed soccer with my wife, spend time with my dogs, and can solve a Rubik's cube in under a minute.
          </p>
        </div>
      </div>
    </StyledTheHosts>
  )
}

const StyledTheHosts = styled.section`
  /* name */
  h2.name {
    font-family: ${props => props.theme.sansSerif};

    font-size: 6.8rem;
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
`;

export { TheHosts }
