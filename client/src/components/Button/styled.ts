import styled from "styled-components";
import { Heading4 } from "../Typo";

export const StyledButton = styled(Heading4)`
  padding: 1.25rem 2.4rem 1.15rem;
  border: none;
  border-radius: 1rem;
  background-color: ${(props) => props.color};
  color: ${(props) => props.theme.white};
  cursor: pointer;
`;
