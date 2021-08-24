import React from "react"
import ProjectItem from "./ProjectItem"
import SectionHeader from "./SectionHeader"
import projects from "../../content/projects.json"

const Projects = () => (
  <section className="text-gray-600 body-font" id="projekty">
    <div className="container px-5 py-24 mx-auto">
      <SectionHeader title="Posledné projekty" />
      <div className="flex flex-wrap -m-4">
        {projects.all.map(project => (
          <ProjectItem
            key={project.name}
            project={project}
            imagesPath={projects.imagesPath}
          />
        ))}
      </div>
    </div>
  </section>
)

export default Projects
