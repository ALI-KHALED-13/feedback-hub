import { ITag } from 'types';
import Tag from '../Tag';
import { StyledTagsFilter } from './styled';

interface TagsFilterProps {
  tags: ITag[];
};

// functionality is to be done

const TagsFilter = ({tags}: TagsFilterProps) => {
  return (
    <StyledTagsFilter>
      <Tag label="All" />
      {tags.map((tag: ITag) => <Tag key={tag._id} label={tag.name} />)}
    </StyledTagsFilter>
  );
};

export default TagsFilter;
