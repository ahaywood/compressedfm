import { EpisodeGrid } from '~/components/EpisodeGrid/EpisodeGrid';
import { Newsletter } from '~/components/Newsletter';
import { VerticalDivider } from '~/components/VerticalDivider';
import ColophonColor from './ColophonColor';
import { TypeSample } from './TypeSample';
import { HorizontalDivider } from '~/components/HorizontalDivider';
import { WaveformPlayer } from '~/components/AudioPlayer/WaveformPlayer';
import { FaqQuery, GettingStartedEpisodesQuery, PopularEpisodesQuery, siteSettingsQuery } from '~/queries/Queries';
import { getClient } from '~/lib/sanity';
import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Faq } from './Faq';
import Reasons from '~/components/Reasons';

export const loader = async ({ params }: LoaderArgs) => {
  const faqs = await getClient().fetch(FaqQuery);
  const gettingStarted = await getClient().fetch(GettingStartedEpisodesQuery);
  const mostPopular = await getClient().fetch(PopularEpisodesQuery);
  const siteSettings = await getClient().fetch(siteSettingsQuery);
  return { faqs, gettingStarted, mostPopular, siteSettings };
};

export default function About() {
  const { faqs, gettingStarted, mostPopular, siteSettings } = useLoaderData();
  return (
    <div>
      {/* reasons */}
      <Reasons siteSettings={siteSettings} />

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
      <section className="mr-[25px] mb-[50px] max-w-narrowPageWidth md:mx-auto md:mb-[50px]">
        <div className="text-center">
          <h2 className="section-heading mt-[36px] mb-[64px]">Colophon</h2>
        </div>
        <div>
          <p className="large-body">Since we're web designers and developers, we care about this sort of thing.</p>
          <p>
            The website is built on{' '}
            <a href="https://remix.run" target="_blank" rel="noreferrer">
              Remix
            </a>{' '}
            and{' '}
            <a href="https://sanity.io/" target="_blank" rel="noreferrer">
              Sanity
            </a>{' '}
            and hosted on{' '}
            <a href="https://vercel.com/" target="_blank" rel="noreferrer">
              Vercel
            </a>
            .
          </p>
          <div className="center pt-10 mx-0 mb-[65px] gap-x-20">
            <img src="/images/logo__remix@2x.png" alt="Remix" width="180" height="45" />
            <img src="/images/logo__sanity@2x.png" alt="Sanity" width="191" height="38" />
            <img src="/images/logo__vercel@2x.png" alt="Vercel" width="240" height="60" />
          </div>
          <h4 className="font-mono text-yellow uppercase text-lg text-left mb-3">Colors</h4>
          <div className="flex justify-between mb-[65px]">
            <ColophonColor color="#ffffff" />
            <ColophonColor color="#000000" border="#444444" />
            <ColophonColor color="#484848" />
            <ColophonColor color="#FAFF00" />
            <ColophonColor color="#8C59FF" />
          </div>
          <h4 className="font-mono text-yellow uppercase text-lg text-left mb-3">Typography</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left font-[22px] leading-tight">
            <div className="font-sans font-bold">
              <h5 className="text-[36px] leading-tight mb-[10px] p-0">Greyclif</h5>
              <TypeSample />
            </div>
            <div className="font-mono">
              <h5 className="text-[36px] leading-tight mb-[10px] p-0">Dank Mono</h5>
              <TypeSample />
            </div>
          </div>
        </div>

        <HorizontalDivider length="short" />

        <div className="large-body-copy mb-8">Want to get more specific?</div>
        <h4 className="font-mono text-yellow uppercase text-lg">On the Design Side</h4>
        <div className="flex gap-[10px] flex-col-reverse sm:flex-row sm:gap-[100px]">
          <div className="flex-1">
            <p>
              Amy wrote{' '}
              <a
                href="https://medium.com/@selfteachme/overcoming-the-fear-of-the-blank-canvas-how-i-start-a-design-project-63cfd46a34f4"
                target="_blank"
                rel="noreferrer"
              >
                a blog post on Medium, all about the branding and site design.
              </a>
            </p>
          </div>
          <div className="flex-1">
            <img src="/images/logo__medium@2x.png" alt="Medium" width="277" height="43" />
          </div>
        </div>

        <br />

        <h4 className="font-mono text-yellow uppercase text-lg">Want to get even more specific?</h4>
        <div className="flex gap-[10px] flex-col-reverse sm:flex-row sm:gap-[100px]">
          <div className="flex-1">
            <div className="large-body">We knew you were our people.</div>
            <p>
              We’ve{' '}
              <a href="https://github.com/ahaywood/compressedfm" target="_blank" rel="noreferrer">
                open sourced the code and made it available on GitHub.
              </a>{' '}
            </p>
          </div>
          <div className="flex-1">
            <img src="/images/logo__github@2x.png" alt="GitHub" width="247" height="74" />
          </div>
        </div>

        <br />

        {/* Audio Player */}
        <h4 className="font-mono text-yellow uppercase text-lg">Still curious?</h4>
        <p>We took an entire episode to talk about the tech behind the site.</p>
        <WaveformPlayer
          artwork="/images/cover.png"
          episodeTitle="The Tech Behind Compressed.fm"
          audioPath="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/56025005-71cc-47ec-87a2-0724b9eeed6b/audio/bffa7d33-dae5-46bf-a2a5-a1bd556a7253/default_tc.mp3"
          episodeNumber={3}
        />
      </section>

      <VerticalDivider />

      {/* frequently asked questions */}
      {faqs.length > 0 && (
        <>
          <section className="mx-auto max-w-narrowPageWidth">
            <div className="text-center">
              <h2 className="section-heading mt-[36px] mb-[64px]">Frequently Asked Questions</h2>
            </div>
            {faqs.map((faq: Faq) => (
              <Faq key={faq._id} question={faq.question} answer={faq.answer} />
            ))}
          </section>
          <VerticalDivider />
        </>
      )}
      <Newsletter />
    </div>
  );
}
