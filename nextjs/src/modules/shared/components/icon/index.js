import React from "react";
import PropTypes from "prop-types";

import { Facebook } from "./Facebook";
import { GitHub } from "./GitHub";
import { Instagram } from "./Instagram";
import { Twitch } from "./Twitch";
import { Twitter } from "./Twitter";
import { YouTube } from "./YouTube";

const Icon = (props) => {
  switch (props.name.toLowerCase()) {
    case "facebook":
      return <Facebook {...props} />;
    case "github":
      return <GitHub {...props} />;
    case "instagram":
      return <Instagram {...props} />;
    case "twitch":
      return <Twitch {...props} />;
    case "twitter":
      return <Twitter {...props} />;
    case "youtube":
      return <YouTube {...props} />;
    default:
      return <div />;
  }
};

Icon.propTypes = {
  className: PropTypes.string,
  height: PropTypes.string,
  name: PropTypes.string.isRequired,
  width: PropTypes.string,
};

Icon.defaultProps = {
  className: "",
  height: "25",
  width: "25",
};

export { Icon };
