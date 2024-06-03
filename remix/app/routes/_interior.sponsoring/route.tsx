import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Icon } from '~/components/Icon';
import { Podcatchers } from '~/components/Podcatchers';
import { VerticalDivider } from '~/components/VerticalDivider';
import { getClient } from '~/lib/sanity';
import { settingsQuery, siteSettingsQuery } from '~/queries/Queries';
import { TheHosts } from '../_index/TheHosts';
import { ButtonLink } from '~/components/ButtonLink';
import Reasons from '~/components/Reasons';

export const loader = async ({ params }: LoaderArgs) => {
  const siteSettings = await getClient().fetch(siteSettingsQuery);
  const settings = await getClient().fetch(settingsQuery);
  return { settings, siteSettings };
};

export default function Sponsoring() {
  const {
    siteSettings,
    settings: {
      SponsorshipOptions: { singleShow, threeEpisodeBundle, eightEpisodeBundle },
      JamesSocialMedia,
      AmySocialMedia,
      BekahSocialMedia,
      BradSocialMedia,
    },
  } = useLoaderData();

  return (
    <main className="grid grid-cols-12 gap-x-5">
      <section className="mb-[25px] col-start-4 col-span-6 md:mb-[50px]">
        <h1 className="page-title text-6xl text-left md:!mx-0">
          Are you interested in reaching other web designers and developers?{' '}
          <span className="highlight">We’d love to help!</span>
        </h1>
        <p className="large-body-copy">
          Compressed.fm is a podcast, distributed weekly, that focuses on industry news, tools, and workflows. It aims
          to keep listeners up-to-date on the latest technology and best practices.
        </p>
        <p className="large-body-copy">
          Each episode is focused on a single topic, presenting the <em>compressed</em> version of everything you need
          to know about that subject.
        </p>
      </section>

      <div className="full col-span-12">
        <VerticalDivider />
      </div>

      <div className="col-span-12 md:col-start-4 md:col-span-6">
        <Reasons siteSettings={siteSettings} />
      </div>

      <div className="full col-span-12">
        <VerticalDivider />
        <TheHosts
          details={{
            AmySocialMedia: AmySocialMedia,
            JamesSocialMedia: JamesSocialMedia,
            BekahSocialMedia: BekahSocialMedia,
            BradSocialMedia: BradSocialMedia,
          }}
        />
      </div>

      <div className="major-podcatchers col-span-12 mt-[100px] px-mobilePadding md:grid-start-4 md:grid-end-4 md:p-0">
        <h3 className="section-heading p-0 mt-0 mx-0 mb-[50px] border-none text-center w-full">
          WE’RE DISTRIBUTED ON ALL MAJOR PODCAST CATCHERS
        </h3>
        <Podcatchers showHeading={false} className="flex-wrap gap-y-5" />
      </div>

      <div className="full col-span-12">
        <VerticalDivider />
      </div>

      <section className="sponsoring-is-perfect col-span-12 py-0 px-mobilePadding md:col-start-4 md:col-span-6 md:p-0">
        <h2 className="m-0">Sponsoring is perfect for:</h2>
        <ul className="m-0 p-0 pl-[40px] list-none md:pl-0">
          <li>
            <Icon name="arrow" size={48} />
            Web design and development tools, software, and services
          </li>
          <li>
            <Icon name="arrow" size={48} />
            Teams looking to hire
          </li>
          <li>
            <Icon name="arrow" size={48} />
            Technical training material and courses
          </li>
          <li>
            <Icon name="arrow" size={48} />
            Technical hardware products
          </li>
          <li>
            <Icon name="arrow" size={48} />
            Lifestyle products
          </li>
        </ul>
      </section>

      <div className="col-span-12">
        <VerticalDivider />
      </div>

      <section className="audience-breakdown p-mobilePadding md:p-0 col-span-12 grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-start-4 md:col-span-6">
          <h2 className="highlight">Audience Breakdown</h2>
          <p className="large-body-copy mb-10">
            Since this is a new podcast, we don’t have specific analytics, yet. However, based on the composition of our
            Twitter, YouTube, and Twitch subscribers, we’re making the following assumptions.
          </p>
        </div>
        <div className="two-up">
          <div className="two-up__usa">
            <img src="/images/usa.svg" alt="United States of America Silhouette" width="271" height="168" />
          </div>
          <div className="two-up__age">
            <div className="audience-breakdown__number leading-none">25-34</div>
          </div>
          <div className="two-up__usa__description">
            <p className="large-body-copy">A majority of listeners live in the United States of America</p>
          </div>
          <div className="two-up__age__description">
            <p className="large-body-copy">Most listeners fall within this age range</p>
          </div>
        </div>
      </section>

      <div className="col-span-12">
        <VerticalDivider />
      </div>

      {/* <section className="current-audience lg:grid col-span-12 lg:grid-cols-2 my-[75px] mx-0 xl:col-start-2 xl:col-span-10 2xl:col-start-3 2xl:col-span-8">
        <div className="heading-wrapper text-center mb-[75px] col-span-2">
          <h3 className="section-heading mx-auto">Current Audience</h3>
        </div>

        <div className="current-audience__social">
          <div className="current-audience__social__icon">
            <Icon size={90} name="twitter" />
          </div>
          <div className="current-audience__social__featured-number">{JamesSocialMedia.twitterFollowers} Followers</div>
          <div className="current-audience__social__link">
            <a href="http://twitter.com/jamesqquick" target="_blank" rel="noreferrer">
              twitter.com/jamesqquick
            </a>
          </div>
        </div>

        <div className="current-audience__social">
          <div className="current-audience__social__icon">
            <Icon size={90} name="twitch" />
          </div>
          <div className="current-audience__social__featured-number">{JamesSocialMedia.twitchFollowers} Followers</div>
          <div className="current-audience__social__link">
            <a href="http://twitch.com/jamesqquick" target="_blank" rel="noreferrer">
              twitch.com/jamesqquick
            </a>
          </div>
        </div>

        <div className="current-audience__social">
          <div className="current-audience__social__icon">
            <Icon size={90} name="discord" />
          </div>
          <div className="current-audience__social__featured-number">{JamesSocialMedia.discordMembers} Members</div>
          <div className="current-audience__social__link">
            <a href="http://learnbuildteach.com" target="_blank" rel="noreferrer">
              Discord Server
            </a>
          </div>
        </div>

        <div className="current-audience__social">
          <div className="current-audience__social__icon">
            <Icon size={90} name="youtube" />
          </div>
          <div className="current-audience__social__featured-number">
            {JamesSocialMedia.youtubeSubscribers} Subscribers
          </div>
          <div className="current-audience__social__link">
            <a href="http://youtube.com/c/jamesqquick" target="_blank" rel="noreferrer">
              youtube.com/c/jamesqquick
            </a>
          </div>
        </div>

        <div className="current-audience__social">
          <div className="current-audience__social__icon">
            <Icon size={90} name="youtube" />
          </div>
          <div className="current-audience__social__featured-number">
            {AmySocialMedia.youtubeSubscribers} Subscribers
          </div>
          <div className="current-audience__social__link">
            <a href="http://youtube.com/c/selfteachme" target="_blank" rel="noreferrer">
              youtube.com/c/selfteachme
            </a>
          </div>
        </div>

        <div className="current-audience__social">
          <div className="current-audience__social__icon">
            <Icon size={90} name="twitter" />
          </div>
          <div className="current-audience__social__featured-number">{AmySocialMedia.twitterFollowers} Followers</div>
          <div className="current-audience__social__link">
            <a href="http://twitter.com/selfteachme" target="_blank" rel="noreferrer">
              twitter.com/selfteachme
            </a>
          </div>
        </div>
      </section>
      <div className="full col-span-12">
        <VerticalDivider />
      </div> */}

      <section className="audience-interests">
        <h2 className="font-sans font-black text-[64px] text-yellow">Audience Interests</h2>
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
      <div className="full col-span-12">
        <VerticalDivider />
      </div>
      <section className="get-and-investments grid col-span-12 mb-[75px] py-0 px-mobilePadding md:col-start-4 md:col-span-6 md:p-0">
        <h2 className="text-yellow font-black font-sans text-[48px] leading-none mb-[44px]">
          What You’ll Get &amp; Investments
        </h2>
        <div className="bg-yellow text-black p-5 mb-4 md:mb-9 md:p-[50px] lg:px-[65px] lg:py-[100px]">
          <h4 className="font-mono text-[20px] tracking-[5px] mt-0 mx-0 mb-8 p-0 uppercase md:text-[24px] ">
            Founding Investment
          </h4>
          <ul className="list-none m-0 p-0">
            <li>
              <div className="description"> 1-3 episodes</div>
              <div className="separator" />
              <div className="pricing">${singleShow} USD/ea</div>
            </li>

            <li>
              <div className="description"> 4-8 episodes</div>
              <div className="separator" />
              <div className="pricing">${threeEpisodeBundle} USD/ea</div>
            </li>

            <li>
              <div className="description">8-16 episodes</div>
              <div className="separator" />
              <div className="pricing">${eightEpisodeBundle} USD/ea</div>
            </li>
          </ul>
        </div>
        <div className="font-mono text-base text-white italic leading-normal">
          *For the best results, we recommend advertising at least three shows.
        </div>
      </section>
      <div className="full col-span-12">
        <VerticalDivider />
      </div>
      <section className="youll-receive col-span-12 px-mobilePadding py-0 md:col-start-4 md:col-span-6">
        <h2 className="text-yellow text-[48px] leading-none font-black mb-9">
          As part of the sponsorship package, you’ll receive:
        </h2>
        <ol>
          <li>
            <p className="large-body-copy font-bold mb-1">A sponsorship section within the episode show notes.</p>
            <p>
              These notes will be listed on the Compressed.fm website and within the user’s podcatcher of choice. This
              is a great opportunity to include unique targeted links and promo codes.
            </p>
          </li>
          <li>
            <p className="large-body-copy font-bold mb-1">A mention at the top of the show.</p>
            <p>
              For example, Amy might say: “Today’s episode is sponsored by MailGun. This is an email service with
              powerful APIs that enable you to send, receive, and track email effortlessly. Later in the show, I’ll talk
              more about how I’ve used MailGun in the past.”
            </p>
          </li>
          {/* <li>
            <p className="large-body-copy font-bold mb-1">
              A one to two minute sponsor spot at the 10 or 20-minute-mark.
            </p>
            <p>
              We could provide a normal ad read, however, the best results will come from Amy or James talking about the
              product or service and our own personal experience with your product. This gives your product a personal
              touch and results in better conversions.
            </p>
          </li> */}
          <li>
            <p className="large-body-copy font-bold mb-1">An evergreen listing on the Compressed.fm sponsors page.</p>
            <p>
              This is a useful resource for listeners wanting to quickly reference a sponsor’s offering, but are unable
              to recall which episode, coupon code, or link was used during the ad read.{' '}
            </p>
          </li>
          {/* <li>
            <p className="large-body-copy font-bold mb-1">Access to a password-protected Dashboard. </p>
            <p>
              This will include easy access to all documents (invoices and contracts), as well as, individual episode
              analytics.
            </p>
          </li> */}
        </ol>
      </section>
      <div className="full col-span-12">
        <VerticalDivider />
      </div>
      <section className="interested-in-working-together col-span-12 grid md:col-start-4 md:col-span-6">
        <h2 className="text-yellow text-[48px] leading-none font-black mb-9">Interested in Working Together?</h2>
        <p className="large-body-copy">
          Please complete the sponsorship application if you’re interested in sponsoring the podcast.
        </p>
        <ButtonLink className="button-link alt" href="/sponsor-application" label="Apply to Sponsor" />
      </section>
    </main>
  );
}
