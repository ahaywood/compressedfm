import { MoreLink } from '../MoreLink';

interface ReferenceSponsorProps {
  node: {
    sponsor: {
      title: string;
      about: string;
      logo: {
        url: string;
      };
      offer: string;
      offerLink: string;
    };
  };
}

const ReferenceSponsor = ({ node }: ReferenceSponsorProps) => {
  const {
    sponsor: { title, about, logo, offer, offerLink },
  } = node;
  return (
    <div className="mb-[10px]">
      <img className="max-w-[150px]" src={logo.url} alt={title} />
      <MoreLink className="mb-[7px]" href={offerLink} label={offer} />
      <p>{about}</p>
    </div>
  );
};

export { ReferenceSponsor };
