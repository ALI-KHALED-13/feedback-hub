import { StyledTag, StyledLabel } from './styled';

interface TagProps {
  label: string;
}

const Tag = ({label}: TagProps) => {
  return (
    <StyledTag>
      <input id={label} type="checkbox" value={label} />
      <StyledLabel htmlFor={label}>{label}</StyledLabel>
    </StyledTag>
  )
};

export default Tag;
