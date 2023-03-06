import {
  StyledHeader,
  StyledNav,
  StyledLink,
  StyledMenu,
  StyledLogo,
  StyledLogoText,
  StyledUserLogo,
} from './styled';
import logo from '../../images/logo.svg';
import userDefaultLogo from '../../images/user-default.jpg'; // temporarily this pic :)

const Header = () => {
  // temporarily, for testing purposes
  const user = true; 

  return (
    <StyledHeader>
      <StyledNav>
        
        <StyledLink to="/">
          <StyledLogo>
            <img alt="logo" src={logo} width="35" />
            <StyledLogoText>Feedback Hub</StyledLogoText>
          </StyledLogo>
        </StyledLink>
        
        <StyledMenu>
          {user ? (
            <>
              <StyledLink to="/about">About</StyledLink>
              <StyledLink as="span">Log out</StyledLink>
              
              <StyledLink to="/dashboard">
                <StyledUserLogo>
                  <img alt="User Logo" src={userDefaultLogo} width="35" />
                </StyledUserLogo>
              </StyledLink>
            </>
          ) : (
            <>
              <StyledLink to="/login">Log in</StyledLink>
              <StyledLink to="/register">Register</StyledLink>
            </>
          )}
        </StyledMenu>

      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
