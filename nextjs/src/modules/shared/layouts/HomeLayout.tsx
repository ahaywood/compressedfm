import styled from 'styled-components';
import { HeaderHome } from 'modules/shared/components/Header/HeaderHome';
import { Footer } from 'modules/shared/components/Footer';

interface HomeLayoutProps {
  children: React.ReactNode
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const HomeLayout = ({ children }: HomeLayoutProps) => (
  <StyledPage>
    <HeaderHome />
    {children}
    <Footer />
  </StyledPage>
);

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledPage = styled.div`
  background: url('/images/bg.png') center -25px no-repeat;
  background-size: 100% auto;
  min-height: 100vh;
`;

export { HomeLayout };
