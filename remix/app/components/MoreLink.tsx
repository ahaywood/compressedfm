import { Link } from "@remix-run/react";
import { Icon } from "./Icon";

interface MoreLinkProps {
  className?: string;
  href: string;
  label?: string;
}

const MoreLink = ({ className, href, label = "More" }: MoreLinkProps) => {
  return (
    <div className={className}>
      <Link
        to={href}
        className="inline-flex gap-x-[0] hover:gap-x-2 transition-all duration-300 ease-in-out items-center text-yellow font-mono text-lg tracking-wide uppercase hover:text-white border-b-0 hover:border-b-0"
      >
        <span>{label}</span>
        <Icon name="arrow" />
      </Link>
    </div>
  );
};

export { MoreLink };
