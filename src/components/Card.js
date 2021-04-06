import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: auto;
  height: 100%;
  background: #FFF8F8 0% 0% no-repeat padding-box;
  box-shadow: 0px 15px 20px #00000029;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 27px;
  padding-right: 75px;
`;

const Header = styled.div`
  display: flex;
`;

const Icon = styled.img`
  margin-right: 21px;
`;

const Title = styled.h3`
  text-align: left;
  font: normal normal 800 31px/38px Gilroy;
  letter-spacing: 0px;
  color: #62A168;
`;

const Description = styled.p`
  text-align: left;
  font: normal normal normal 23px/28px Gilroy-Regular ☞;
  letter-spacing: 0px;
  color: #44393E;
`;

const Card = ({ children, title, icon }) => (
  <Wrapper>
    <Header>
      <Icon src={icon}/>
      <Title>{title}</Title>
    </Header>
    <Description>{children}</Description>
  </Wrapper>
);

export default Card;