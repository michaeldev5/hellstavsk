import React from "react";
import styled from "styled-components";
import {Link} from "gatsby";
import logoSrc from './logo.png';

const OuterWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 999;
`;

const Wrapper = styled.div`
  height: 152px;
  max-width: 1600px;
  margin: 0 auto;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background: #262123;
  z-index: 1000;
  padding: 0 21px;
`

const LinkWrapper = styled(props => <Link {...props} />)`
  height: 100%;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 159px;
  border-bottom: 14px solid transparent;
  padding-top: 14px;

  &:hover {
    background-color: #707070;
    border-bottom: 14px solid #F6871F;
  }
`

const StyledLink = styled.div`
  color: white;
  text-decoration: none;
  font: normal normal 900 23px/29px Gilroy;
  letter-spacing: 0;
`;

const LogoWrapper = styled.a`
  display: flex;
  flex-direction: row;
  flex: 1;
`

const Logo = styled.img`
  width: 234px;
`

const Button = styled.a`
  font: normal normal 900 25px Gilroy;
  background-color: #F6871F;
  padding: 20px 15px;
  text-transform: uppercase;
  width: 227px;
  height: 66px;
  color: white;
  text-align: center;
  text-decoration: none;
  margin-left: 54px;
`;

const Navbar = () => {
    return (
      <OuterWrapper>
        <Wrapper>
          <LogoWrapper>
            <Logo src={logoSrc}/>
          </LogoWrapper>
          <LinkWrapper to="#">
            <StyledLink >O nás</StyledLink>
          </LinkWrapper>
          <LinkWrapper to="#">
            <StyledLink>Projekty</StyledLink>
          </LinkWrapper>
          <LinkWrapper to="#">
            <StyledLink to="#">Služby</StyledLink>
          </LinkWrapper>
          <LinkWrapper to="#">
            <StyledLink to="#">Kontakt</StyledLink>
          </LinkWrapper>
          <Button href="#">ozvite sa nám</Button>
        </Wrapper>
      </OuterWrapper>
    )
}

export default Navbar;