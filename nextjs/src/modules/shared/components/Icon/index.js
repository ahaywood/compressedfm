import React from 'react';
import PropTypes from 'prop-types';

import { Arrow } from './Arrow';
import { Discord } from './Discord';
import { Dribbble } from './Dribbble';
import { Facebook } from './Facebook';
import { GitHub } from './GitHub';
import { Instagram } from './Instagram';
import { LinkedIn } from './LinkedIn';
import { Minus } from './Minus';
import { Pinterest } from './Pinterest';
import { Plus } from './Plus';
import { Rss } from './Rss';
import { Twitch } from './Twitch';
import { Twitter } from './Twitter';
import { YouTube } from './YouTube';

const Icon = (props) => {
  const { name } = props;
  console.log(name);
  switch (name.toLowerCase()) {
    case 'arrow':
      return <Arrow {...props} />;
    case 'discord':
      return <Discord {...props} />;
    case 'dribbble':
      return <Dribbble {...props} />;
    case 'facebook':
      return <Facebook {...props} />;
    case 'github':
      return <GitHub {...props} />;
    case 'instagram':
      return <Instagram {...props} />;
    case 'linkedin':
      return <LinkedIn {...props} />;
    case 'minus':
      return <Minus {...props} />;
    case 'pinterest':
      return <Pinterest {...props} />;
    case 'plus':
      return <Plus {...props} />;
    case 'rss':
      return <Rss {...props} />;
    case 'twitch':
      return <Twitch {...props} />;
    case 'twitter':
      return <Twitter {...props} />;
    case 'youtube':
      return <YouTube {...props} />;
    default:
      return <div />;
  }
};

Icon.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
  height: '32',
  width: '32',
};

export { Icon };
