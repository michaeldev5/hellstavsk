import * as React from "react"
import Footer from "../components/Footer"
import Gallery from "../components/Gallery"
import MapWithContact from "../components/MapWithContact"
import Nav from "../components/Nav"
import { Team } from "../components/Team"

const navigation = [
  { name: "O nás", href: "#" },
  { name: "Projekty", href: "#" },
  { name: "Služby", href: "#" },
  { name: "Recenzie", href: "#" },
]

const IndexPage = () => (
  <>
    <Nav navigation={navigation} />
    <Gallery />
    <Team />
    <MapWithContact />
    <Footer navigation={navigation} />
  </>
)

export default IndexPage
