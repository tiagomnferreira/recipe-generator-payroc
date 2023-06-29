import { memo } from "react";
import Tag from "../../atoms/Tag";
import { Container } from "./styled-components";
import { Props } from "./types";

const TagsListing = ({ labels, onTagClick, activeTag }: Props) => (
  <Container>
    {labels.map((tag, index) => (
      <Tag
        key={tag + index.toString()}
        active={activeTag ? activeTag === tag : undefined}
        label={tag}
        onClick={() => {
          onTagClick?.(tag);
        }}
        role="textbox"
        aria-label="Tag"
      />
    ))}
  </Container>
);

export default memo(TagsListing);
