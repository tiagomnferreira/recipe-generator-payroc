import { HTMLAttributes } from "react";
import { COLOR } from "../../../style/palette";

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  fontColor?: COLOR;
  fontSize?: number;
  italic?: boolean;
  capitalize?: boolean;
}
