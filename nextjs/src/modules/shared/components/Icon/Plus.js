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
const Plus = ({ className, height, width }: Props): JSX.Element => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M18 9H15V15H9V18H15V24H18V18H24V15H18V9Z" />
  </svg>
);

export { Plus };
