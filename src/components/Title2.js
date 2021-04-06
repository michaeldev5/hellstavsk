import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
  &:before {
    content: "";
    position: absolute;
    left: 0;
    right: 0;
    bottom: -32px;
    height: 15px;
    width: 160%;
    background: black;
  }
  margin-bottom: 32px;
`;

const Title = styled.h2`
  text-align: left;
  font: normal normal 800 65px/80px Gilroy;
  letter-spacing: 0px;
  color: #262123;
  margin: 0;
`;

const Title2 = ({ children }) => (
  <TitleWrapper>
    <Title>
      {children}
    </Title>
  </TitleWrapper>
);

export default Title2;