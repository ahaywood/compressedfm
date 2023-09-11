import { PortableText } from "@portabletext/react";
import { MoreLink } from "~/components/MoreLink";

interface SponsorsProps {
  className: string;
  sponsor: Sponsor[];
}

const Sponsors = ({ className, sponsor }: SponsorsProps) => {
  return (
    <div className={className}>
      <h4 className="heading">Sponsors</h4>
      <ul className="list-none m-0 p-0">
        {sponsor.map((item) => (
          <li key={item._id} className="mb-[60px]">
            <img src={item.logo} alt={item.title} className="max-w-[180px]" />
            <br />
            {item.offerLink && item.offer && (
              <MoreLink
                href={item.offerLink}
                label={item.offer}
                className="mb-[7px]"
              />
            )}
            {item.aboutText && <PortableText value={item.aboutText} />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Sponsors };
