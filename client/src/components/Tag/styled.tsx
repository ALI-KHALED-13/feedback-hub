import styled from 'styled-components';
import { setStyledSemiBoldParagraph } from '../Typo';

export const StyledTag = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;

  input {
    display: none;
  }

  input:checked + label {
    background-color: ${({theme}) => theme.blue};
    color: ${({theme}) => theme.white};
  }
`;

export const StyledLabel = styled.label`
  ${setStyledSemiBoldParagraph()};
  padding: 0.6rem 1.6rem;
  border: none;
  border-radius: 1rem;
  background-color: ${({theme}) => theme.lightGray};
  color: ${({theme}) => theme.blue};
  text-transform: capitalize;
  cursor: pointer;

  &:hover {
    background-color: ${({theme}) => theme.grayishBlue};
  }
`;
