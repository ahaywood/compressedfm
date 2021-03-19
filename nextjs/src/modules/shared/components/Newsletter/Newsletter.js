import styled from "styled-components";
import { useForm } from "react-hook-form";
import { Icon } from "modules/shared/components/Icon";
import { MixinBodyCopy } from "styles/Typography";
import { MixinTextField, MixinLabel, MixinButtonWithArrow } from "styles/Form";

const Newsletter = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <StyledNewsletter>
      <h2>Sign up for the newsletter</h2>
      <p>
        Want to stay up to date on our podcast? Get a behind-the-scenes look{" "}
        and know when new episodes drop.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="email" name="email" id="email" ref={register} placeholder=" " />
        <label htmlFor="email">Email Address</label>
        <button className="submit" type="submit" role="submit" onClick={onSubmit}>
          <Icon name="arrow" height="64" width="64" />
        </button>
      </form>
    </StyledNewsletter>
  )
}

const StyledNewsletter = styled.div`
  position: relative;
  margin: 60px auto;
  width: ${props => props.theme.formWidth};

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
