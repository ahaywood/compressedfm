import { useEffect, useState } from 'react';
import { formatMoney, removeDoubleZeros } from 'utils/moneyHelpers';
import { formatShortDate, formatDashes } from 'utils/dateHelpers';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import kwesforms from 'kwesforms';

// components
import { Button } from 'modules/shared/form/Button';

// styles
import { MixinLabel, MixinTextField, MixinTextarea, MixinSelect } from 'styles/Form';
import { MixinBodyCopy } from 'styles/Typography';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsorApplicationPage = ({ futureEpisodes, pricing }) => {
  const [upcomingEpisodes, setUpcomingEpisodes] = useState();
  const [fileName, setFileName] = useState();
  const {
    SponsorshipOptions: { singleShow, threeEpisodeBundle, eightEpisodeBundle },
  } = pricing;

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.table(data);
  };

  useEffect(() => {
    kwesforms.init();
  });

  const hasEmptySlot = (episodes) =>
    episodes.filter((episode) => {
      if (!episode.sponsor || episode.sponsor.length < 3) {
        return true;
      }
      return false;
    });

  const handleFileUpload = (e) => {
    // split the file name up by '/'
    const file = e.target.value.split('\\');
    const nameOfFile = file[file.length - 1];
    setFileName(nameOfFile);
  };

  useEffect(() => {
    // check to see if the future episode has an empty sponsor slot
    setUpcomingEpisodes(hasEmptySlot(futureEpisodes));
  }, [futureEpisodes]);

  return (
    <StyledSponsorApplicationPage>
      <div className="page-title__wrapper">
        <h1>Sponsor Application</h1>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="kwes-form"
        action="https://kwesforms.com/api/foreign/forms/dyR6Keedo7Vph2lHmJWK"
      >
        <div className="half">
          <input
            type="text"
            name="firstName"
            id="firstName"
            ref={register}
            placeholder=" "
            rules="required"
            {...register('first-name')}
          />
          <label htmlFor="firstName">First Name*</label>
        </div>
        <div className="half">
          <input
            {...register('last-name')}
            type="text"
            name="lastName"
            id="lastName"
            ref={register}
            placeholder=" "
            rules="required"
          />
          <label htmlFor="lastName">Last Name*</label>
        </div>
        <div className="full">
          <input {...register('email')} type="email" name="email" ref={register} placeholder=" " rules="required" />
          <label htmlFor="email">Email Address*</label>
        </div>
        <div className="full">
          <input {...register('phone-number')} type="tel" name="phone-number" ref={register} placeholder=" " />
          <label htmlFor="phone-number">Phone Number</label>
        </div>
        <div className="full">
          <input {...register('company')} type="text" name="company" ref={register} placeholder=" " rules="required" />
          <label htmlFor="company">Company*</label>
        </div>
        <div className="full">
          <input {...register('url')} type="text" name="url" ref={register} placeholder=" " rules="required" />
          <label htmlFor="websiteUrl">Website URL*</label>
        </div>
        <div className="full">
          <h5>Sponsorship Options*</h5>
          <fieldset data-kw-group rules="required">
            <ul>
              <li>
                <input type="radio" name="options" value="1 Episode" id="options__1-episode" />
                <label htmlFor="options__1-episode">
                  <div className="amount">{removeDoubleZeros(formatMoney(singleShow))}/ea</div>
                  <div className="sponsor-description">(1-3 Episodes)</div>
                </label>
              </li>
              <li>
                <input type="radio" name="options" value="3 Episodes" id="options__3-episodes" />
                <label htmlFor="options__3-episodes">
                  <div className="amount">{removeDoubleZeros(formatMoney(threeEpisodeBundle))}/ea</div>
                  <div className="sponsor-description">(4-7 Episodes)</div>
                </label>
              </li>
              <li>
                <input type="radio" name="options" value="8 Episodes" id="options__8-episodes" />
                <label htmlFor="options__8-episodes">
                  <div className="amount">{removeDoubleZeros(formatMoney(eightEpisodeBundle))}/ea</div>
                  <div className="sponsor-description">(8-16 Episodes)</div>
                </label>
              </li>
            </ul>
          </fieldset>
        </div>
        <div className="full">
          <div className="file-upload">
            <label htmlFor="hi-res-logo">
              HI-RES LOGO
              <span>{fileName || 'Click to Upload'}</span>
            </label>
            <input
              type="file"
              name="hi-res-logo"
              id="hi-res-logo"
              {...register('hi-res-logo')}
              onChange={handleFileUpload}
            />
          </div>
        </div>
        <fieldset data-kw-group className="full">
          {upcomingEpisodes && upcomingEpisodes.length > 0 && (
            <div>
              <h5>Future Episodes</h5>
              <p>
                Here’s a list of the episode topics we’ve scheduled. Is there a specific episode that you’d like to
                sponsor?
              </p>
              <ul>
                {upcomingEpisodes.map((episode) => (
                  <li key={episode._id}>
                    <input
                      type="checkbox"
                      name="future-episodes"
                      value={episode.title}
                      id={`future-episodes__${formatDashes(episode.publishedAt)}`}
                      {...register('futureEpisodes')}
                      ref={register}
                    />
                    <label htmlFor={`future-episodes__${formatDashes(episode.publishedAt)}`}>
                      <div className="date">{formatShortDate(episode.publishedAt)}</div>
                      <div className="episode-description">{episode.title}</div>
                    </label>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </fieldset>
        <div className="full">
          <input {...register('promo-code')} type="text" ref={register} placeholder=" " name="promo-code" />
          <label htmlFor="promoCode">Promo Code</label>
          <p className="no-btm-margin">
            Do you have a coupon code that we can promote to incentivize listeners to try out your product?
          </p>
        </div>
        <div className="full">
          <textarea {...register('access-information')} ref={register} placeholder=" " name="access-information" />
          <label htmlFor="accessInformation">Access Information</label>
          <p className="no-btm-margin">
            The most successful campaigns are ones where Amy and James have access to the product and can speak from
            personal experience.
          </p>
        </div>
        <div className="full">
          <textarea
            {...register('talking-points')}
            ref={register}
            placeholder=" "
            name="talking-points"
            rules="required"
          />
          <label htmlFor="talkingPoints">Talking Points*</label>
          <p className="no-btm-margin">
            What are the most important features of your product that we should highlight?
          </p>
        </div>
        <div className="full action-buttons">
          <Button />
        </div>
      </form>
    </StyledSponsorApplicationPage>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
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

  h5 {
    color: ${(props) => props.theme.yellow};
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 1.8rem;
    font-weight: ${(props) => props.theme.fontBlack};
    margin: 0 0 10px 0;
    padding: 0;
    text-transform: uppercase;
  }

  p {
    ${MixinBodyCopy}

    &.no-btm-margin {
      margin: 0;
      padding: 0;
    }
  }

  ul {
    list-style-type: none;
    margin: 15px 0 0 0;
    padding: 0;

    li {
      margin-bottom: 15px;
      width: 100%;
    }
  }

  input[type='radio'] {
    display: none;

    & + label {
      background: url('/images/radio--unchecked.svg') left top no-repeat;
      cursor: pointer;
      min-height: 32px;
      padding-left: 45px;
      position: relative;
      display: flex;
      align-items: center;
    }

    &:checked + label {
      background: url('/images/radio--checked.svg') left top no-repeat;
    }
  }

  fieldset {
    border: none;
    background: none;
  }

  input[type='checkbox'] {
    display: none;

    & + label {
      background: url('/images/checkbox--unchecked.svg') left top no-repeat;
      cursor: pointer;
      min-height: 32px;
      padding-left: 45px;
      position: relative;
      display: flex;
      align-items: center;
    }

    &:checked + label {
      background: url('/images/checkbox--checked.svg') left top no-repeat;
    }
  }

  .file-upload {
    width: 100%;
    height: 55px;
    background: url('/images/horizontal-divider.svg') left top repeat-x,
      url('/images/horizontal-divider.svg') left bottom repeat-x, url('/images/vertical-divider.svg') left top repeat-y,
      url('/images/vertical-divider.svg') right top repeat-y;

    label {
      display: flex;
      cursor: pointer;
      padding: 20px;
      width: 100%;
      height: 100%;
    }

    span {
      color: ${(props) => props.theme.doveGray};
      font-family: ${(props) => props.theme.sansSerif};
      font-size: 2rem;
      text-transform: none;
      letter-spacing: 0;
      position: relative;
      margin-left: 10px;
      top: -4px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      width: 65%;
    }

    &:hover span {
      color: ${(props) => props.theme.white};
    }
  }

  input[type='file'] {
    display: none;
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

  input[type='text'] + label,
  input[type='email'] + label,
  input[type='tel'] + label,
  textarea + label {
    pointer-events: none;
  }

  textarea {
    ${MixinTextarea}
  }

  select {
    ${MixinSelect}
  }

  .date,
  .amount {
    color: ${(props) => props.theme.yellow};
    font-family: ${(props) => props.theme.mono};
    font-size: 1.8rem;
    line-height: 1;
    letter-spacing: 2px;
    min-width: 90px;
    text-transform: uppercase;
    margin-right: 5px;
  }

  .date {
    min-width: 110px;
  }

  .episode-description,
  .sponsor-description {
    color: ${(props) => props.theme.white};
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 1.8rem;
    letter-spacing: 0;
    text-transform: none;
    line-height: 1;
  }

  /* form error style (from KWES) */
  .kw-field-error-message {
    font-size: 1.4rem;
    font-family: ${(props) => props.theme.mono};
    margin-top: 5px;
    font-style: italic;
  }
`;

export { SponsorApplicationPage };
