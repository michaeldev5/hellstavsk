import React from "react"
import Nav from "../components/Nav"
import navigation from "../navigation"
import Gallery from "../components/Gallery/Gallery"
import GalleryItem from "../components/Gallery/GalleryItem"
import Footer from "../components/Footer"

const ProjectPage = ({
  pageContext: {
    images,
    project: { name, subtitle, desc },
  },
}) => {
  return (
    <>
      <Nav navigation={navigation} />
      <div className="container mx-auto px-2">
        <h1>{name}</h1>
        <h3>{subtitle}</h3>
        <p>{desc}</p>
      </div>
      <Gallery>
        {images.map(image => (
          <GalleryItem imageSrc={image} />
        ))}
      </Gallery>
      <Footer navigation={navigation} />
    </>
  )
}

export default ProjectPage
