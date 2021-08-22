import * as React from "react"
import Download from "../components/Download"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import MapWithContact from "../components/MapWithContact"
import Nav from "../components/Nav"
import Team from "../components/Team"
import Testimonials from "../components/Testimonials"
import navigation from "../navigation"
import Features from "../components/Features/Features"

const IndexPage = () => (
  <>
    <Nav navigation={navigation} showHero />
    <Features />
    <Projects />
    <Team />
    <Testimonials />
    <Download />
    <MapWithContact />
    <Footer navigation={navigation} />
  </>
)

export default IndexPage
