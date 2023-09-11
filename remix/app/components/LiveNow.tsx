interface LiveNowProps {
  twitch: string;
  youtube: string;
}

const LiveNow = ({ twitch, youtube }: LiveNowProps) => {
  return (
    <div className="bg-white w-full flex gap-x-6 py-2 px-4 text-black items-center fixed top-0 z-liveNow">
      <div className="rounded-full w-9 h-9 bg-[#f40182]" />
      <div className="flex-1 text-4xl font-black">
        We're recording live, right now.
      </div>
      {twitch && (
        <a
          href={twitch}
          className="cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          Join Us On Twitch
        </a>
      )}
      {youtube && (
        <a
          href={youtube}
          className="cursor-pointer"
          target="_blank"
          rel="noreferrer"
        >
          Join Us On YouTube
        </a>
      )}
    </div>
  );
};

export { LiveNow };
