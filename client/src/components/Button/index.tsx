import { StyledButton } from "./styled";

type ButtonProps = {
  text: string;
  color: string;
};

const Button = ({text, color}: ButtonProps) => {
  return (
    <StyledButton as="button" color={color}>{text}</StyledButton>
  );
};

export default Button;
