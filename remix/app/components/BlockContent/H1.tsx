interface H1Props {
  children: JSX.Element;
}

const H1 = ({ children }: H1Props) => (
  <h1 className="font-sans text-[48px] font-black m-0 mb-betweenTextBlocks">
    {children}
  </h1>
);

export { H1 };
