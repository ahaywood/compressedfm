import PropTypes from 'prop-types';

const Hashnode = ({ className, height, width }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2.19893 10.6916C-0.732977 13.6235 -0.732977 18.3765 2.19893 21.3081L10.6918 29.8013C13.6237 32.7329 18.3767 32.7329 21.3083 29.8013L29.8015 21.3081C32.7331 18.3762 32.7331 13.6232 29.8015 10.6916L21.3083 2.19872C18.3764 -0.732908 13.6234 -0.732908 10.6918 2.19872L2.19893 10.6916ZM19.7157 19.7158C21.768 17.6634 21.768 14.3363 19.7157 12.2842C17.6636 10.2319 14.3365 10.2319 12.2844 12.2842C10.2321 14.3366 10.2321 17.6634 12.2844 19.7158C14.3368 21.7678 17.6636 21.7678 19.716 19.7158H19.7157V19.7158Z"
    />
  </svg>
);

Hashnode.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Hashnode.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Hashnode };
