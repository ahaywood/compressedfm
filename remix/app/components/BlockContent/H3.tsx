interface H3Props {
  children: JSX.Element;
}

const H3 = ({ children }: H3Props) => (
  <h3 className="font-sans text-[28px] font-black m-0 mb-[10px] text-white">{children}</h3>
);

export { H3 };
