import { UnaryFn } from "../../../typescript";

export interface Props {
  labels: string[];
  onTagClick?: UnaryFn<string, void>;
  activeTag?: string;
}
