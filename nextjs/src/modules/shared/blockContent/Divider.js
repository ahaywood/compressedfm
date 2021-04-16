import PropTypes from 'prop-types';
import { VerticalDivider } from 'modules/shared/components/VerticalDivider';
import { HorizontalDivider } from 'modules/shared/components/HorizontalDivider';

const Divider = ({ node }) => {
  const { type } = node;

  if (type === 'horizontal') {
    return <HorizontalDivider />;
  }

  return <VerticalDivider />;
};

Divider.propTypes = {
  node: PropTypes.any,
};

export { Divider };
