import React from 'react';
import styled from 'styled-components';
import GridItem from './GridItem';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;


const Grid = ({ children, itemWidth, marginRightPerCent, marginBottomPx }) => (
  <Wrapper>
    {React.Children.toArray(children).map((item) => {
        return (
          item && (
            <GridItem
              itemWidth={itemWidth}
              marginRightPerCent={marginRightPerCent}
              marginBottomPx={marginBottomPx}
            >
              {item}
            </GridItem>
          )
        );
      })}
  </Wrapper>
);

export default Grid;