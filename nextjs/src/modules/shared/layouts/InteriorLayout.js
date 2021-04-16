import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const InteriorLayout = ({ children }) => (
  <StyledPage>
    <Header />
    {children}
    <Footer />
  </StyledPage>
);

InteriorLayout.propTypes = {
  children: PropTypes.any,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledPage = styled.div`
  background: url('/images/bg.png') center -450px no-repeat;
  background-size: 100% auto;
  min-height: 100vh;
`;

export { InteriorLayout };
