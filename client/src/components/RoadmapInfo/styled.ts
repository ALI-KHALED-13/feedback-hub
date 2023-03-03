import styled from "styled-components";
import { StyledSemiBoldParagraph, StyledParagraph1 } from "../Typo";

export const StyledRoadmapInfo = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.7rem;
  padding: 2.4rem;
  background-color: ${(props) => props.theme.white};
  border-radius: 1rem;
`;

export const StyledRoadmapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const StyledLink = styled(StyledSemiBoldParagraph)`
  color: ${(props) => props.theme.blue};
  padding: 0.5rem;
`;

export const StyledStatusList = styled.ul`
  list-style-type: none;
  color: ${(props) => props.theme.blue};
`;

export const StyledStatusItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  color: ${(props) => props.theme.blue};
`;

export const StyledStatusName = styled(StyledParagraph1)`
  position: relative;
  color: ${(props) => props.theme.gray};
  padding: 0 0 0 2.4rem;

  &::before {
    display: block;
    content: '';
    position: absolute;
    top: 0.6rem;
    left: 0;
    width: 0.8rem;
    height: 0.8rem;
    border-radius: 50%;

    background-color: ${(props) => props.color};
  }
`;

export const StyledStatusNumber = styled(StyledParagraph1)`
  font-weight: 700;
  color: ${(props) => props.theme.gray};
`;
