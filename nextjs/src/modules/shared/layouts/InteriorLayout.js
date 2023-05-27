import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const InteriorLayout = ({ children, footerLinks }) => (
  <StyledPage>
    <Header />
    {children}
    <Footer footerLinks={footerLinks} />
  </StyledPage>
);

InteriorLayout.propTypes = {
  children: PropTypes.any,
  footerLinks: PropTypes.any,
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
