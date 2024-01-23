import { SponsorCard } from './SponsorCard';

interface SponsorGridProps {
  className?: string;
  header: string;
  sponsors: Sponsor[];
}

const SponsorGrid = ({ className = '', header, sponsors }: SponsorGridProps) => {
  return (
    <section className={className}>
      <div className="heading-with-horizontal-lines">
        <h1>{header}</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 regular:p-0 mt-8 mx-auto mb-[70px] max-w-pageWidth py-0 px-mobilePadding relative gap-[80px]">
        {sponsors && sponsors.map((sponsor) => <SponsorCard sponsor={sponsor} key={sponsor._id} />)}
      </div>
    </section>
  );
};

export { SponsorGrid };
