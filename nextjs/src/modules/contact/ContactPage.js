import { useEffect } from 'react';
import styled from 'styled-components';
import kwesforms from 'kwesforms';
import { useForm } from 'react-hook-form';

// components
import { Button } from 'modules/shared/form/Button';

// styles
import { MixinForm, MixinLabel, MixinTextField, MixinTextarea, MixinSelect } from 'styles/Form';
import { MixinHeadingWithHorizontalLines } from 'styles/Typography';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const ContactPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = () => {};

  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <StyledContactPage>
      <div className="page-title__wrapper">
        <h1>Contact Us</h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        className="kwes-form"
        action="https://kwes.io/api/foreign/forms/XZx7xaYdws6HQLePBoFC"
      >
        <div className="half">
          <input type="text" name="firstName" id="firstName" ref={register} placeholder=" " rules="required" />
          <label htmlFor="firstName">First Name*</label>
        </div>
        <div className="half">
          <input type="text" name="lastName" id="lastName" ref={register} placeholder=" " rules="required" />
          <label htmlFor="lastName">Last Name*</label>
        </div>
        <div className="full">
          <input type="email" name="email" ref={register} placeholder=" " rules="required" />
          <label htmlFor="email">Email Address*</label>
        </div>
        <div className="full">
          <select name="subject" id="subject">
            <option value="Grab Bag Question">Grab Bag Question</option>
            <option value="Just saying Hi">Just saying Hi</option>
            <option value="Sponsorships">Sponsorships</option>
          </select>
          <label htmlFor="Subject">Subject*</label>
        </div>
        <div className="full">
          <textarea name="message" id="message" ref={register} placeholder=" " rules="required" />
          <label htmlFor="message">Message*</label>
        </div>
        <div className="full action-buttons">
          <Button />
        </div>
      </form>
    </StyledContactPage>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledContactPage = styled.section`
  ${MixinHeadingWithHorizontalLines}

  ${MixinForm}

  .kw-alert
  .kw-alert-error {
    max-width: 445px;
    column-span: 2;
  }

  .kw-field-error-message {
    font-size: 1.6rem;
    margin-top: 1rem;
  }

  label {
    ${MixinLabel};
  }

  input[type='text'],
  input[type='email'] {
    ${MixinTextField}
  }

  textarea {
    ${MixinTextarea}
  }

  select {
    ${MixinSelect}
  }
`;

export { ContactPage };
