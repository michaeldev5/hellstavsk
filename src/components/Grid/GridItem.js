import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: ${props => props.itemWidth}px;
  margin-bottom: ${props => props.marginBottomPx}px;
  margin-right: ${props => props.marginRightPerCent}%;
  &:nth-child(3n) {
    margin-right: 0;
  }
`;

const GridItem = ({ children, itemWidth, marginRightPerCent, marginBottomPx }) => (
  <Wrapper itemWidth={itemWidth} marginRightPerCent={marginRightPerCent} marginBottomPx={marginBottomPx}>
    {children}
  </Wrapper>
);

export default GridItem;