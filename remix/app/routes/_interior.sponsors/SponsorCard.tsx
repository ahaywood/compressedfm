import { PortableText } from '@portabletext/react';
import { MoreLink } from '~/components/MoreLink';

interface SponsorCardProps {
  sponsor: Sponsor;
}

const SponsorCard = ({ sponsor }: SponsorCardProps) => {
  return (
    <div className="py-0 px-mobilePadding md:px-0">
      <div className="flex h-[75px] mb-5 justify-start items-end">
        <img
          src={sponsor.logo}
          alt={sponsor.title}
          className="mt-auto mr-auto mb-0 ml-0 max-w-[150px]"
        />
      </div>
      {sponsor?.offerLink && sponsor?.offer && (
        <div className="mb-5">
          <MoreLink href={sponsor.offerLink} label={sponsor.offer} />
        </div>
      )}
      {sponsor.aboutText && <PortableText value={sponsor.aboutText} />}
    </div>
  );
};

export { SponsorCard };
