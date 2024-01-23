interface ImageProps {
  node: {
    alignment: string;
    alt: 'center' | 'right' | 'left' | '';
    imageUrl: string;
  };
}

const Image = ({ node }: ImageProps) => {
  const { alignment, alt, imageUrl } = node;
  return (
    <div
      className={`${alignment === 'center' && 'text-center'} ${alignment === 'right' && 'text-right'} ${
        alignment === 'left' && 'text-left'
      }`}
    >
      <img src={imageUrl && imageUrl} alt={alt && alt} />
    </div>
  );
};

export { Image };
