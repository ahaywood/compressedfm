import styled from "styled-components";

// components
import { EpisodeGrid } from "modules/shared/components/EpisodeGrid";
import { Newsletter } from "modules/shared/components/Newsletter";
import { VerticalDivider } from "modules/shared/components/VerticalDivider";
import { HorizontalDivider } from "modules/shared/components/HorizontalDivider";
import { SearchForm } from "modules/shared/components/Header/components/SearchForm"

// styles
import { MixinSectionHeading, MixinPageTitle } from "styles/Typography";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SearchPage = ({ episodes, keywords }) => {
  return (
    <StyledSearchPage>
      <h3>Search Results</h3>
      <h1>{keywords}</h1>
      <div className="search-again">
        <SearchForm />
      </div>
      <EpisodeGrid episodes={episodes} />
      <VerticalDivider />
      <Newsletter />
    </StyledSearchPage>
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledSearchPage = styled.section`
  h3 {
    ${MixinSectionHeading};
    border: none;
    padding: 0;
    text-align: center;
    width: 100%;
  }

  h1 {
    ${MixinPageTitle};
    margin-bottom: 0;
  }

  .search-again {
    margin: 0 auto;
    max-width: 50%;
  }
`;

export { SearchPage }