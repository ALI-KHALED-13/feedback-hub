import styled from "styled-components";
import { StyledSemiBoldParagraph } from "../Typo";

export const StyledTag = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }

  input:checked + label {
    background-color: ${props => props.theme.blue};
    color: ${props => props.theme.white};
  }
`;

export const StyledLabel = styled(StyledSemiBoldParagraph)`
  padding: 0.6rem 1.6rem;
  border: none;
  border-radius: 1rem;
  cursor: pointer;
  background-color: ${props => props.theme.lightGray};
  color: ${props => props.theme.blue};

  &:hover {
    background-color: ${props => props.theme.grayishBlue};
  }
`;