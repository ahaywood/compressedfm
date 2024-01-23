interface ListProps {
  type: 'bullet' | 'number' | '';
  children: JSX.Element;
}

const List = ({ type, children }: ListProps) => {
  if (type === 'bullet') {
    return <ul className="mb-betweenTextBlocks">{children}</ul>;
  }
  if (type === 'number') {
    return <ol className="mb-betweenTextBlocks">{children}</ol>;
  }
  return <div>{children}</div>;
};

export { List };
