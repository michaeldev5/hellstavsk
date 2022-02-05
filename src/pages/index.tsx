import * as React from "react"
import Download from "../components/Download"
import Footer from "../components/Footer"
import Projects from "../components/Projects"
import MapWithContact from "../components/MapWithContact"
import Testimonials from "../components/Testimonials"
import navigation from "../navigation"
import Features from "../components/Features/Features"
import Seo from "../components/Seo"
import Nav2 from "../components/Nav2"
import Hero from "../components/Hero"

const IndexPage = () => (
  <>
    <Seo />
    <Nav2 navigation={navigation} />
    <Hero />
    <Features />
    <Projects />
    <Download />
    <Testimonials />
    <MapWithContact />
    <Footer navigation={navigation} />
  </>
)

export default IndexPage
