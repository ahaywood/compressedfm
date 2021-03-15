import styled from "styled-components";

const Navigation = () => {
  return (
    <StyledNavigation>

    </StyledNavigation>
  )
}

const StyledNavigation = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "main search"
    "sub search";
  height: 100vh;
  width: 100vw;

  .main-nav {
    background: #2E2E2E;
    grid-area: main;
  }

  .sub-nav {
    background: #2E2E2E;
    grid-area: sub;
  }

  .search {
    background: #404040;
    grid-area: search;
  }
`;

export default Navigation
