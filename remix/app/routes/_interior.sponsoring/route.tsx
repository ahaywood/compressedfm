import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Icon } from "~/components/Icon";
import { Podcatchers } from "~/components/Podcatchers";
import { VerticalDivider } from "~/components/VerticalDivider";
import { getClient } from "~/lib/sanity";
import { settingsQuery } from "~/queries/Queries";
import { TheHosts } from "../_index/TheHosts";
import { ButtonLink } from "~/components/ButtonLink";
import { Constants } from "~/lib/constants";

export const loader = async ({ params }: LoaderArgs) => {
  const settings = await getClient().fetch(settingsQuery);
  return { settings };
};

export default function Sponsoring() {
  const {
    settings: {
      SponsorshipOptions: {
        singleShow,
        threeEpisodeBundle,
        eightEpisodeBundle,
      },
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
          Are you interested in reaching other web designers and developers?{" "}
          <span className="highlight">We’d love to help!</span>
        </h1>
        <p className="large-body-copy">
          Compressed.fm is a podcast, distributed weekly, that focuses on
          industry news, tools, and workflows. It aims to keep listeners
          up-to-date on the latest technology and best practices.
        </p>
        <p className="large-body-copy">
          Each episode is focused on a single topic, presenting the{" "}
          <em>compressed</em> version of everything you need to know about that
          subject.
        </p>
      </section>

      <div className="full col-span-12">
        <VerticalDivider />
      </div>

      <section className="col-span-12 p-mobilePadding md:col-start-4 md:col-end-4 md:p-0">
        <h2 className="font-sans text-[32px] font-black md:text-[48px]">
          <span className="text-yellow">Why</span> did we start this show?
        </h2>
        <ol className="reasons-list pl-[60px]">
          <li>
            <p className="large-body-copy">
              At the core, James and Amy both have a passion for teaching.
            </p>
            <p>
              James is a content creator and bootcamp instructor. Amy has taught
              and developed curriculum for the University of Florida’s Master’s
              program.
            </p>
          </li>
          <li>
            <p className="large-body-copy">
              There are podcasts that focus on web development and podcasts that
              focus on web design, but few, if any, account for both.{" "}
            </p>
            <p>
              You don’t have to know code to be a good designer. You don’t have
              to know design in order to be a good developer. But, the best
              designers and the best developers have a basic understanding of
              both disciplines.
            </p>
          </li>
        </ol>
      </section>

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

      <div className="full">
        <VerticalDivider />
      </div>

      <section className="sponsoring-is-perfect col-span-12 my-[75px] py-0 px-mobilePadding md:grid-start-4 md:col-span-6 md:p-0">
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

      <section className="audience-breakdown">
        <h2 className="highlight">Audience Breakdown</h2>
        <p className="large-body-copy">
          Since this is a new podcast, we don’t have specific analytics, yet.
          However, based on the composition of our Twitter, YouTube, and Twitch
          subscribers, we’re making the following assumptions.
        </p>
        <div className="two-up">
          <div className="two-up__usa">
            <img
              src="/images/usa.svg"
              alt="United States of America Silhouette"
              width="271"
              height="168"
            />
          </div>
          <div className="two-up__age">
            <div className="audience-breakdown__number">25-34</div>
          </div>
          <div className="two-up__usa__description">
            <p className="large-body-copy">
              A majority of listeners live in the United States of America
            </p>
          </div>
          <div className="two-up__age__description">
            <p className="large-body-copy">
              Most listeners fall within this age range
            </p>
          </div>
        </div>
      </section>

      <div className="col-span-12">
        <VerticalDivider />
      </div>

      <section className="current-audience">
        <div className="heading-wrapper">
          <h3>Current Audience</h3>
        </div>

        <div className="current-audience__social">
          <div className="current-audience__social__icon">
            <Icon size={90} name="twitter" />
          </div>
          <div className="current-audience__social__featured-number">
            {JamesSocialMedia.twitterFollowers} Followers
          </div>
          <div className="current-audience__social__link">
            <a
              href="http://twitter.com/jamesqquick"
              target="_blank"
              rel="noreferrer"
            >
              twitter.com/jamesqquick
            </a>
          </div>
        </div>

        <div className="current-audience__social">
          <div className="current-audience__social__icon">
            <Icon size={90} name="twitch" />
          </div>
          <div className="current-audience__social__featured-number">
            {JamesSocialMedia.twitchFollowers} Followers
          </div>
          <div className="current-audience__social__link">
            <a
              href="http://twitch.com/jamesqquick"
              target="_blank"
              rel="noreferrer"
            >
              twitch.com/jamesqquick
            </a>
          </div>
        </div>

        <div className="current-audience__social">
          <div className="current-audience__social__icon">
            <Icon size={90} name="discord" />
          </div>
          <div className="current-audience__social__featured-number">
            {JamesSocialMedia.discordMembers} Members
          </div>
          <div className="current-audience__social__link">
            <a
              href="http://learnbuildteach.com"
              target="_blank"
              rel="noreferrer"
            >
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
            <a
              href="http://youtube.com/c/jamesqquick"
              target="_blank"
              rel="noreferrer"
            >
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
            <a
              href="http://youtube.com/c/selfteachme"
              target="_blank"
              rel="noreferrer"
            >
              youtube.com/c/selfteachme
            </a>
          </div>
        </div>

        <div className="current-audience__social">
          <div className="current-audience__social__icon">
            <Icon size={90} name="twitter" />
          </div>
          <div className="current-audience__social__featured-number">
            {AmySocialMedia.twitterFollowers} Followers
          </div>
          <div className="current-audience__social__link">
            <a
              href="http://twitter.com/selfteachme"
              target="_blank"
              rel="noreferrer"
            >
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
              <div className="description">${singleShow} USD/ea</div>
              <div className="separator" />
              <div className="pricing"> 1-3 episodes</div>
            </li>

            <li>
              <div className="description">${threeEpisodeBundle} USD/ea</div>
              <div className="separator" />
              <div className="pricing"> 4-8 episodes</div>
            </li>

            <li>
              <div className="description">${eightEpisodeBundle} USD/ea</div>
              <div className="separator" />
              <div className="pricing">8-16 episodes</div>
            </li>
          </ul>
        </div>
        <div className="fine-print">
          *For the best results, we recommend advertising at least three shows.
        </div>
      </section>
      <div className="full">
        <VerticalDivider />
      </div>
      <section className="youll-receive">
        <h2 className="highlight">
          As part of the sponsorship package, you’ll receive:
        </h2>
        <ol>
          <li>
            <p className="large-body-copy">
              Live Streamed to YouTube and Twitch
            </p>
            <p>
              In addition to being published in traditional podcast format,
              these episodes will be live streamed to Compressed's{" "}
              <a
                href={Constants.COMPRESSEDFM_YOUTUBE}
                target="_blank"
                rel="noreferrer"
              >
                YouTube
              </a>{" "}
              and{" "}
              <a
                href={Constants.COMPRESSEDFM_TWITCH}
                target="_blank"
                rel="noreferrer"
              >
                Twitch
              </a>{" "}
              channels.
            </p>
          </li>
          <li>
            <p className="large-body-copy">
              A sponsorship section within the episode show notes.
            </p>
            <p>
              These notes will be listed on the Compressed.fm website and within
              the user’s podcatcher of choice. This is a great opportunity to
              include unique targeted links and promo codes.
            </p>
          </li>
          <li>
            <p className="large-body-copy">A mention at the top of the show.</p>
            <p>
              For example, Amy might say: “Today’s episode is sponsored by
              MailGun. This is an email service with powerful APIs that enable
              you to send, receive, and track email effortlessly. Later in the
              show, I’ll talk more about how I’ve used MailGun in the past.”
            </p>
          </li>
          <li>
            <p className="large-body-copy">
              A one to two minute sponsor spot at the 10 or 20-minute-mark.
            </p>
            <p>
              We could provide a normal ad read, however, the best results will
              come from Amy or James talking about the product or service and
              our own personal experience with your product. This gives your
              product a personal touch and results in better conversions.
            </p>
          </li>
          <li>
            <p className="large-body-copy">
              An evergreen listing on the Compressed.fm sponsors page.
            </p>
            <p>
              This is a useful resource for listeners wanting to quickly
              reference a sponsor’s offering, but are unable to recall which
              episode, coupon code, or link was used during the ad read.{" "}
            </p>
          </li>
          <li>
            <p className="large-body-copy">
              Access to a password-protected Dashboard.{" "}
            </p>
            <p>
              This will include easy access to all documents (invoices and
              contracts), as well as, individual episode analytics.
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
          Please complete the sponsorship application if you’re interested in
          sponsoring the podcast.
        </p>
        <ButtonLink
          className="button-link alt"
          href="/sponsor-application"
          label="Apply to Sponsor"
        />
      </section>
    </main>
  );
}
