import { Newsletter } from 'modules/shared/components/Newsletter';
import { VerticalDivider } from 'modules/shared/components/VerticalDivider';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';
import Image from 'next/image';
import { MixinSectionHeading, MixinBodyCopy, MixinLargeBodyCopy } from 'styles/Typography';
import { serializers } from 'modules/shared/blockContent/Serializers';
import { EpisodeGrid } from 'modules/shared/components/EpisodeGrid';
import { HorizontalDivider } from 'modules/shared/components/HorizontalDivider';
import { Faq } from './components/Faq';
import { ColophonColor } from './components/ColophonColor';

const AboutPage = ({ faqs, gettingStarted, mostPopular, siteSettings }) => (
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
        <p>The website is built on Next.js and Sanity and hosted on Vercel.</p>
        <div className="logo-line">
          <Img src={ } alt="Next.js" width="" height="" />
          <Img src={ } alt="Vercel" width="" height="" />
          <Img src={ } alt="Sanity" width="" height="" />
        </div>
        <div className="colors">
          <ColophonColor color="#ffffff" />
          <ColophonColor color="#000000" border="#444444" />
          <ColophonColor color="#484848" />
          <ColophonColor color="#FAFF00" />
          <ColophonColor color="#8C59FF" />
        </div>
      </div>
      <h4>Colors</h4>
      <h4>Typography</h4>
      <HorizontalDivider />
      <div className="large-body">Want to get More specific?</div>
      <h4>On the Design Side</h4>
      <div>
        <p>Amy wrote a blog post on Medium, all about the branding and site design.</p>
        {/* <Image /> */}
      </div>
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
    {/* newsletter */}
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
  }

  .faqs {
    margin: 0 auto;
    max-width: ${(props) => props.theme.narrowPageWidth};
  }
`;

export { AboutPage };
