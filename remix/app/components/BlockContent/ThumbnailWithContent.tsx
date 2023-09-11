// components
import { PortableText } from "@portabletext/react";

interface ThumbnailWithContentProps {
  node: {
    thumbUrl: {
      url: string;
    };
    alt: string;
    content: [];
  };
}

const ThumbnailWithContent = ({ node }: ThumbnailWithContentProps) => {
  const { thumbUrl, alt, content } = node;
  return (
    <div className="thumbnail-with-content grid grid-cols-[160px_1fr] gap-[25px] mb-[50px]">
      <div>
        <img
          src={thumbUrl.url}
          alt={alt}
          width="160"
          className="border-1 border-bastille"
        />
      </div>
      <div>
        <PortableText value={content} />
      </div>
    </div>
  );
};

export { ThumbnailWithContent };
