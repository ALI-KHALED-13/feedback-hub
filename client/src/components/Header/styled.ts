import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.white};
  color: ${({theme}) => theme.navy};
  box-shadow: 0 1px 1px 1px ${({theme}) => theme.grayishBlue};
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 111rem;
  padding: 0.5rem;
  gap: 1rem;
`;

export const StyledMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const StyledLink = styled(Link)`
  display: block;
  padding: 1rem;
  color: ${({theme}) => theme.navy};
  font-family: 'Jost Semi Bold', sans-serif;
  font-size: 2.2rem;
  text-decoration: none;
  cursor: pointer;
`;

export const StyledLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const StyledLogoText = styled.h1`
  font-family: 'Jost Semi Bold', sans-serif;
  font-size: 2.6rem;
`;

export const StyledUserLogo = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;

  img {
    border-radius: 50%;
  }
`;
