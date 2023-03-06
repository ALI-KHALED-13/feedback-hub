import styled from 'styled-components';
import { setHeading2, setStyledParagraph2 } from '../Typo';

export const StyledSideMenu = styled.section`
  display: flex;
  flex-direction: column;
  width: 23%;
  width: 25.5rem;
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

export const StyledProductTitle = styled.h2`
  ${setHeading2()};
  color: ${({theme}) => theme.white};
  text-transform: capitalize;
`;

export const StyledMenuText = styled.p`
  ${setStyledParagraph2()};
  color: ${({theme}) => theme.white};
`;
