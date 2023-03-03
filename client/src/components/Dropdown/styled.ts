import styled from "styled-components";
import { Heading4, StyledParagraph1 } from "../Typo";

export const StyledSelectLabel = styled(Heading4)`
  font-family: 'Jost Regular', sans-sarif;
  color: ${(props) => props.theme.lightGray};
`;

export const StyledSelect = styled.select`
  border: none;
  background-color: inherit;
  color: ${(props) => props.theme.lightGray};
  padding: 1.2rem 3.5rem 1.2rem 2.4rem;
`;

export const StyledOption = styled(StyledParagraph1)`
  border-bottom: 1px solid ${(props) => props.theme.navy};
`;
