import { Newsletter } from 'modules/shared/components/Newsletter';
import { VerticalDivider } from 'modules/shared/components/VerticalDivider';
import styled from 'styled-components';
<<<<<<< HEAD
import BlockContent from '@sanity/block-content-to-react';
import Image from 'next/image';
import { MixinSectionHeading, MixinBodyCopy, MixinLargeBodyCopy } from 'styles/Typography';
import { serializers } from 'modules/shared/blockContent/Serializers';
import { EpisodeGrid } from 'modules/shared/components/EpisodeGrid';
import { HorizontalDivider } from 'modules/shared/components/HorizontalDivider';
=======
>>>>>>> 530c8fcd899976760b7ccc05e1721aa8eabb4254
import { Faq } from './components/Faq';
import { ColophonColor } from './components/ColophonColor';
import { TypeSample } from './components/TypeSample';

<<<<<<< HEAD
const AboutPage = ({ faqs, gettingStarted, mostPopular, siteSettings }) => (
=======
const AboutPage = ({ faqs }) => (
>>>>>>> 530c8fcd899976760b7ccc05e1721aa8eabb4254
  <StyledAboutPage>
    {/* reasons */}
    <section className="reasons">
      <h2>
        <span>Why</span> did we start this show?
      </h2>
      <ol>
        {siteSettings &&
          siteSettings.reasonsBehind.map((item) => (
            <li>
              <BlockContent blocks={item.reason} serializers={serializers} />
            </li>
          ))}
      </ol>
    </section>
    {/* where to begin? */}
    <VerticalDivider />
    <section className="begin">
      <EpisodeGrid header="Where to Begin?" episodes={gettingStarted} />
    </section>

    {/* most popular episodes */}
    <VerticalDivider />
    <section className="most-popular">
      <EpisodeGrid header="Most Popular Episodes" episodes={mostPopular} />
    </section>
    <VerticalDivider />

    {/* colophon */}
    <section className="colophon">
      <div className="section-heading__wrapper">
        <h2 className="section-heading">Colophon</h2>
        <p className="large-body">Since we're web designers and developers, we care about this sort of thing.</p>
        <p>The website is built on <a href="https://nextjs.org/" target="_blank" rel="noreferrer">Next.js</a> and <a href="https://sanity.io/" target="_blank" rel="noreferrer">Sanity</a> and hosted on <a href="https://vercel.com/" target="_blank" rel="noreferrer">Vercel</a>.</p>
        <div className="logo-line">
          <Image src="/images/logo__nextjs@2x.png" alt="Next.js" width="182" height="114" />
          <Image src="/images/logo__sanity@2x.png" alt="Sanity" width="191" height="38" />
          <Image src="/images/logo__vercel@2x.png" alt="Vercel" width="240" height="60" />
        </div>
        <h4>Colors</h4>
        <div className="colors">
          <ColophonColor color="#ffffff" />
          <ColophonColor color="#000000" border="#444444" />
          <ColophonColor color="#484848" />
          <ColophonColor color="#FAFF00" />
          <ColophonColor color="#8C59FF" />
        </div>
        <h4>Typography</h4>
        <div className="typography">
          <div className="greyclif">
            <h5>Greyclif</h5>
            <TypeSample />
          </div>
          <div className="dank-mono">
            <h5>Dank Mono</h5>
            <TypeSample />
          </div>
        </div>
      </div>

      <HorizontalDivider length="short" />

      <div className="large-body">Want to get more specific?</div>
      <h4>On the Design Side</h4>
      <div className="two-up">
        <div><p>Amy wrote a blog post on Medium, all about the branding and site design.</p></div>
        <div>{/* <Image /> */}</div>
      </div>

      <br />

      <h4>Want to get even more specific?</h4>
      <div className="two-up">
        <div>
          <div className="large-body">We knew you were our people.</div>
          <p>We’ve open sourced the code and made it available on GitHub. </p>
        </div>
        <div>
          {/* <Image /> */}
        </div>
      </div>

      <br />

      <h4>Still curious?</h4>
      <p>We took an entire episode to talk about the tech behind the site.</p>

      {/* Audio Player */}
    </section>
    <VerticalDivider />

    {/* frequently asked questions */}
    <section className="faqs">
      <div className="section-heading__wrapper">
        <h2 className="section-heading">Frequently Asked Questions</h2>
      </div>

      {/* frequently asked questions */}
      {faqs &&
        faqs.map((faq) => (
          <Faq
            key={faq._id}
            question={faq.question}
            answer="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        ))}
    </section>
    <VerticalDivider />
    <Newsletter />
  </StyledAboutPage>
);

const StyledAboutPage = styled.div`
  .section-heading__wrapper {
    text-align: center;
  }

  h2.section-heading {
    ${MixinSectionHeading};
    margin: 36px 0 64px;
  }

  .reasons {
    margin: 0 auto;
    max-width: ${(props) => props.theme.narrowPageWidth};

    h2 {
      color: ${(props) => props.theme.white};
      font-family: ${(props) => props.theme.sansSerif};
      font-size: 4.8rem;
      font-weight: ${(props) => props.theme.fontBlack};

      span {
        color: ${(props) => props.theme.yellow};
      }
    }

    ol {
      counter-reset: reasons-list;
      list-style-type: none;

      li {
        padding: 1rem 0 2.5rem 7.5rem;
        position: relative;
      }

      li:before {
        color: ${(props) => props.theme.lavenderIndigo};
        content: counter(reasons-list);
        counter-increment: reasons-list;
        font-family: ${(props) => props.theme.sansSerif};
        font-size: 8.5rem;
        font-weight: ${(props) => props.theme.fontBlack};
        left: 0;
        line-height: 1;
        position: absolute;
        top: 0;
      }
    }

    h3 {
      ${MixinLargeBodyCopy}
    }

    p {
      ${MixinBodyCopy}
    }
  }

  .colophon {
    margin: 0 auto;
    max-width: ${(props) => props.theme.narrowPageWidth};

    .colors {
      display: flex;
      justify-content: space-between;
    }

    h3 {

    }

    .large-body {
      ${MixinLargeBodyCopy}
    }

    p {
      ${MixinBodyCopy};
      text-align: left;

      a {
        color: ${props => props.theme.yellow};
        font-weight: bold;
        text-decoration: underline;

        &:hover {
          color: ${props => props.theme.white};
        }
      }
    }

    .logo-line {
      align-items: center;
      display: flex;
      justify-content: space-between;
      margin: 40px 0 100px 0;
    }

    h4 {
      font-family: ${props => props.theme.mono};
      color: ${props => props.theme.yellow};
      text-transform: uppercase;
      font-size: 1.8rem;
      text-align: left;
    }

    .colors {
      margin-bottom: 65px;
    }

    .typography {
      display: grid;
      grid-template-columns: 1fr 1fr;
      text-align: left;
      font-size: 2.2rem;
      line-height: 1.2;

      h5 {
        font-size: 3.6rem;
        line-height: 1.2;
        margin: 0 0 10px;
        padding: 0;
      }

      .greyclif {
        font-family: ${props => props.theme.sansSerif};
        font-weight: bold;
      }

      .dank-mono {
        font-family: ${props => props.theme.mono};
      }
    }
  }

  .faqs {
    margin: 0 auto;
    max-width: ${(props) => props.theme.narrowPageWidth};
  }
`;

export { AboutPage };
