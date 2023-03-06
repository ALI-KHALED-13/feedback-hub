import styled from 'styled-components';
import { setHeading4, setStyledParagraph1 } from '../Typo';

export const StyledSelectLabel = styled.label`
  ${setHeading4()};
  font-family: 'Jost Regular', sans-sarif;
  color: ${({theme}) => theme.lightGray};
`;

export const StyledSelect = styled.select`
  border: none;
  background-color: inherit;
  color: ${({theme}) => theme.lightGray};
  cursor: pointer;
`;

export const StyledOption = styled.option`
  ${setStyledParagraph1()};
  border-bottom: 1px solid ${({theme}) => theme.navy};
`;
