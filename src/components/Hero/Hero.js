import React from "react";
import styled from "styled-components";
import {graphql, StaticQuery} from "gatsby";
import Title1 from "./../Title1";
import BackgroundImage from 'gatsby-background-image';
import Section from "../Section";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - 65px);
  width: 100%;
  padding-top: 152px;
  padding-bottom: 210px;
  margin: 0 auto;
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  max-width: 814px;
`

const Description = styled.p`
  font: normal normal normal 32px/38px Gilroy;
  color: white;
`

const Hero = () => (
    <StaticQuery
        query={graphql`
            query HeroQuery {
              background: file(relativePath: { eq: "bg.png" }) {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
           }
        `}
        render={data => (
          <BackgroundImage fluid={data.background.childImageSharp.fluid} style={{width: '100%'}}>
            <Section>
              <Container>
                  <Wrapper>
                      <Title1 beforeText="MODERNÉ">
                          KREATÍVNE RIEŠENIA
                      </Title1>
                      <Description>
                          Ponúkame kvalitné murárske práce a stavebnú činnosť so zodpovedným prístupom.
                      </Description>
                  </Wrapper>
              </Container>
            </Section>
          </BackgroundImage>
        )}
    />
);

export default Hero;