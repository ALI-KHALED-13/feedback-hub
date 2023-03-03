import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.violet};
  // background: linear-gradient(#A337F6 0%, #C256FF 20%, #C75AF6 40%, #C256FF 60%, #A337F6 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  color: ${(props) => props.theme.white};
  
  font-size: 2.5rem;
`;

export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 200rem;
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
  color: ${(props) => props.theme.white};
  text-decoration: none;
  cursor: pointer;
  font-family: "Jost Semi Bold", sans-serif;
`;

export const StyledLogo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

export const StyledLogoImg = styled.img`
`;

export const StyledLogoText = styled.span`
  font-family: "Jost Semi Bold", sans-serif;
`;

export const StyledUserLogo = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;

  img {
    border-radius: 50%;
  }
`;


