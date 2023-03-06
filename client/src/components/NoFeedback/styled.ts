import styled from 'styled-components';
import { setHeading1, setStyledParagraph1 } from '../Typo';

export const StyledNoFeedback = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 11.1rem;
  border-radius: 1rem;
  background-color: ${({theme}) => theme.white};
  text-align: center;
`;

export const StyledNoFeedbackHeading = styled.h4`
 ${setHeading1()};
  margin-bottom: 1.6rem;
`;

export const StyledNoFeedbackParagraph = styled.p`
 ${setStyledParagraph1()};
  max-width: 41rem;
  margin-bottom: 4.8rem;
`;
