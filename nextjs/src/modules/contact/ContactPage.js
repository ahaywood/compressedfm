import { useEffect } from "react";
import styled from "styled-components";
import kwesforms from 'kwesforms';
import { useForm } from "react-hook-form";

// components
import { Button } from "modules/shared/form/Button";

// styles
import {
  MixinForm,
  MixinLabel,
  MixinTextField,
  MixinTextarea,
  MixinSelect
} from "styles/Form";


/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const ContactPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <StyledContactPage>
      <div className="page-title__wrapper">
        <h1>Contact Us</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} method="post" className="kwes-form" action="https://kwes.io/api/foreign/forms/XZx7xaYdws6HQLePBoFC">
        <div className="half">
          <input type="text" name="firstName" id="firstName" ref={register} placeholder=" " rules="required" />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="half">
          <input type="text" name="lastName" id="lastName" ref={register} placeholder=" " rules="required" />
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="full">
          <input type="email" name="email" ref={register} placeholder=" " rules="required" />
          <label htmlFor="email">Email Address*</label>
        </div>
        <div className="full">
          <select name="subject" id="subject">
            <option value="Grab Bag Question">Grab Bag Question</option>
            <option value="Just saying Hi">Just saying Hi</option>
          </select>
          <label htmlFor="Subject">Subject</label>
        </div>
        <div className="full">
          <textarea name="message" id="message" ref={register} placeholder=" " rules="required" />
          <label htmlFor="message">Message</label>
        </div>
        <div className="full action-buttons">
          <Button />
        </div>
      </form>
    </StyledContactPage>
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledContactPage = styled.section`

  .page-title__wrapper {
    text-align: center;
  }

  h1 {
    background: url('/images/horizontal-divider.svg') left center no-repeat,
      url('/images/horizontal-divider.svg') right center no-repeat;
    color: white;
    display: inline-block;
    font-family: ${props => props.theme.mono};
    font-size: 2.4rem;
    font-style: italic;
    letter-spacing: 0.2rem;
    margin: 0 auto;
    padding: 0 125px;
    text-transform: uppercase;
  }

  ${MixinForm}

  label {
    ${MixinLabel};
  }

  input[type=text],
  input[type=email] {
    ${MixinTextField}
  }

  textarea {
    ${MixinTextarea}
  }

  select {
    ${MixinSelect}
  }

`;

export { ContactPage }
