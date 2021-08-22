import React from "react"
import Nav from "../components/Nav"
import navigation from "../navigation"
import Footer from "../components/Footer"
import Carousel from "../components/Carousel"

const ProjectPage = ({
  pageContext: {
    images,
    project: { name, subtitle, desc },
  },
}) => {
  return (
    <>
      <Nav navigation={navigation} />
      <div className="container mx-auto px-4">
        <h1>{name}</h1>
        <h3>{subtitle}</h3>
        <p>{desc}</p>
      </div>
      <Carousel images={images} />
      <Footer navigation={navigation} />
    </>
  )
}

export default ProjectPage
