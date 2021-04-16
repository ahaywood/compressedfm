import styled from 'styled-components';
import { useForm } from 'react-hook-form';

// components
import { Button } from 'modules/shared/form/Button';

// styles
import { MixinLabel, MixinTextField, MixinTextarea, MixinSelect } from 'styles/Form';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsorApplicationPage = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => alert(JSON.stringify(data));

  return (
    <StyledSponsorApplicationPage>
      <div className="page-title__wrapper">
        <h1>Sponsor Application</h1>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="half">
          <input type="text" name="firstName" id="firstName" ref={register} placeholder=" " />
          <label htmlFor="firstName">First Name</label>
        </div>
        <div className="half">
          <input type="text" name="lastName" id="lastName" ref={register} placeholder=" " />
          <label htmlFor="lastName">Last Name</label>
        </div>
        <div className="full">
          <input type="email" ref={register} placeholder=" " />
          <label htmlFor="email">Email Address</label>
        </div>
        <div className="full">
          <input type="tel" ref={register} placeholder=" " />
          <label htmlFor="phone-number">Phone Number</label>
        </div>
        <div className="full">
          <input type="text" ref={register} placeholder=" " />
          <label htmlFor="company">Company</label>
        </div>
        <div className="full">
          <input type="text" ref={register} placeholder=" " />
          <label htmlFor="websiteUrl">Website URL</label>
        </div>
        <div className="full">
          <h5>Sponsorship Options*</h5>
          <ul>
            <li>
              <input type="radio" />
              <div className="amount">$50</div>
              <div className="sponsor-description">1 Episode</div>
            </li>
            <li>
              <input type="radio" />
              <div className="amount">$125</div>
              <div className="sponsor-description">3 Episode Bundle</div>
            </li>
            <li>
              <input type="radio" />
              <div className="amount">$400</div>
              <div className="sponsor-description">10 Episode Bundle</div>
            </li>
          </ul>
        </div>
        <div className="full">
          <input type="file" />
        </div>
        <div className="full">
          <h5>Future Episodes</h5>
          <p>
            Here’s a list of the episode topics we’ve scheduled. Is there a specific episode that you’d like to sponsor?
          </p>
          <ul>
            <li>
              <input type="checkbox" />
              <div className="date">03.10.21</div>
              <div className="episode-description">TypeScript Fundamentals</div>
            </li>
            <li>
              <input type="checkbox" />
              <div className="date">03.16.21</div>
              <div className="episode-description">The Deno Show</div>
            </li>
            <li>
              <input type="checkbox" />
              <div className="date">03.10.21</div>
              <div className="episode-description">CSS Grid and Flexbox</div>
            </li>
          </ul>
        </div>
        <div className="full">
          <input type="text" ref={register} placeholder=" " />
          <label htmlFor="promoCode">Promo Code</label>
        </div>
        <div className="full">
          <p>
            The most successful campaigns are ones where Amy and James have access to the product and can speak from
            personal experience.
          </p>
        </div>
        <div className="full">
          <textarea ref={register} placeholder=" " />
          <label htmlFor="accessInformation">Access Information</label>
        </div>
        <div className="full">
          <textarea ref={register} placeholder=" " />
          <label htmlFor="talkingPoints">Talking Points</label>
        </div>
        <div className="full action-buttons">
          <Button />
        </div>
      </form>
    </StyledSponsorApplicationPage>
  );
};

const StyledSponsorApplicationPage = styled.section`
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
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 24px;
    grid-row-gap: 32px;
    margin: 60px auto;
    max-width: ${(props) => props.theme.formWidth};
  }

  .half,
  .full {
    position: relative;
  }

  .full {
    grid-column: span 2;
  }

  .action-buttons {
    text-align: right;

    button {
      margin-left: auto;
    }
  }

  label {
    ${MixinLabel};
  }

  input[type='text'],
  input[type='email'],
  input[type='tel'] {
    ${MixinTextField}
  }

  textarea {
    ${MixinTextarea}
  }

  select {
    ${MixinSelect}
  }
`;

export { SponsorApplicationPage };
