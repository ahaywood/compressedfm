import { Icon } from "~/components/Icon";

interface LinksProps {
  className?: string;
  listLink: ListLink[];
}

const Links = ({ className = "", listLink }: LinksProps) => {
  return (
    <div className={className}>
      <h4 className="heading">Links</h4>
      <ul className="list-none m-0 p-0">
        {listLink &&
          listLink.map((item) => (
            <li
              key={item._key}
              className="flex leading-tight mb-5 pl-[35px] md:leading-normal"
            >
              <a
                className="text-white no-underline relative hover:text-lavenderIndigo border-b-transparent hover:border-b-transparent"
                href={item.linkUrl}
                target={item.newTab ? "blank" : "self"}
                rel="noreferrer"
              >
                <Icon
                  name="arrow"
                  className="text-yellow absolute -left-8 -top-2 md:-top-[1px]"
                />
                {item.linkLabel}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { Links };
