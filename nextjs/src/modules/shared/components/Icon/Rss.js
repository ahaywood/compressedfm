import PropTypes from 'prop-types';

const Rss = ({ className, height, width }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.6,29c2,0,3.6-1.6,3.6-3.6s-1.6-3.6-3.6-3.6c-2,0-3.6,1.6-3.6,3.6S4.6,29,6.6,29z" />
    <path d="M3,3v4.7c11.7,0,21.3,9.5,21.3,21.3H29C29,14.6,17.4,3,3,3z M3,12.5v4.7c6.5,0,11.8,5.3,11.8,11.8h4.7 C19.5,19.9,12.1,12.5,3,12.5z" />
  </svg>
);

Rss.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Rss.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Rss };
