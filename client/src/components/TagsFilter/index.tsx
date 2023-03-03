import Tag from "../Tag";
import { StyledTagsFilter } from "./styled";
import { ITag } from "types";

type TagsFilterProps = {
  tags: ITag[];
};

const TagsFilter = ({tags}: TagsFilterProps) => {
  return (
    <StyledTagsFilter>
      {tags.map((tag: ITag) => <Tag key={tag.id} label={tag.name} />)}
    </StyledTagsFilter>
  );
};

export default TagsFilter;
