import { css } from 'styled-components';
import { Breakpoints } from 'styles/Breakpoints';

const MixinSmallBodyCopy = css`
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 1.4rem;
  line-height: 1.75;
  margin: 0 0 2rem 0;

  @media (${Breakpoints.portrait}) {
    font-size: 1.6rem;
    line-height: 2;
  }
`;

const MixinBodyCopy = css`
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 1.6rem;
  line-height: 1.75;
  margin: 0 0 2rem 0;

  @media (${Breakpoints.portrait}) {
    font-size: 1.8rem;
    line-height: 2;
  }
`;

const MixinLargeBodyCopy = css`
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 1.8rem;
  font-weight: ${(props) => props.theme.fontBold};
  line-height: 1.4;

  @media (${Breakpoints.portrait}) {
    font-size: 2.8rem;
  }
`;

//  section header with a box around it
const MixinSectionHeading = css`
  border: 1px solid ${(props) => props.theme.white};
  color: ${(props) => props.theme.white};
  display: inline-block;
  font-family: ${(props) => props.theme.mono};
  font-weight: ${(props) => props.theme.fontNormal};
  font-size: 2rem;
  font-style: italic;
  letter-spacing: 0.2rem;
  margin: 0 auto;
  padding: 20px 48px;
  position: relative;
  text-transform: uppercase;

  @media (${Breakpoints.medium}) {
    font-size: 2.4rem;
  }
`;

const MixinHeading = css`
  border-bottom: 1px solid ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.mono};
  font-size: 1.4rem;
  letter-spacing: 0.4rem;
  margin-bottom: 30px;
  padding-bottom: 20px;
  text-transform: uppercase;
`;

const MixinPageTitle = css`
  font-family: ${(props) => props.theme.sansSerif};
  font-weight: ${(props) => props.theme.fontBlack};
  font-size: 3.8rem;
  line-height: 1.2;
  margin: 0 ${(props) => props.theme.mobilePadding} 40px;
  text-align: center;

  @media (${Breakpoints.portrait}) {
    font-size: 8.5rem;
    line-height: 1;
    margin: 0 auto 70px;
    max-width: 80%;
  }
`;

const MixinHeadingWithHorizontalLines = css`
  .page-title__wrapper {
    text-align: center;
  }

  h1 {
    background: url('/images/horizontal-divider.svg') left center no-repeat,
      url('/images/horizontal-divider.svg') right center no-repeat;
    color: white;
    display: inline-block;
    font-family: ${(props) => props.theme.mono};
    font-size: 2.4rem;
    font-style: italic;
    letter-spacing: 0.2rem;
    margin: 0 auto;
    padding: 0 125px;
    text-transform: uppercase;
    padding: 0 125px;
  }
`;

export {
  MixinBodyCopy,
  MixinHeading,
  MixinHeadingWithHorizontalLines,
  MixinLargeBodyCopy,
  MixinSectionHeading,
  MixinSmallBodyCopy,
  MixinPageTitle,
};
