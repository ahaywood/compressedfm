interface H2Props {
  children: JSX.Element;
}

const H2 = ({ children }: H2Props) => (
  <h2 className="font-sans text-[38px] font-black m-0 mb-5 text-yellow">
    {children}
  </h2>
);

export { H2 };
