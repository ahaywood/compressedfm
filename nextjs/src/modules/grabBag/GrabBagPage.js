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
const GrabBagPage = () => {
  const { register } = useForm();
  // eslint-disable-next-line prettier/prettier

  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <StyledGrabBagPage>
      <div className="page-title__wrapper">
        <h1>Grab Bag Questions</h1>
      </div>

      <form className="kwes-form" action="https://kwesforms.com/api/foreign/forms/BftEOFeXu1k4PfngTSIt">
        <div className="half">
          <input
            type="text"
            name="firstName"
            id="firstName"
            {...register('firstName', { required: true })}
            placeholder=" "
          />
          <label htmlFor="firstName">First Name*</label>
        </div>
        <div className="half">
          <input
            type="text"
            name="lastName"
            id="lastName"
            {...register('lastName', { required: true })}
            placeholder=" "
          />
          <label htmlFor="lastName">Last Name*</label>
        </div>
        <div className="full">
          <input type="email" name="email" {...register('email', { required: true })} placeholder=" " />
          <label htmlFor="email">Email Address*</label>
        </div>
        <div className="full">
          <textarea name="message" id="message" {...register('message', { required: true })} placeholder=" " />
          <label htmlFor="message">Message*</label>
        </div>
        <div className="full action-buttons">
          <Button />
        </div>
      </form>
    </StyledGrabBagPage>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledGrabBagPage = styled.section`
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

export { GrabBagPage };
