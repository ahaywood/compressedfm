import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MixinBodyCopy } from 'styles/Typography';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const UnorderedList = ({ children }) => <StyledUl>{children}</StyledUl>;

UnorderedList.propTypes = {
  children: PropTypes.string.isRequired,
};

export { UnorderedList };

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledUl = styled.div`
  margin-bottom: ${(props) => props.theme.betweenTextBlocks};

  li {
    ${MixinBodyCopy};
  }

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
