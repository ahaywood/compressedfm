interface LargeTextProps {
  children: JSX.Element;
}

const LargeText = ({ children }: LargeTextProps) => (
  <span className="large-body-copy mb-betweenTextBlocks">{children}</span>
);

export { LargeText };
