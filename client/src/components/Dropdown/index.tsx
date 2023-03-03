import { StyledSelectLabel, StyledOption, StyledSelect } from "./styled";

type DropdownProps = {
  options: string[];
  label: string;
}

const Select = ({options, label}: DropdownProps) => {
  return (
    <StyledSelectLabel as="label">
      {label}
      <StyledSelect>
        {options.map((option) => {
          return (
            <StyledOption as="option">{option}</StyledOption>
          );
        })}
      </StyledSelect>
    </StyledSelectLabel>
  )
};

export default Select;
