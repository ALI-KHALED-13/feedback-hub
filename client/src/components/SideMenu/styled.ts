import styled from "styled-components";
import { Heading2, StyledParagraph2 } from "../Typo";

export const StyledSideMenu = styled.section`
  display: flex;
  flex-direction: column;
  width: 23%;
  // width: 25.5rem;
  gap: 2.4rem;
`;

export const StyledProductNameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 13.7rem;
  border-radius: 1rem;
  padding: 2.4rem;
  background: radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%);
`;

export const StyledProductName = styled(Heading2)`
  color: ${(props) => props.theme.white};
`;

export const StyledMenuText = styled(StyledParagraph2)`
  color: ${(props) => props.theme.white};
`;
