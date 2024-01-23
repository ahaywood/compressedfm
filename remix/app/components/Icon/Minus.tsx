interface MinusProps {
  className?: string;
  size?: number;
}

const Minus = ({ className = '', size = 32 }: MinusProps) => (
  <svg className={className} width={size} height={size} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="18" width="3" height="15" transform="rotate(-90 9 18)" />
  </svg>
);

export { Minus };
