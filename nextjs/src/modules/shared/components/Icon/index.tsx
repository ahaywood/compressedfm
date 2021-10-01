import React from 'react';

// components
import { Arrow } from './Arrow';
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

/** -------------------------------------------------
* TYPES
---------------------------------------------------- */
interface Props {
  className?: '',
  height: '32',
  name: string,
  width: '32',
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Icon = (props: Props):JSX.Element => {
  const { name } = props;
  switch (name.toLowerCase()) {
    case 'arrow':
      return <Arrow {...props} />;
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

export { Icon };
