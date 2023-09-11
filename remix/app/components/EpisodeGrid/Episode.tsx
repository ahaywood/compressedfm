import { Link } from "@remix-run/react";
import { EpisodeZeros } from "../EpisodeZeros";
import { formatLongDate } from "~/lib/dateHelpers";
import { MoreLink } from "../MoreLink";

interface EpisodeProps {
  className?: string;
  episode: Episode;
}

const Episode = ({ className, episode }: EpisodeProps) => {
  const { episodeNumber, slug, publishedAt, briefDescription, title } = episode;
  return (
    <div
      className={`m-0 mr-[15px] pt-5 px-mobilePadding pb-[60px] md:bg-verticalDivider md:bg-right-top md:bg-repeat-y md:pt-5 md:px-[30px] md:pb-[60px] ${className}`}
    >
      <div className="flex items-center">
        <span className="text-white font-mono text-lg tracking-wide mr-1 relative uppercase top-2">
          Episode
        </span>
        <span className="text-yellow text-[132px] font-black leading-none flex items-center">
          {EpisodeZeros(episodeNumber)}
          {episodeNumber}
        </span>
      </div>
      <h2 className="font-sans text-[48px] font-black leading-none m-0 mr-5 p-0 mb-3">
        <Link
          className="text-white underline-none hover:text-lavenderIndigo"
          to={`/episode/${slug.current}`}
        >
          {title}
        </Link>
      </h2>
      <h4 className="font-mono text-lg italic m-0 mb-4 p-0">
        {formatLongDate(publishedAt)}
      </h4>
      <p className="mb-5">{briefDescription}</p>
      <MoreLink href={`/episode/${slug.current}`} />
    </div>
  );
};

export { Episode };
