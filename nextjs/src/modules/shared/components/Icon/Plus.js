import PropTypes from "prop-types";

const Plus = ({ className, height, width }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M18 9H15V15H9V18H15V24H18V18H24V15H18V9Z" />
    </svg>
  )
}

Plus.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Plus.defaultProps = {
  className: "",
  height: "32",
  width: "32",
};

export { Plus }
