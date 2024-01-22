import { Link } from "@remix-run/react";
import { EpisodeZeros } from "./EpisodeZeros";
import { formatShortDate } from "~/lib/dateHelpers";
import { MoreLink } from "./MoreLink";
import { FeaturedAudioPlayer } from "./AudioPlayer/FeaturedAudioPlayer";

interface FeaturedEpisodeProps {
  episode: Episode;
}

const FeaturedEpisode = ({
  episode: {
    audioPath,
    guest,
    publishedAt,
    episodeNumber,
    slug,
    title,
    briefDescription,
    cover,
    hosts,
  },
}: FeaturedEpisodeProps) => {
  return (
    <div className="featured-episode grid grid-cols-[1fr] md:grid-cols-[300px_1fr] lg:grid-cols-[1fr_1fr] my-0 mx-auto max-w-pageWidth relative">
      <div className="episode-number-date__wrapper items-center flex justify-center mb-[30px]">
        <span className="episode">Episode</span>
        <span className="text-yellow font-sans text-[80px] font-black my-0 mx-[10px] regular:text-[132px]">
          {EpisodeZeros(episodeNumber)}
          {episodeNumber}
        </span>
        <span className="episode-publish-date">
          {formatShortDate(publishedAt)}
        </span>
      </div>
      <div className="podcast-cover none md:block text-right pr-[55px]">
        <img
          className="border-1 border-bastille"
          src={cover || "/images/podcast-cover.jpg"}
          alt={title}
        />
      </div>
      <div className="episode-content p-0 px-mobilePadding regular:px-0">
        <h3 className="font-sans text-[50px] sm:text-[60px] md:text-[85px] font-black leading-[0.95] mt-0 mx-0 mb-[36px]">
          <Link
            className="text-white hover:text-lavenderIndigo hover:no-underline"
            to={`/episode/${slug.current}`}
          >
            {title}
          </Link>
        </h3>
        <p>{briefDescription}</p>
        <MoreLink
          href={`/episode/${slug.current}`}
          className="relative -top-7 md:top-0"
          label="More"
        />
        <ul className="tiny-avatars none md:flex flex-row-reverse list-none m-0 p-0 relative -top-[25px] pointer-events-none">
          {hosts &&
            hosts.map((host) => (
              <li className="-ml-[10px]" key={host._id}>
                <img
                  className="rounded-full border-1 border-white"
                  src={host.avatar}
                  height="60"
                  width="60"
                  alt={`${host.firstName} ${host.lastName}`}
                />
              </li>
            ))}
          {guest &&
            guest.map((one, index) => (
              <li className="-ml-[10px]" key={index}>
                <img
                  className="rounded-full border-1 border-white w-[60px] h-[60px] object-cover"
                  src={one.avatar}
                  height="60"
                  width="60"
                  alt={`${one.firstName} ${one.lastName}`}
                />
              </li>
            ))}
        </ul>
      </div>
      <div className="audio-player py-0 px-mobilePadding regular:px-0">
        <FeaturedAudioPlayer track={audioPath} />
      </div>
    </div>
  );
};

export { FeaturedEpisode };
