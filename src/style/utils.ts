import { BoxShadow } from "../typescript";
import { COLOR } from "./palette";

export const generateBoxShadow = ({
  blur = 0,
  horizontal = 0,
  spread = 0,
  vertical = 0,
  color = COLOR.NEUTRAL,
}: BoxShadow) => `${horizontal}px ${vertical}px ${blur}px ${spread}px
      ${color}`;
