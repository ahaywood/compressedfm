import { useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import kwesforms from 'kwesforms';

// component
import { Icon } from "modules/shared/components/Icon";

// styles
import { MixinBodyCopy } from "styles/Typography";
import { MixinTextField, MixinLabel, MixinButtonWithArrow } from "styles/Form";
import { Breakpoints } from "styles/Breakpoints";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Newsletter = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => { }

  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <StyledNewsletter>
      <h2>Sign up for the newsletter</h2>
      <p>
        Want to stay up to date on our podcast? Get a behind-the-scenes look{" "}
        and know when new episodes drop.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="kwes-form" action="https://kwes.io/api/foreign/forms/VBsOqTJ8MTds1LU9utSf">
        <input type="email" name="email" id="email" ref={register} placeholder=" " rules="required" />
        <label htmlFor="email">Email Address</label>
        <button className="submit" type="submit" role="submit" onClick={onSubmit}>
          <Icon name="arrow" height="64" width="64" />
        </button>
      </form>
    </StyledNewsletter>
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledNewsletter = styled.div`
  padding: ${props => props.theme.mobilePadding};
  position: relative;

  @media (${Breakpoints.portrait}) {
    margin: 60px auto;
    padding: 0;
    width: ${props => props.theme.formWidth};
  }

  h2 {
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.sansSerif};
    font-weight: ${props => props.theme.fontBlack};
    font-size: 4.8rem;
    margin: 0 0 10px 0;
    padding: 0;
  }

  p {
    ${MixinBodyCopy};
  }

  form {
    position: relative;
    margin-top: 30px;
  }

  label {
    ${MixinLabel};
  }

  input[type="email"] {
    ${MixinTextField};
    padding-right: 70px;
  }

  ${MixinButtonWithArrow}
`;

export { Newsletter }
