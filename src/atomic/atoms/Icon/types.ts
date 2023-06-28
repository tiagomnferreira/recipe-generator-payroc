import { SVGProps } from "react";
import iconMap from "./iconMap";

export interface Props extends SVGProps<SVGSVGElement> {
  name: keyof typeof iconMap;
}
