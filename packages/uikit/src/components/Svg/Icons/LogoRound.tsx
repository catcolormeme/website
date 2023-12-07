import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return <img src="https://catcolor.live/favicon.ico" alt="" width={24} />;
};

export default Icon;
