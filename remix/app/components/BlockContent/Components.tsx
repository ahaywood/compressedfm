import { PortableText } from "@portabletext/react";

import { List as list } from "./List";
import { ListItem as listItem } from "./ListItem";
import { H1 } from "./H1";
import { H2 } from "./H2";
import { H3 } from "./H3";
import { H4 } from "./H4";
import { P } from "./P";
import { LargeText } from "./LargeText";
import { Pre } from "./Pre";
import { Divider } from "./Divider";
import { Image } from "./Image";
import { Podcatchers } from "./Podcatchers";
import { ThumbnailWithContent } from "./ThumbnailWithContent";
import { ReferenceSponsor } from "./ReferenceSponsor";

export const Components = {
  block: {
    h1: ({ children }: { children: JSX.Element }) => <H1>{children}</H1>,
    // h2: ({ children }: { children: JSX.Element }) => <H2>{children}</H2>,
    // h3: ({ children }: { children: JSX.Element }) => <H3>{children}</H3>,
    // h4: ({ children }: { children: JSX.Element }) => <H4>{children}</H4>,
    // normal: ({ children }: { children: JSX.Element }) => <P>{children}</P>,
    // preformatted: Pre,
    // image: Image,
    // divider: Divider,
    // ThumbnailWithContent: ThumbnailWithContent,
    // Podcatchers: Podcatchers,
    // ReferenceSponsor: ReferenceSponsor,
  },
  // list,
  // listItem,
  // marks: {
  //   large: LargeText,
  // },
};
