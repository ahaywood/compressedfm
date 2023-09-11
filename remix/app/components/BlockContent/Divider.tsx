import { HorizontalDivider } from "../HorizontalDivider";
import { VerticalDivider } from "../VerticalDivider";

interface DividerProps {
  node: {
    type?: "horizontal" | "vertical" | "";
  };
}

const Divider = ({ node }: DividerProps) => {
  const { type } = node;

  if (type === "horizontal") {
    return <HorizontalDivider />;
  }

  return <VerticalDivider />;
};

export { Divider };
