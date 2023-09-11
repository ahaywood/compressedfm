interface PlusProps {
  className?: string;
  size?: number;
}

const Plus = ({ className = "", size = 32 }: PlusProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18 9H15V15H9V18H15V24H18V18H24V15H18V9Z"
    />
  </svg>
);

export { Plus };
