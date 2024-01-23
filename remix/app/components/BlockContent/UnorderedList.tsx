interface UnorderedListProps {
  children: JSX.Element;
}

const UnorderedList = ({ children }: UnorderedListProps) => <div className="mb-betweenTextBlocks">{children}</div>;

export { UnorderedList };
