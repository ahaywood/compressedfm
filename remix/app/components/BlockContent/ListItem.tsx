interface ListItemProps {
  children: JSX.Element;
  node: {
    listItem: 'number' | 'bullet';
  };
}

const ListItem = ({ node, children }: ListItemProps) => {
  if (node.listItem === 'number') {
    return <li className="mb-[10px]">{children}</li>;
  }
  if (node.listItem === 'bullet') {
    return <li className="mb-[10px]">{children}</li>;
  }
};

export { ListItem };
