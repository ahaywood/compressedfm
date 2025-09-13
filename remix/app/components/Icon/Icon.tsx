import { Arrow } from './Arrow';
import { Bluesky } from './Bluesky';
import { DevTo } from './DevTo';
import { Discord } from './Discord';
import { Dribbble } from './Dribbble';
import { Facebook } from './Facebook';
import { GitHub } from './GitHub';
import { Hashnode } from './Hashnode';
import { Instagram } from './Instagram';
import { LinkedIn } from './LinkedIn';
import { Medium } from './Medium';
import { Minus } from './Minus';
import { Pinterest } from './Pinterest';
import { Plus } from './Plus';
import { Rss } from './Rss';
import { TikTok } from './TikTok';
import { Twitch } from './Twitch';
import { Twitter } from './Twitter';
import { YouTube } from './YouTube';

interface IconProps {
  className?: string;
  name: string;
  size?: number;
}

const Icon = ({ className = '', name, size = 32 }: IconProps) => {
  switch (name.toLowerCase()) {
    case 'arrow':
      return <Arrow className={className} size={size} />;
    case 'bluesky':
      return <Bluesky className={className} size={size} />;
    case 'devto':
      return <DevTo className={className} size={size} />;
    case 'discord':
      return <Discord className={className} size={size} />;
    case 'dribbble':
      return <Dribbble className={className} size={size} />;
    case 'facebook':
      return <Facebook className={className} size={size} />;
    case 'github':
      return <GitHub className={className} size={size} />;
    case 'hashnode':
      return <Hashnode className={className} size={size} />;
    case 'instagram':
      return <Instagram className={className} size={size} />;
    case 'linkedin':
      return <LinkedIn className={className} size={size} />;
    case 'medium':
      return <Medium className={className} size={size} />;
    case 'minus':
      return <Minus className={className} size={size} />;
    case 'pinterest':
      return <Pinterest className={className} size={size} />;
    case 'plus':
      return <Plus className={className} size={size} />;
    case 'rss':
      return <Rss className={className} size={size} />;
    case 'tiktok':
      return <TikTok className={className} size={size} />;
    case 'twitch':
      return <Twitch className={className} size={size} />;
    case 'twitter':
      return <Twitter className={className} size={size} />;
    case 'youtube':
      return <YouTube className={className} size={size} />;
    default:
      return <div />;
  }
};

export { Icon };
