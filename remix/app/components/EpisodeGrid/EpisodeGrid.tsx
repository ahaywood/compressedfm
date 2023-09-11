import { Episode } from "./Episode";

interface EpisodeGridProps {
  header: string;
  episodes: Episode[];
}

const EpisodeGrid = ({ header, episodes }: EpisodeGridProps) => {
  return (
    <div
      className={`episode-grid grid grid-cols-1 md:grid-cols-2 regular:grid-cols-3 my-[60px] mx-auto max-w-pageWidth ${
        header ? "w-section-header" : "no-section-header"
      }`}
    >
      {header && (
        <div className="mb-[60px] text-center w-full md:col-span-2 regular:col-span-3">
          <h3 className="section-heading">{header}</h3>
        </div>
      )}
      {episodes &&
        episodes.map((item) => (
          <Episode className="episode-card" key={item._id} episode={item} />
        ))}
    </div>
  );
};

export { EpisodeGrid };
