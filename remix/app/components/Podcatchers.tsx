import { Constants } from "~/lib/constants";

interface PodcatchersProps {
  className: string;
  showHeading?: boolean;
}

const Podcatchers = ({ className, showHeading }: PodcatchersProps) => {
  return (
    <div className="pt-0 px-mobilePadding md:px-0 podcatchers">
      {showHeading && (
        <h3 className="font-mono font-lg italic tracking-wide mb-8 p-0 uppercase">
          SUBSCRIBE ON YOUR PODCATCHER OF CHOICE
        </h3>
      )}
      <ul className="flex flex-wrap justify-center list-none my-0 mx-auto p-0 relative max-w-[1200px]">
        {/* ITUNES */}
        {Constants.ITUNES_URL && (
          <li className="justify-between pt-0 px-5 pb-5 md:flex-nowrap">
            <a href={Constants.ITUNES_URL} target="_blank" rel="noreferrer">
              <img
                src="/images/itunes@2x.png"
                alt="iTunes"
                width="146"
                height="46"
              />
            </a>
          </li>
        )}

        {/* GOOGLE PODCASTS */}
        {Constants.GOOGLE_URL && (
          <li className="justify-between pt-0 px-5 pb-5 md:flex-nowrap">
            <a href={Constants.GOOGLE_URL} target="_blank" rel="noreferrer">
              <img
                src="/images/google-podcasts@2x.png"
                alt="Google Podcasts"
                width="187"
                height="38"
              />
            </a>
          </li>
        )}

        {/* SPOTIFY */}
        {Constants.SPOTIFY_URL && (
          <li className="justify-between pt-0 px-5 pb-5 md:flex-nowrap">
            <a href={Constants.SPOTIFY_URL} target="_blank" rel="noreferrer">
              <img
                src="/images/spotify@2x.png"
                alt="Spotify"
                width="135"
                height="47"
              />
            </a>
          </li>
        )}

        {/* STITCHER */}
        {Constants.STITCHER_URL && (
          <li className="justify-between pt-0 px-5 pb-5 md:flex-nowrap">
            <a href={Constants.STITCHER_URL} target="_blank" rel="noreferrer">
              <img
                src="/images/stitcher@2x.png"
                alt="Sitcher"
                width="95"
                height="50"
              />
            </a>
          </li>
        )}

        {/* CASTBOX */}
        {Constants.CASTBOX_URL && (
          <li className="justify-between pt-0 px-5 pb-5 md:flex-nowrap">
            <a href={Constants.CASTBOX_URL} target="_blank" rel="noreferrer">
              <img
                src="/images/castbox@2x.png"
                alt="Listen on Castbox"
                width="158"
                height="56"
              />
            </a>
          </li>
        )}

        {/* POCKET CASTS */}
        {Constants.POCKET_CASTS_URL && (
          <li className="justify-between pt-0 px-5 pb-5 md:flex-nowrap">
            <a
              href={Constants.POCKET_CASTS_URL}
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="/images/pocket-casts@2x.png"
                alt="Listen on Pocket Casts"
                width="180"
                height="44"
              />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export { Podcatchers };
