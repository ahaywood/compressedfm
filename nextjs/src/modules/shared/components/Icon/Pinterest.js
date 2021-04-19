import PropTypes from 'prop-types';

const Pinterest = ({ className, height, width }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.2 21.2001C13.4 25.6001 12.4 29.8 9.29997 32C8.39997 25.3 10.7 20.3 11.8 15C9.89997 11.9 12 5.70005 15.9 7.30005C20.7 9.20005 11.8 18.8 17.7 20C23.9 21.3 26.5 9.20005 22.6 5.30005C17 -0.399951 6.39997 5.10005 7.69997 13.2C7.99997 15.2 10.1 15.8 8.49997 18.5C4.89997 17.7 3.89997 14.9 3.99997 11.1C4.19997 5.00005 9.49997 0.700049 14.8 0.100049C21.5 -0.699951 27.8 2.60005 28.7 8.90005C29.7 16 25.7 23.8001 18.5 23.2001C16.6 23.1001 15.8 22.1001 14.2 21.2001Z" />
  </svg>
);

Pinterest.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Pinterest.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Pinterest };
