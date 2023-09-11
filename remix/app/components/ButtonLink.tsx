import { Icon } from "./Icon";

interface ButtonLinkProps {
  alt?: boolean;
  className: string;
  href: string;
  label: string;
  primary?: boolean;
}

const ButtonLink = ({
  alt = false,
  className,
  href,
  label,
  primary = false,
}: ButtonLinkProps) => {
  return (
    <a
      href={href}
      className={`button-link ${primary && `bg-yellow`}  ${
        alt && `bg-white`
      } ${className}`}
    >
      {label}
      <Icon name="arrow" />
    </a>
  );
};

export { ButtonLink };
