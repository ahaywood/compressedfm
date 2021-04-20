import { css } from 'styled-components';
import { Breakpoints } from 'styles/Breakpoints';

const MixinForm = css`
  padding: 0 ${(props) => props.theme.mobilePadding};

  @media (${Breakpoints.portrait}) {
    padding: 0;
  }

  form {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 24px;
    grid-row-gap: 32px;
    margin: 60px auto;
    max-width: ${(props) => props.theme.formWidth};

    @media (${Breakpoints.portrait}) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .half,
  .full {
    position: relative;
  }

  .full {
    @media (${Breakpoints.portrait}) {
      grid-column: span 2;
    }
  }

  .action-buttons {
    text-align: right;

    button {
      margin-left: auto;
    }
  }
`;

const MixinTextField = css`
  background: transparent;
  border: 1px solid ${(props) => props.theme.white};
  box-sizing: border-box;
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 1.8rem;
  height: 55px;
  margin: 30px 0 0 0;
  padding: 0 15px;
  width: 100%;

  &:focus {
    border-color: ${(props) => props.theme.yellow};
    outline: none;
  }

  &:placeholder-shown + label {
    left: 15px;
    top: 48px;
  }

  /* must be listed below the :placeholder-shown pseudo class */
  &:focus + label {
    left: 0;
    top: 0;
  }
`;

const MixinTextarea = css`
  background: transparent;
  border: 1px solid ${(props) => props.theme.white};
  box-sizing: border-box;
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 1.8rem;
  height: 175px;
  margin: 30px 0 0 0;
  padding: 15px;
  width: 100%;

  &:focus {
    border-color: ${(props) => props.theme.yellow};
    outline: none;
  }

  &:placeholder-shown + label {
    left: 15px;
    top: 48px;
  }

  /* must be listed below the :placeholder-shown pseudo class */
  &:focus + label {
    left: 0;
    top: 0;
  }
`;

const MixinSelect = css`
  appearance: none;
  background: url('/images/select.svg') 98% center no-repeat;
  border: 1px solid ${(props) => props.theme.white};
  box-sizing: border-box;
  color: ${(props) => props.theme.white};
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 1.8rem;
  height: 55px;
  margin: 30px 0 0 0;
  padding: 0 15px 0 125px;
  width: 100%;

  &:focus {
    border-color: ${(props) => props.theme.yellow};
    outline: none;
  }

  & + label {
    cursor: default;
    left: 15px;
    pointer-events: none;
    top: 49px;
  }
`;

const MixinLabel = css`
  color: ${(props) => props.theme.yellow};
  cursor: text;
  display: block;
  font-family: ${(props) => props.theme.mono};
  font-size: 1.6rem;
  letter-spacing: 0.4rem;
  margin-bottom: 10px;
  position: absolute;
  text-transform: uppercase;
  transition: left 0.25s ease-in-out, top 0.25s ease-in-out;
  left: 0;
  top: 0;

  @media (${Breakpoints.small}) {
    font-size: 1.8rem;
  }
`;

const MixinButtonWithArrow = css`
  button {
    background: none;
    border: none;
    color: ${(props) => props.theme.yellow};
    cursor: pointer;
    position: absolute;
    right: 0;
    top: 24px;
    transition: right 0.25s ease-in-out;
    z-index: 5;

    &:hover {
      color: ${(props) => props.theme.lavenderIndigo};
      right: -10px;
    }
  }
`;

export { MixinButtonWithArrow, MixinForm, MixinLabel, MixinSelect, MixinTextarea, MixinTextField };
