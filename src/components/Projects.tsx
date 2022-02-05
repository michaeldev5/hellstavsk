import React from "react"
import ProjectItem from "./ProjectItem"
import projects from "../../content/projects.json"
import Section from "./Section"

const Projects = () => (
  <Section
    title="Posledné projekty"
    description="V poslednej dobe sme spolupracovali na viacerých projektoch. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet mi quis eros finibus tempus nec nec ligula. Nullam eget pellentesque mauris."
    id="posledne-projekty"
  >
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
      {projects.all.map(project => (
        <ProjectItem
          key={project.name}
          project={project}
          imagesPath={projects.imagesPath}
        />
      ))}
    </div>
  </Section>
)

export default Projects
