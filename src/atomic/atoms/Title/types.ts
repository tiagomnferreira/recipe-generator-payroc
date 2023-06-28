import { HTMLAttributes } from "react";
import { COLOR } from "../../../style/palette";

export interface Props extends HTMLAttributes<HTMLParagraphElement> {
  fontSize?: number;
  fontColor?: COLOR;
  underline?: boolean;
}
