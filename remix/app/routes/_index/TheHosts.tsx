import { PersonBio } from "./PersonBio";

interface TheHostsProps {
  details: {
    AmySocialMedia: HostDetails;
    JamesSocialMedia: HostDetails;
  };
}

interface HostDetails {
  bioBodyText: string;
  bioLargeText: string;
  github: string;
  instagram: string;
  jobTitle: string;
  twitch: string;
  twitter: string;
  twitterFollowers: string;
  youtube: string;
  youtubeSubscribers: string;
}

const TheHosts = ({ details }: TheHostsProps) => {
  return (
    <div className="grid grid-cols[1fr] md:grid-cols-[minmax(0,_1fr)_minmax(0,_1fr)] gap-0 my-[60px] mx-auto max-w-pageWidth w-full ">
      <div className="mb-[60px] text-center w-full md:col-span-2">
        <h3 className="section-heading">The Hosts</h3>
      </div>
      {/* james */}
      <PersonBio
        className="flex flex-col h-full py-0 px-mobilePadding sm:border-r-1 sm:border-r-white sm:pr-[85px] regular:pl-0"
        avatar="/images/james.png"
        firstName="James"
        lastName="Q Quick"
        jobTitle={details.JamesSocialMedia.jobTitle}
        largeBody={details.JamesSocialMedia.bioLargeText}
        body={details.JamesSocialMedia.bioBodyText}
        twitter={details.JamesSocialMedia.twitter}
        github={details.JamesSocialMedia.github}
        youtube={details.JamesSocialMedia.youtube}
        twitch={details.JamesSocialMedia.twitch}
      />

      {/* amy */}
      <PersonBio
        className="flex flex-col h-full py-0 px-mobilePadding sm:py-0 sm:pr-mobilePadding sm:pb-0 sm:pl-[85px] regular:pr-0"
        avatar="/images/amy.png"
        firstName="Amy"
        lastName="Dutton"
        jobTitle={details.AmySocialMedia.jobTitle}
        largeBody={details.AmySocialMedia.bioLargeText}
        body={details.AmySocialMedia.bioBodyText}
        twitter={details.AmySocialMedia.twitter}
        instagram={details.AmySocialMedia.instagram}
        github={details.AmySocialMedia.github}
        youtube={details.AmySocialMedia.youtube}
        twitch={details.AmySocialMedia.twitch}
      />
    </div>
  );
};

export { TheHosts };
