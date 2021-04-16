import PropTypes from 'prop-types';

const H4 = ({ children }) => <h4>{children}</h4>;

H4.propTypes = {
  children: PropTypes.string.isRequired,
};

export { H4 };
