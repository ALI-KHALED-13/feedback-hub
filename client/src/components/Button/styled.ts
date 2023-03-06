import styled from 'styled-components';
import { setHeading4 } from '../Typo';

interface StyledButtonProps {
  color: string;
  hoverColor: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  ${setHeading4()};
  padding: 1.25rem 2.4rem 1.15rem;
  border: none;
  border-radius: 1rem;
  background-color: ${({color}) => color};
  color: ${({theme}) => theme.lightGray};
  cursor: pointer;

  &:hover {
    background-color: ${({hoverColor}) => hoverColor};
  }
`;
