import { StyledSelectLabel, StyledOption, StyledSelect } from './styled';

interface DropdownProps {
  options: string[];
  label: string;
}

// probably will be changed to a custom one, not standard select,
// because we can't really style the options part

const Select = ({options, label}: DropdownProps) => {
  return (
    <StyledSelectLabel>
      {label}
      <StyledSelect>
        {options.map((option, i) => {
          return (
            <StyledOption as="option" key={i}>{option}</StyledOption>
          );
        })}
      </StyledSelect>
    </StyledSelectLabel>
  )
};

export default Select;
