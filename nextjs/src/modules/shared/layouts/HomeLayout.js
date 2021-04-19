import styled from 'styled-components';
import PropTypes from 'prop-types';
import { HeaderHome } from 'modules/shared/components/Header/HeaderHome';
import { Footer } from 'modules/shared/components/Footer';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const HomeLayout = ({ children }) => (
  <StyledPage>
    <HeaderHome />
    {children}
    <Footer />
  </StyledPage>
);

HomeLayout.propTypes = {
  children: PropTypes.any,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledPage = styled.div`
  background: url('/images/bg.png') center -25px no-repeat;
  background-size: 100% auto;
  min-height: 100vh;
`;

export { HomeLayout };
