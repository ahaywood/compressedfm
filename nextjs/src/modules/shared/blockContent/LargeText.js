import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MixinLargeBodyCopy } from 'styles/Typography';

const LargeText = ({ children }) => <StyledLargeText>{children}</StyledLargeText>;

LargeText.propTypes = {
  children: PropTypes.string.isRequired,
};

export { LargeText };

const StyledLargeText = styled.span`
  ${MixinLargeBodyCopy}
  margin-bottom: ${(props) => props.theme.betweenTextBlocks};
`;
