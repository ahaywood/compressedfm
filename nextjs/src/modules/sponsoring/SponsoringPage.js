import styled from 'styled-components';

// components
import { VerticalDivider } from 'modules/shared/components/VerticalDivider';
import { TheHosts } from 'modules/home/components/TheHosts';
import { Podcatchers } from 'modules/shared/components/Podcatchers';
import { Icon } from 'modules/shared/components/icon';
import { ButtonLink } from 'modules/shared/components/ButtonLink';

// styles
import { MixinBodyCopy, MixinLargeBodyCopy, MixinPageTitle, MixinSectionHeading } from 'styles/Typography';
import { Breakpoints } from 'styles/Breakpoints';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsoringPage = () => (
  <StyledSponsoringPage>
    <section className="intro">
      <h1>
        Are you interested in reaching other web designers and developers?{' '}
        <span className="highlight">We’d love to help!</span>
      </h1>
      <p className="large-body-copy">
        Compressed.fm is a <em>new</em> podcast, distributed weekly, that focuses on industry news, tools, and
        workflows. It aims to keep listeners up-to-date on the latest technology and best practices.
      </p>
      <p className="large-body-copy">
        Each episode is focused on a single topic, presenting the <em>compressed</em> version of everything you need to
        know about that subject.
      </p>
    </section>

    <div className="full">
      <VerticalDivider />
    </div>

    <section className="why-start">
      <h2>
        <span className="highlight">Why</span> did we start this show?
      </h2>
      <ol>
        <li>
          <p className="large-body-copy">At the core, James and Amy both have a passion for teaching.</p>
          <p>
            James is a content creator and bootcamp instructor. Amy has taught and developed curriculum for the
            University of Florida’s Master’s program.
          </p>
        </li>
        <li>
          <p className="large-body-copy">
            There are podcasts that focus on web development and podcasts that focus on web development, but few, if
            any, account for both.{' '}
          </p>
          <p>
            You don’t have to know code to be a good designer. You don’t have to know design in order to be a good
            developer. But, the best designers and the best developers have a basic understanding of both disciplines.
          </p>
        </li>
      </ol>
    </section>

    <div className="full">
      <VerticalDivider />
      <TheHosts />
    </div>

    <div className="major-podcatchers">
      <h3>WE’RE DISTRIBUTED ON ALL MAJOR PODCAST CATCHERS</h3>
      <Podcatchers showHeading={false} className="wrap" />
    </div>

    <div className="full">
      <VerticalDivider />
    </div>

    <section className="sponsoring-perfect">
      <h2>Sponsoring is perfect for:</h2>
      <ul>
        <li>
          <Icon name="arrow" width="48" height="48" />
          Web design and development tools, software, and services
        </li>
        <li>
          <Icon name="arrow" width="48" height="48" />
          Teams looking to hire
        </li>
        <li>
          <Icon name="arrow" width="48" height="48" />
          Technical training material and courses
        </li>
        <li>
          <Icon name="arrow" width="48" height="48" />
          Technical hardware products
        </li>
        <li>
          <Icon name="arrow" width="48" height="48" />
          Lifestyle products
        </li>
      </ul>
    </section>

    <div className="full">
      <VerticalDivider />
    </div>

    <section className="audience-breakdown">
      <h2 className="highlight">Audience Breakdown</h2>
      <p className="large-body-copy">
        Since this is a new podcast, we don’t have specific analytics, yet. However, based on the composition of our
        Twitter, YouTube, and Twitch subscribers, we’re making the following assumptions.
      </p>
      <div className="two-up">
        <div>
          <img src="/images/usa.svg" alt="United States of America Silhouette" />
        </div>
        <div>
          <div className="audience-breakdown__number">25-34</div>
        </div>
        <div>
          <p className="large-body-copy">A majority of listeners live in the United States of America</p>
        </div>
        <div>
          <p className="large-body-copy">Most listeners fall within this age range</p>
        </div>
      </div>
    </section>

    <div className="full">
      <VerticalDivider />
    </div>

    <section className="current-audience">
      <div className="heading-wrapper">
        <h3>Current Audience</h3>
      </div>

      <div className="current-audience__social">
        <div className="current-audience__social__icon">
          <Icon width="90" height="90" name="twitter" />
        </div>
        <div className="current-audience__social__featured-number">15.6k Followers</div>
        <div className="current-audience__social__link">
          <a href="http://twitter.com/jamesqquick" target="_blank" rel="noreferrer">
            twitter.com/jamesqquick
          </a>
        </div>
      </div>

      <div className="current-audience__social">
        <div className="current-audience__social__icon">
          <Icon width="90" height="90" name="twitch" />
        </div>
        <div className="current-audience__social__featured-number">6.2k Followers</div>
        <div className="current-audience__social__link">
          <a href="http://twitch.com/jamesqquick" target="_blank" rel="noreferrer">
            twitch.com/jamesqquick
          </a>
        </div>
      </div>

      <div className="current-audience__social">
        <div className="current-audience__social__icon">
          <Icon width="90" height="90" name="discord" />
        </div>
        <div className="current-audience__social__featured-number">1k Members</div>
        <div className="current-audience__social__link">
          <a href="http://learnbuildteach.com" target="_blank" rel="noreferrer">
            Discord Server
          </a>
        </div>
      </div>

      <div className="current-audience__social">
        <div className="current-audience__social__icon">
          <Icon width="90" height="90" name="youtube" />
        </div>
        <div className="current-audience__social__featured-number">42.3k Subscribers</div>
        <div className="current-audience__social__link">
          <a href="http://youtube.com/c/jamesqquick" target="_blank" rel="noreferrer">
            youtube.com/c/selfteachme
          </a>
        </div>
      </div>

      <div className="current-audience__social">
        <div className="current-audience__social__icon">
          <Icon width="90" height="90" name="youtube" />
        </div>
        <div className="current-audience__social__featured-number">1.2k Subscribers</div>
        <div className="current-audience__social__link">
          <a href="http://youtube.com/c/selfteachme" target="_blank" rel="noreferrer">
            youtube.com/c/selfteachme
          </a>
        </div>
      </div>

      <div className="current-audience__social">
        <div className="current-audience__social__icon">
          <Icon width="90" height="90" name="twitter" />
        </div>
        <div className="current-audience__social__featured-number">695 Followers</div>
        <div className="current-audience__social__link">
          <a href="http://twitter.com/selfteachme" target="_blank" rel="noreferrer">
            twitter.com/selfteachme
          </a>
        </div>
      </div>
    </section>
    <div className="full">
      <VerticalDivider />
    </div>
    <section className="audience-interests">
      <h2 className="highlight">Audience Interests</h2>
      <h3>Hard Skills</h3>
      <ul>
        <li>
          <Icon name="arrow" />
          CSS libraries and frameworks
        </li>
        <li>
          <Icon name="arrow" />
          JavaScript frameworks (i.e. React, Angular, Vue, and Svelte)
        </li>
        <li>
          <Icon name="arrow" />
          JavaScript utility libraries
        </li>
        <li>
          <Icon name="arrow" />
          Frontend and backend frameworks and libraries
        </li>
        <li>
          <Icon name="arrow" />
          WordPress
        </li>
        <li>
          <Icon name="arrow" />
          Software design patterns and methodologies
        </li>
        <li>
          <Icon name="arrow" />
          UI / UX / web design workflows and methodologies
        </li>
        <li>
          <Icon name="arrow" />
          User testing and research
        </li>
        <li>
          <Icon name="arrow" />
          Prototyping
        </li>
        <li>
          <Icon name="arrow" />
          Building and maintaining web sites and applications
        </li>
        <li>
          <Icon name="arrow" />
          Saas products
        </li>
      </ul>

      <h3>Soft Skills</h3>
      <ul>
        <li>
          <Icon name="arrow" />
          Self-improvement and productivity
        </li>
        <li>
          <Icon name="arrow" />
          Freelancing and running a small business
        </li>
        <li>
          <Icon name="arrow" />
          Marketing, funnels, and generating passive income
        </li>
        <li>
          <Icon name="arrow" />
          Work / life balance
        </li>
        <li>
          <Icon name="arrow" />
          Premium products
        </li>
      </ul>
    </section>
    <div className="full">
      <VerticalDivider />
    </div>
    <section className="get-and-investments">
      <h2 className="highlight">What You’ll Get &amp; Investments</h2>
      <div className="box">
        <h4>Founding Investment</h4>
        <ul>
          <li>
            <div className="description">Single Show</div>
            <div className="separator" />
            <div className="pricing">$50 USD</div>
          </li>

          <li>
            <div className="description">3 Shows</div>
            <div className="separator" />
            <div className="pricing">$125 USD</div>
          </li>

          <li>
            <div className="description">8 Shows</div>
            <div className="separator" />
            <div className="pricing">$350 USD</div>
          </li>
        </ul>
      </div>
      <div className="fine-print">*For the best results, we recommend advertising at least three shows.</div>
    </section>
    <div className="full">
      <VerticalDivider />
    </div>
    <section className="youll-receive">
      <h2 className="highlight">As part of the sponsorship package, you’ll receive:</h2>
      <ol>
        <li>
          <p className="large-body-copy">A sponsorship section within the episode show notes.</p>
          <p>
            These notes will be listed on the Compressed.fm website and within the user’s podcatcher of choice. This is
            a great opportunity to include unique targeted links and promo codes.
          </p>
        </li>
        <li>
          <p className="large-body-copy">A mention at the top of the show.</p>
          <p>
            For example, Amy might say: “Today’s episode is sponsored by MailGun. This is an email service with powerful
            APIs that enable you to send, receive, and track email effortlessly. Later in the show, I’ll talk more about
            how I’ve used MailGun in the past.”
          </p>
        </li>
        <li>
          <p className="large-body-copy">A one to two minute sponsor spot at the 10 or 20-minute-mark.</p>
          <p>
            We could provide a normal ad read, however, the best results will come from Amy or James talking about the
            product or service and our own personal experience with your product. This gives your product a personal
            touch and results in better conversions.
          </p>
        </li>
        <li>
          <p className="large-body-copy">An evergreen listing on the Compressed.fm sponsors page.</p>
          <p>
            This is a useful resource for listeners wanting to quickly reference a sponsor’s offering, but are unable to
            recall which episode, coupon code, or link was used during the ad read.{' '}
          </p>
        </li>
        <li>
          <p className="large-body-copy">Access to a password-protected Dashboard. </p>
          <p>
            This will include easy access to all documents (invoices and contracts), as well as, individual episode
            analytics.
          </p>
        </li>
      </ol>
    </section>
    <div className="full">
      <VerticalDivider />
    </div>
    <section className="interested-in-working-together">
      <h2 className="highlight">Interested in Working Together?</h2>
      <p className="large-body-copy">
        Please complete the sponsorship application if you’re interested in sponsoring the podcast.
      </p>
      <ButtonLink className="button-link alt" href="/sponsor-application" label="Apply to Sponsor" />
    </section>
  </StyledSponsoringPage>
);

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledSponsoringPage = styled.main`
  display: grid;
  grid-template-columns: repeat(12, minmax(0, 1fr));
  grid-column-gap: 20px;

  h1 {
    ${MixinPageTitle}
    text-align: left;

    @media (${Breakpoints.portrait}) {
      font-size: 6.4rem;
      padding: 0;
      margin-left: 0;
      margin-right: 0;
      max-width: 100%;
    }
  }

  h2 {
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 4.8rem;
    font-weight: ${(props) => props.theme.fontBlack};
  }

  .highlight {
    color: ${(props) => props.theme.yellow};
  }

  p.large-body-copy {
    ${MixinLargeBodyCopy};
  }

  p {
    ${MixinBodyCopy};
  }

  ol {
    list-style-type: none;
    margin: 0;
    padding: 0;
    counter-reset: ordered-list;

    li {
      margin-bottom: 50px;
      position: relative;

      &:before {
        content: counter(ordered-list);
        counter-increment: ordered-list;
        font-family: ${(props) => props.theme.sansSerif};
        font-size: 8.5rem;
        font-weight: ${(props) => props.theme.fontBlack};
        color: ${(props) => props.theme.lavenderIndigo};
        position: absolute;
        top: -20px;
        left: -85px;
        text-align: center;
        min-width: 75px;
      }

      .large-body-copy {
        margin: 0 0 5px 0;
        padding: 0;
      }
    }
  }

  ul {
    margin: 0;
    padding: 0;
  }

  .full {
    grid-column: span 12;
  }

  .intro {
    grid-column: 4 / -4;

    p.large-body-copy {
      font-weight: ${(props) => props.theme.fontNormal};
    }
  }

  .why-start {
    grid-column: 4 / -4;
  }

  .major-podcatchers {
    grid-column: 4 / -4;
    margin: 100px auto 50px;
    position: relative;

    h3 {
      ${MixinSectionHeading};
      padding: 0;
      margin: 0 0 50px 0;
      border: none;
      text-align: center;
      width: 100%;
    }

    .wrap ul {
      flex-wrap: wrap;

      li {
        margin-bottom: 20px;
      }
    }
  }

  .sponsoring-perfect {
    grid-column: 4 / -4;
    margin: 75px 0;

    h2 {
      margin: 0;
    }

    ul {
      list-style-type: none;

      li {
        font-family: ${(props) => props.theme.sansSerif};
        font-size: 2.8rem;
        font-weight: ${(props) => props.theme.fontBlack};
        color: ${(props) => props.theme.white};
        margin-bottom: 0px;

        svg {
          fill: ${(props) => props.theme.yellow};
          position: relative;
          top: 14px;
        }
      }
    }
  }

  .audience-breakdown {
    grid-column: 3 / -3;

    > h2,
    > .large-body-copy {
      width: 75%;
      margin-left: auto;
      margin-right: auto;
    }

    .two-up {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      grid-column-gap: 200px;
      margin-top: 75px;
    }

    &__number {
      align-items: flex-end;
      color: ${(props) => props.theme.yellow};
      display: flex;
      font-family: ${(props) => props.theme.sansSerif};
      font-size: 10.8rem;
      font-weight: ${(props) => props.theme.fontBlack};
      height: 100%;
      margin-top: auto;
    }

    .large-body-copy {
      margin-top: 30px;
    }
  }

  .current-audience {
    display: grid;
    grid-column: 3 / -3;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin: 75px 0;

    h3 {
      ${MixinSectionHeading}
    }

    .heading-wrapper {
      grid-column: span 2;
      text-align: center;
      margin-bottom: 75px;
    }

    &__social {
      display: grid;
      grid-template-columns: 100px 1fr;
      grid-column-gap: 25px;
      grid-template-areas:
        'icon number'
        'icon link';
      margin-bottom: 60px;

      &__icon {
        grid-area: icon;
      }

      &__featured-number {
        font-family: ${(props) => props.theme.sansSerif};
        color: ${(props) => props.theme.white};
        font-size: 4.8rem;
        font-weight: ${(props) => props.theme.fontBlack};
        grid-area: 'number';
      }

      &__link {
        ${MixinLargeBodyCopy}
        grid-area: 'link';

        a {
          color: ${(props) => props.theme.white};
          text-decoration: none;

          &:hover {
            color: ${(props) => props.theme.yellow};
          }
        }
      }
    }

    svg {
      fill: ${(props) => props.theme.lavenderIndigo};
      float: left;
      margin-right: 25px;
    }
  }

  .audience-interests {
    grid-column: 4 / -4;

    h3 {
      font-family: ${(props) => props.theme.sansSerif};
      font-weight: ${(props) => props.theme.fontBlack};
      color: ${(props) => props.theme.white};
      font-size: 3.2rem;
      margin: 0;
      padding: 0;
    }

    ul {
      list-style-type: none;
      margin-top: 10px;
      margin-bottom: 50px;

      li {
        font-family: ${(props) => props.theme.sansSerif};
        font-size: 2rem;
        padding-left: 25px;
        position: relative;
        margin-bottom: 20px;

        svg {
          fill: ${(props) => props.theme.yellow};
          position: absolute;
          top: -2px;
          left: -10px;
        }
      }
    }
  }

  .youll-receive {
    grid-column: 4 / -4;
  }

  .get-and-investments {
    grid-column: 4 / -4;
    margin-bottom: 75px;

    .box {
      background: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.black};
      padding: 65px 100px;
      margin-bottom: 35px;

      h4 {
        font-family: ${(props) => props.theme.mono};
        font-size: 2.4rem;
        letter-spacing: 5px;
        margin: 0 0 30px 0;
        padding: 0;
        text-transform: uppercase;
      }

      ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
      }

      li {
        display: flex;
        font-family: ${(props) => props.theme.sansSerif};
        font-size: 3.2rem;
        color: ${(props) => props.theme.black};
        margin-bottom: 30px;

        &:last-child {
          margin: 0;
        }
      }

      .description {
        font-weight: ${(props) => props.theme.fontBlack};
      }

      .separator {
        background: url('/images/horizontal-divider--black.svg') bottom left repeat-x;
        flex: 1;
      }
    }

    .fine-print {
      font-family: ${(props) => props.theme.mono};
      font-size: 2rem;
      color: white;
      font-style: italic;
    }
  }

  .interested-in-working-together {
    grid-column: 4 / -4;
    text-align: center;
    margin: 0 auto 75px;
    position: relative;

    p {
      margin-bottom: 50px;
    }

    .button-link {
      margin: 0 auto;
      max-width: 200px;
    }
  }
`;

export { SponsoringPage };
