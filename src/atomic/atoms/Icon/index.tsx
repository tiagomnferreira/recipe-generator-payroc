import { createElement, memo } from "react";
import iconMap from "./iconMap";
import { Props } from "./types";

const Icon = ({ name, ...props }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    {iconMap[name].map((path) => path)}
  </svg>
);

export default memo(Icon);
