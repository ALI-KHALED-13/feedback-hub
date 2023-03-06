import { StyledButton } from './styled';

interface ButtonProps {
  text: string;
  color: string;
  hoverColor: string;
}

const Button = ({text, color, hoverColor}: ButtonProps) => {
  return (
    <StyledButton color={color} hoverColor={hoverColor}>{text}</StyledButton>
  );
};

export default Button;
