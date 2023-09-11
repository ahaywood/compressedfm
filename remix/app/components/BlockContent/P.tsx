interface PProps {
  children: JSX.Element;
}

const P = ({ children }: PProps) => (
  <p className="mb-betweenTextBlocks">{children}</p>
);

export { P };
