import styled from "styled-components";
import { HeaderHome } from "modules/shared/components/Header/HeaderHome";
import { Footer } from "modules/shared/components/Footer";

const HomeLayout = ({ children }) => {
  return (
    <StyledPage>
      <HeaderHome />
      {children}
      <Footer />
    </StyledPage>
  )
}

const StyledPage = styled.div`
  background: url('/images/bg.png') center -25px no-repeat;
  background-size: 100% auto;
  min-height: 100vh;
`;

export { HomeLayout }
