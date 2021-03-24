import styled from "styled-components";

// components
import { Episode } from "./Episode";

// styles
import { MixinSectionHeading } from "styles/Typography";
import { Breakpoints } from "styles/Breakpoints";


/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const EpisodeGrid = ({ header, episodes }) => {
  return (
    <StyledEpisodeGrid
      className={header ? 'w-section-header' : 'no-section-header'}
    >
      { (eheader) && (
        <div className="section-heading">
          <h3>{header}</h3>
        </div>
      )}
      {
        episodes && episodes.map((item) => {
          return <Episode className="episode-card" key={item._id} episode={item} />
        })
      }
    </StyledEpisodeGrid >
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledEpisodeGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin: 60px auto;
  max-width: ${props => props.theme.pageWidth};

  @media (${Breakpoints.portrait}) {
    grid-template-columns: repeat(3, 1fr);
  }

  .section-heading {
    margin-bottom: 60px;
    text-align: center;
    width: 100%;

    @media (${Breakpoints.portrait}) {
      grid-column: span 3;
    }
  }

  h3 {
    ${MixinSectionHeading};
  }


  /*
    remove the dotted line for items on the end
    - The section header throws off the counting
  */
  &.w-section-header > .episode-card:nth-child(3n + 1),
  &.no-section-header > .episode-card:nth-child(3n) {
    background: none;
  }

}`;

export { EpisodeGrid }
