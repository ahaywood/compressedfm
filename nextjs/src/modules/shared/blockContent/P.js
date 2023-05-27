import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MixinBodyCopy } from 'styles/Typography';

const P = ({ children }) => <StyledP>{children}</StyledP>;

P.propTypes = {
  children: PropTypes.any.isRequired,
};

export { P };

const StyledP = styled.p`
  ${MixinBodyCopy};
  margin-bottom: ${(props) => props.theme.betweenTextBlocks};

  a {
    border-bottom: 1px solid ${(props) => props.theme.yellow};
    color: ${(props) => props.theme.yellow};
    font-weight: ${(props) => props.theme.fontBold};
    text-decoration: none;

    &:hover {
      border-color: ${(props) => props.theme.lavenderIndigo};
      color: ${(props) => props.theme.lavenderIndigo};
    }
  }
`;
