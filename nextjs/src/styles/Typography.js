import styled, { css } from "styled-components";

const MixinBodyCopy = css`
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.sansSerif};
  font-size: 1.8rem;
  line-height: 2;
  margin: 0 0 2.0rem 0;
`;

export { MixinBodyCopy };

const MixinSectionHeading = css`
  border: 1px solid ${props => props.theme.white};
  color: ${props => props.theme.white};
  display: inline-block;
  font-family: ${props => props.theme.mono};;
  font-size: 2.4rem;
  letter-spacing: 0.2rem;
  margin: 0 auto;
  padding: 20px 48px;
  position: relative;
`;

export { MixinSectionHeading };