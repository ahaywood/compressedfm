import styled from "styled-components";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const InteriorLayout = (props) => {
  return (
    <StyledPage>
      <Header />
      {props.children}
      <Footer />
    </StyledPage>
  )
}

const StyledPage = styled.div`
  background: url('/images/bg.png') center -450px no-repeat;
  background-size: 100% auto;
  min-height: 100vh;
`;

export { InteriorLayout }
