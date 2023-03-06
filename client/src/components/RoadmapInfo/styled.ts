import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { setHeading3, setStyledSemiBoldParagraph, setStyledParagraph1 } from '../Typo';

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

export const StyledRoadmapHeading = styled.h3`
  ${setHeading3()};
`;

export const StyledLink = styled(Link)`
  ${setStyledSemiBoldParagraph()};
  color: ${({theme}) => theme.blue};
  padding: 0.5rem;
`;

export const StyledStatusList = styled.ul`
  list-style-type: none;
  color: ${({theme}) => theme.blue};
`;

export const StyledStatusItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  color: ${({theme}) => theme.blue};
`;

export const StyledStatusName = styled.p`
  ${setStyledParagraph1()};
  position: relative;
  color: ${({theme}) => theme.gray};
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

    background-color: ${({color}) => color};
  }
`;

export const StyledStatusNumber = styled.p`
  ${setStyledParagraph1()};
  font-weight: 700;
  color: ${({theme}) => theme.gray};
`;
