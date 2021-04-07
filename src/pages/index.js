import React from "react"
import Navbar from "../components/Navbar";
import {createGlobalStyle} from "styled-components";
import styled from "styled-components";
import Hero from "../components/Hero";
import TextSection from "../components/TextSection";
import FeaturesGrid from "../components/FeaturesGrid";
import ProjectsSection from "../components/ProjectsSection";
import Section from '../components/Section';

const Content = styled.div`
  
`;

const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Gilroy';
    src: url('fonts/Gilroy-Regular.ttf');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gilroy';
    src: url('fonts/Gilroy-Heavy.ttf');
    font-weight: 900;
    font-style: normal;
  }

  html, body {
    margin: 0;
    padding: 0;
    font-family: 'Gilroy', 'sans-serif';
    background: #D5F5D8;
  }

  html {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }
`

export default function Home() {
  return (
      <>
        <GlobalStyles/>
        <Navbar/>
        <Content>
              <Hero/>
            <Section>
              <TextSection/>
            </Section>
            <Section>
              <FeaturesGrid/>
            </Section>
            <Section>
              <ProjectsSection/>
            </Section>
        </Content>
      </>
  )
}
