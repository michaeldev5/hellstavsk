import React, { FC } from "react"
import navigation from "../navigation"
import Footer from "../components/Footer"
import { TProject } from "../types/TProject"
import Nav2 from "../components/Nav2"
import Project from "../components/Project"
import "react-image-gallery/styles/css/image-gallery.css"

type Props = {
  pageContext: {
    images: string[]
    project: TProject
  }
}

const ProjectPage: FC<Props> = ({ pageContext: { images, project } }) => {
  return (
    <>
      <Nav2 navigation={navigation} />
      <Project project={project} images={images} />
      <Footer navigation={navigation} />
    </>
  )
}

export default ProjectPage
