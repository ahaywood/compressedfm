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
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <StyledGuestApplicationPage>
      Be Our Guest
      <form onSubmit={handleSubmit(onSubmit)} method="post">
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
          <input
            type="text"
            name="pronunciation"
            id="pronunciation"
            {...register('pronunciation', { required: true })}
            placeholder=" "
          />
          <label htmlFor="pronunciation">Pronunciation*</label>
        </div>

        <div className="full">
          <input type="email" name="email" id="email" {...register('email', { required: true })} placeholder=" " />
          <label htmlFor="email">Email Address*</label>
        </div>

        <div className="full">
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            {...register('jobTitle', { required: true })}
            placeholder=" "
          />
          <label htmlFor="jobTitle">Job Title*</label>
        </div>

        <div className="full">
          <input type="text" name="company" id="company" {...register('company', { required: true })} placeholder=" " />
          <label htmlFor="company">Company</label>
        </div>

        <div className="half">
          <input type="text" name="twitter" id="twitter" {...register('twitter')} placeholder=" " />
          <label htmlFor="twitter">Twitter</label>
        </div>

        <div className="half">
          <input type="text" name="instagram" id="instagram" {...register('instagram')} placeholder=" " />
          <label htmlFor="instagram">Instagram</label>
        </div>

        <div className="full">
          <label htmlFor="profilePicture">Profile Picture</label>
          <input type="file" id="file" {...register('file', { required: true })} />
        </div>

        <div className="full">
          <textarea name="bio" id="bio" {...register('bio', { required: true })} />
          <label htmlFor="bio">Bio</label>
        </div>

        <div className="full">
          <input
            type="text"
            name="podcastTitle"
            id="podcastTitle"
            {...register('podcastTitle', { required: true })}
            placeholder=""
          />
          <label htmlFor="podcastTitle">Podcast Title (Best guess?)</label>
        </div>

        <div className="full">
          <input
            type="text"
            name="podcastTopic"
            id="podcastTopic"
            {...register('podcastTopic', { required: true })}
            placeholder=""
          />
          <label htmlFor="podcastTopic">Podcast Topic</label>
        </div>

        <div className="full">
          <textarea name="shoutouts" id="shoutouts" {...register('shoutouts')} />
          <label htmlFor="shoutouts">Shoutouts</label>
        </div>

        <div className="full">
          <textarea name="linksToShare" id="linksToShare" {...register('linksToShare')} />
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
