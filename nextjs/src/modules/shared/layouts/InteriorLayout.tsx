import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  children: JSX.Element
}


/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const InteriorLayout = ({ children }: Props): JSX.Element => (
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
