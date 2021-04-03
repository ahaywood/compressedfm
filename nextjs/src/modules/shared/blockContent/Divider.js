import { VerticalDivider } from "modules/shared/components/VerticalDivider"
import { HorizontalDivider } from "modules/shared/components/HorizontalDivider"

const Divider = (props) => {
  const { type } = props.node;

  if (type == "horizontal") {
    return (
      <HorizontalDivider />
    )
  }

  else {
    return (
      <VerticalDivider />
    )
  }
}

export { Divider }