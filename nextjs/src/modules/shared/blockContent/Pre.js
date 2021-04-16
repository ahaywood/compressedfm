import PropTypes from 'prop-types';

const Pre = ({ children }) => <pre>{children}</pre>;

Pre.propTypes = {
  children: PropTypes.string.isRequired,
};

export { Pre };
