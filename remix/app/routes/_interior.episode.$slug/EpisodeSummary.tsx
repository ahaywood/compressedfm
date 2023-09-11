import { EpisodeZeros } from "~/components/EpisodeZeros";
import { formatLongDate } from "~/lib/dateHelpers";

interface EpisodeSummaryProps {
  briefDescription: string;
  className: string;
  title: string;
  episodeNumber: string;
  publishedAt: string;
}

const EpisodeSummary = ({
  briefDescription,
  className,
  title,
  episodeNumber,
  publishedAt,
}: EpisodeSummaryProps) => {
  return (
    <section
      className={`episode-summary grid grid-cols-1 md:grid-cols-2 gap-[50px] ${className}`}
    >
      <div className="title px-mobilePadding md:px-0 md:pb-mobilePadding regular:pb-0">
        <h3 className="font-mono text-lg font-normal tracking-wider m-0 pt-[75px] uppercase md:p-0">
          {formatLongDate(publishedAt)}
        </h3>
        <h1 className="text-white font-sans text-[60px] md:text-[85px] font-black leading-none m-0 p-0 relative z-episodeTitle">
          {title}
        </h1>
      </div>
      <div className="episode-number text-yellow font-sans font-black text-[200px] absolute right-0 -top-[75px] md:-top-[175px] z-episodeNumber flex">
        {EpisodeZeros(episodeNumber)}
        {episodeNumber}
      </div>
      <div className="description relative px-mobilePadding md:p-0">
        <p className="large-body-copy leading-snug">{briefDescription}</p>
      </div>
    </section>
  );
};

export { EpisodeSummary };
