import PropTypes from 'prop-types';

const Minus = ({ className, height, width }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <rect x="9" y="18" width="3" height="15" transform="rotate(-90 9 18)" />
  </svg>
);

Minus.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Minus.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Minus };
