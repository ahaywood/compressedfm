import styled, { css } from "styled-components";

const MixinBodyCopy = css`
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.sansSerif};
  font-size: 1.8rem;
  line-height: 2;
  margin: 0 0 2.0rem 0;
`;

const MixinLargeBodyCopy = css`
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.sansSerif};
  font-size: 2.8rem;
  font-weight: ${props => props.theme.fontBold};
  line-height: 1.2;
`;

const MixinSectionHeading = css`
  border: 1px solid ${props => props.theme.white};
  color: ${props => props.theme.white};
  display: inline-block;
  font-family: ${props => props.theme.mono};
  font-weight: ${props => props.theme.fontNormal};
  font-size: 2.4rem;
  font-style: italic;
  letter-spacing: 0.2rem;
  margin: 0 auto;
  padding: 20px 48px;
  position: relative;
  text-transform: uppercase;
`;

export {
  MixinBodyCopy,
  MixinLargeBodyCopy,
  MixinSectionHeading
};
