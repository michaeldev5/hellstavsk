import React from "react"
import ProjectItem from "./ProjectItem"
import projects from "../../content/projects.json"
import Section from "./Section"

const Projects = () => (
  <Section
    title="Posledné projekty"
    description="Naši odborníci vám okrem konzultácie predstavia aj konkrétny plán realizácie. Niektoré z našich projektov si môžete pozrieť priamo na tejto stránke."
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
