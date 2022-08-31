import PropTypes from 'prop-types';

const Medium = ({ className, height, width }) => (
  <svg className={className} width={width} height={height} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.0499 15.9134C18.0499 10.895 14.0093 6.82669 9.02511 6.82669C4.04097 6.82669 0 10.8959 0 15.9134C0 20.931 4.04067 25.0005 9.02511 25.0005C14.0096 25.0005 18.0499 20.9319 18.0499 15.9134ZM27.9504 15.9134C27.9504 11.1896 25.9301 7.35868 23.4379 7.35868C20.9457 7.35868 18.9253 11.1896 18.9253 15.9134C18.9253 20.6373 20.9454 24.4682 23.4376 24.4682C25.9298 24.4682 27.9501 20.6385 27.9501 15.9134H27.9504ZM32 15.9134C32 11.6821 31.2896 8.24973 30.4129 8.24973C29.5363 8.24973 28.8262 11.6811 28.8262 15.9134C28.8262 20.1457 29.5366 23.5771 30.4129 23.5771C31.2892 23.5771 32 20.146 32 15.9134" />
  </svg>
);

Medium.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
};

Medium.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Medium };
