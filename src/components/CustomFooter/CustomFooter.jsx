import React from 'react';
import styled from 'styled-components';
import Section from "../Section";

const Wrapper = styled.div`
  width: 100%;
  background-color: #262123;
  padding: 37px 0;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 50px 0;
`;

const Left = styled.div`
  font-size: 32px;
  text-align: center;
  color: white;
`;

const Right = styled.div`

`

const BottomText = styled.p`
  font-size: 32px;
  color: white;
  text-align: center;
  margin: 0;
`;

const CustomFooter = () => (
  <Wrapper>
    <Section>
      <ContentWrapper>
        <Left>
          Kontaktujte nás od<br />
          Po - Pi<br />
          8:00 - 20:00<br />
        </Left>
        <Right>
          <img src="/icons/instagram.svg" alt="" />
          <img src="/icons/facebook.svg" alt="" style={{ marginLeft: 47 }}/>
        </Right>
      </ContentWrapper>
    </Section>
    <BottomText>
      Všetky práva vyhradené ©Hellstav, s.r.o
    </BottomText>
  </Wrapper>
);

export default CustomFooter;
