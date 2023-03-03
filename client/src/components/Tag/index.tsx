import { StyledTag, StyledLabel } from "./styled";

type TagProps = {
  label: string;
}

const Tag = ({label}: TagProps) => {
  return (
    <StyledTag>
      <input id={label} type="checkbox" value={label} />
      <StyledLabel as="label" htmlFor={label}>{label}</StyledLabel>
    </StyledTag>
  )
};

export default Tag;
