import styled, { css } from "styled-components";

const MixinSmallBodyCopy = css`
  color: ${props => props.theme.white};
  font-family: ${props => props.theme.sansSerif};
  font-size: 1.6rem;
  line-height: 2;
  margin: 0 0 2.0rem 0;
`;

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

//  section header with a box around it
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

const MixinHeading = css`
  border-bottom: 1px solid ${props => props.theme.white};
  font-family: ${props => props.theme.mono};
  font-size: 1.4rem;
  letter-spacing: 0.4rem;
  margin-bottom: 30px;
  padding-bottom: 20px;
  text-transform: uppercase;
`;

const MixinPageTitle = css`
  font-family: ${props => props.theme.sansSerif};
    font-weight: ${props => props.theme.fontBlack};
    font-size: 8.5rem;
    line-height: 1;
    max-width: 80%;
    margin: 0 auto 70px;
    text-align: center;
`;

export {
  MixinBodyCopy,
  MixinHeading,
  MixinLargeBodyCopy,
  MixinSectionHeading,
  MixinSmallBodyCopy,
  MixinPageTitle
};