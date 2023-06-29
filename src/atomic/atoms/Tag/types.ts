import { HTMLAttributes } from "react";

export interface Props extends HTMLAttributes<HTMLDivElement> {
  label: string;
  active?: boolean;
}
