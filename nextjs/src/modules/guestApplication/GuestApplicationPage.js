import { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import kwesforms from 'kwesforms';

// components
import { Button } from 'modules/shared/form/Button';

// styles
import { MixinFileField, MixinForm, MixinLabel, MixinTextField, MixinTextarea, MixinSelect } from 'styles/Form';
import { MixinHeadingWithHorizontalLines } from 'styles/Typography';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const GuestApplicationPage = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => { };

  useEffect(() => {
    kwesforms.init();
  }, []);

  return (
    <StyledGuestApplicationPage>
      <div className="page-title__wrapper">
        <h1>Be Our Guest</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        method="post"
        className="kwes-form"
        action="https://kwes.io/api/foreign/forms/gTosjfBjtsx5Srf3S0IR"
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
          <input type="text" name="pronunciation" id="pronunciation" ref={register} placeholder=" " />
          <label htmlFor="pronunciation">Pronunciation*</label>
        </div>

        <div className="full">
          <input type="email" name="email" id="email" ref={register} placeholder=" " rules="required" />
          <label htmlFor="email">Email Address*</label>
        </div>

        <div className="full">
          <input type="text" name="jobTitle" id="jobTitle" ref={register} placeholder=" " />
          <label htmlFor="jobTitle">Job Title*</label>
        </div>

        <div className="full">
          <input type="text" name="company" id="company" ref={register} placeholder=" " />
          <label htmlFor="company">Company</label>
        </div>

        <div className="half">
          <input type="text" name="twitter" id="twitter" ref={register} placeholder=" " />
          <label htmlFor="twitter">Twitter</label>
        </div>

        <div className="half">
          <input type="text" name="instagram" id="instagram" ref={register} placeholder=" " />
          <label htmlFor="instagram">Instagram</label>
        </div>

        <div className="full">
          <input type="file" id="file" name="profillePicture" ref={register} placeholder=" " />
          <label htmlFor="profilePicture">
            Profile Picture
            <span className="description">Click to upload.</span>
          </label>
        </div>

        <div className="full">
          <textarea name="bio" id="bio" ref={register} placeholder=" " rules="required" />
          <label htmlFor="bio">Bio</label>
        </div>

        <div className="full">
          <input type="text" name="podcastTitle" id="podcastTitle" ref={register} placeholder=" " />
          <label htmlFor="podcastTitle">Podcast Title</label>
        </div>

        <div className="full">
          <input type="text" name="podcastTopic" id="podcastTopic" ref={register} placeholder=" " rules="required" />
          <label htmlFor="podcastTopic">Podcast Topic</label>
        </div>

        <div className="full">
          <textarea name="shoutouts" id="shoutouts" ref={register} placeholder=" " />
          <label htmlFor="shoutouts">Shoutouts</label>
        </div>

        <div className="full">
          <textarea name="linksToShare" id="linksToShare" ref={register} placeholder=" " />
          <label htmlFor="linksToShare">Links to Share</label>
        </div>

        <div className="full action-buttons">
          <Button />
        </div>
      </form>
    </StyledGuestApplicationPage>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledGuestApplicationPage = styled.section`
  ${MixinHeadingWithHorizontalLines}
  ${MixinForm}

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

  input[type='file'] {
    ${MixinFileField}
  }
`;

export { GuestApplicationPage };
