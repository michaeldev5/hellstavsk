import * as React from "react"
import Download from "../components/Download"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import MapWithContact from "../components/MapWithContact"
import Nav from "../components/Nav"
import { Team } from "../components/Team"
import Testimonials from "../components/Testimonials"

const navigation = [
  { name: "O nás", href: "#o-nas" },
  { name: "Projekty", href: "#projekty" },
  { name: "Služby", href: "#sluzby" },
  { name: "Recenzie", href: "#recenzie" },
]

const IndexPage = () => (
  <>
    <Nav navigation={navigation} />
    <Gallery />
    <Team />
    <Testimonials />
    <Download />
    <MapWithContact />
    <Footer navigation={navigation} />
  </>
)

export default IndexPage
