import React from 'react';
import styled from 'styled-components';
import Title2 from './Title2';

const Wrapper = styled.div`
  padding-top: 53px;
  padding-bottom: 41px;
  padding-right: 109px;
  max-width: 50%;
  position: relative;
  z-index: 5;
  &:before {
    content:"";
    background-color: #F6871F;
    position: absolute;
    height: 100%;
    width: 100vw;
    left: calc(-50vw + 60px);
    top: 0;
    z-index: -1;
    border-radius: 0px 180px 180px 0;
  }
`;

const Description = styled.p`
  text-align: left;
  letter-spacing: 0px;
  color: #44393E;
  font: normal normal normal 23px/28px Gilroy;
`;

const TextSection = () => (
  <Wrapper>
    <Title2>
      O nás
    </Title2>
    <Description>
      Spoločnosť Hellstav, s.r.o. bola založená 16. mája 2020. Od začiatku svojho vzniku sa venuje murárskym prácam a stavebnej činnosti či už v exteriéri, alebo interiéri. Ponúka však nie len to. S využitím kvalitných materiálov Vám poskytne služby ktoré budú nie len estetické, ale aj odolné voči zubu času. 
    </Description>
  </Wrapper>
);

export default TextSection;