import PropTypes from 'prop-types';

const Rss = ({ className, height, width }) => {
  console.log('getting here');
  return <span>Howdy</span>;
};

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
