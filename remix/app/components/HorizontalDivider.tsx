interface HorizontalDividerProps {
  length?: "short" | "";
}

const HorizontalDivider = ({ length = "" }: HorizontalDividerProps) => (
  <hr
    className={`bg-horizontalDivider bg-center border-none h-[1px] my-[60px] ${
      length === "short" && "bg-no-repeat"
    }`}
  />
);

export { HorizontalDivider };
