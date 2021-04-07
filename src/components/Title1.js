import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  position: relative;
  left: 30px;
  font: normal normal 800 80px/98px Gilroy;
  letter-spacing: 0px;
  color: white;
  z-index: 5;
  
  &:before {
    content: "${props => props.beforeText}";
    position: absolute;
    left: -5%;
    bottom: 0;
    font: normal normal normal 148px/178px Gilroy;
    letter-spacing: 0px;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke-width: 2px;
    -webkit-text-stroke-color: #F6871F;
    color: #F6871F;
    z-index: -5;
  }
`

export default Title;