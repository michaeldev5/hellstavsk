import React from 'react';
import styled from 'styled-components';

const TitleWrapper = styled.div`


`;

const Title = styled.h2`


`;

const Title2 = ({ children }) => (
  <TitleWrapper>
    <Title>
      {children}
    </Title>
  </TitleWrapper>
);

export default Title2;