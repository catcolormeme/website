import React from "react";
import { SvgProps } from "../types";

const Logo: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <div {...props} style={{ alignItems: "center", ...props.style }}>
      <img src="/images/logo.png" alt="" width="150px" style={{ verticalAlign: "middle" }} />
    </div>
  );
};

export default Logo;
