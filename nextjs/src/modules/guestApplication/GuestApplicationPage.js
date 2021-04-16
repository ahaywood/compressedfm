import styled from 'styled-components';
import { useForm } from 'react-hook-form';

// components
import { Button } from 'modules/shared/form/Button';

// styles
import { MixinForm, MixinLabel, MixinTextField, MixinTextarea, MixinSelect } from 'styles/Form';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const GuestApplicationPage = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <StyledGuestApplicationPage>
      Be Our Guest
      <form onSubmit={handleSubmit(onSubmit)} method="post">
        <div className="half">
          <input type="text" name="firstName" id="firstName" ref={register} placeholder=" " />
          <label htmlFor="firstName">First Name*</label>
        </div>
        <div className="half">
          <input type="text" name="lastName" id="lastName" ref={register} placeholder=" " />
          <label htmlFor="lastName">Last Name*</label>
        </div>

        <div className="full">
          <input type="text" name="pronunciation" id="pronunciation" ref={register} placeholder=" " />
          <label htmlFor="pronunciation">Pronunciation*</label>
        </div>

        <div className="full">
          <input type="email" name="email" id="email" ref={register} placeholder=" " />
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
          <input type="file" id="file" ref={register} />
          <label htmlFor="profilePicture">Profile Picture</label>
        </div>

        <div className="full">
          <textarea name="bio" id="bio" ref={register} />
          <label htmlFor="bio">Bio</label>
        </div>

        <div className="full">
          <input type="text" name="podcastTitle" id="podcastTitle" ref={register} placeholder="Best Guess?" />
          <label htmlFor="podcastTitle">Podcast Title</label>
        </div>

        <div className="full">
          <input
            type="text"
            name="podcastTopic"
            id="podcastTopic"
            ref={register}
            placeholder="What would you like to talk about?"
          />
          <label htmlFor="podcastTopic">Podcast Topic</label>
        </div>

        <div className="full">
          <textarea name="shoutouts" id="shoutouts" ref={register} />
          <label htmlFor="shoutouts">Shoutouts</label>
        </div>

        <div className="full">
          <textarea name="linksToShare" id="linksToShare" ref={register} />
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
`;

export { GuestApplicationPage };
