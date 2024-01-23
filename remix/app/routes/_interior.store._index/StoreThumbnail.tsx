import React from 'react';
import { ButtonLink } from '~/components/ButtonLink';

interface StoreThumbnailProps {
  alt: string;
  image: string;
  link: string;
  price: number;
  slug: string;
}

const StoreThumbnail = ({ alt, image, link, price, slug }: StoreThumbnailProps) => {
  return (
    <div>
      <div className="aspect-[1/1.1] flex items-center justify-center bg-white mb-5 w-full">
        <img src={image} alt={alt} />
      </div>
      <div className="flex items-center">
        <div className="flex-1 text-white pl-8">
          <div className="font-mono text-sm text-white font-bold">{alt}</div>
          <div className="large-body-copy text-yellow">${price}</div>
        </div>
        <div className="px-3">
          <ButtonLink href={`/store/${slug}`} label="Details" />
        </div>
      </div>
    </div>
  );
};

export default StoreThumbnail;
