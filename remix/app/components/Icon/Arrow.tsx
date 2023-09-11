interface ArrowProps {
  className?: string;
  size?: number;
}

const Arrow = ({ className = "", size = 32 }: ArrowProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.4 11L16 12.4L18.5 15H10V16.9H18.5L16 19.5L17.4 20.9L20.9 17.4L22.3 16L17.4 11Z" />
  </svg>
);

export { Arrow };
