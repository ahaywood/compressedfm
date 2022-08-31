import BlockContent from '@sanity/block-content-to-react';

// import { CodeInline } from "./CodeInline";
import { List as list } from './List';
import { ListItem as listItem } from './ListItem';
// import { CodeBlock } from "./CodeBlock";
// import { fullWidthImage } from "./FullWidthImage";
import { H1 } from './H1';
import { H2 } from './H2';
import { H3 } from './H3';
import { H4 } from './H4';
import { P } from './P';
import { LargeText } from './LargeText';
import { Pre } from './Pre';
// import { InternalLink as internalLink } from "./InternalLink";
// import { ExternalLink as link } from "./ExternalLink";
// import { Subtitle } from "./Subtitle";
import { Divider } from './Divider';
import { Image } from './Image';
import { Podcatchers } from './Podcatchers';
import { ThumbnailWithContent } from './ThumbnailWithContent';
import { ReferenceSponsor } from './ReferenceSponsor';

const serializers = {
  types: {
    block: (props) => {
      const { style = 'normal' } = props.node;

      if (style === 'normal') {
        return <P {...props} />;
      }

      if (style === 'h1') {
        return <H1 {...props} />;
      }

      if (style === 'h2') {
        return <H2 {...props} />;
      }

      if (style === 'h3') {
        return <H3 {...props} />;
      }

      if (style === 'h4') {
        return <H4 {...props} />;
      }

      return BlockContent.defaultSerializers.types.block(props);
    },
    // fullWidthImage,
    preformatted: Pre,
    image: Image,
    divider: Divider,
    thumbnailWithContent: ThumbnailWithContent,
    podcatchers: Podcatchers,
    referenceSponsor: ReferenceSponsor,
  },
  list,
  listItem,
  marks: {
    // code: CodeInline,
    // externalLink: ({ mark, children }) => {
    //   const { slug = {} } = mark;
    //   const href = slug.current;
    //   return (
    //     <a href={href} className="text-7xl">
    //       {children}
    //     </a>
    //   );
    // },
    // link,
    // internalLink,
    large: LargeText,
  },
  // eslint-disable-next-line react/display-name
  container: ({ children }) => <>{children}</> /* removes the wrapping div */,
};
export { serializers };
