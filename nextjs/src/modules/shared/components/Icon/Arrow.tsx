/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  className: string;
  height: '32';
  width: '32';
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Arrow = ({ className, height, width }: Props): JSX.Element => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.4 11L16 12.4L18.5 15H10V16.9H18.5L16 19.5L17.4 20.9L20.9 17.4L22.3 16L17.4 11Z" />
  </svg>
);

export { Arrow };
