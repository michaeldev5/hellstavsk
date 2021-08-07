import React from "react"
import ProjectItem from "./ProjectItem"
import SectionHeader from "./SectionHeader"
import projects from "../../content/projects.json"

const Projects = () => (
  <section className="text-gray-600 body-font" id="projekty">
    <div className="container px-5 py-24 mx-auto">
      <SectionHeader
        title="Posledné projekty"
        description="Proin risus erat, volutpat hendrerit nibh vel, finibus venenatis urna. Integer vulputate turpis sed mauris euismod vestibulum. Etiam lacinia eleifend ante nec eleifend. Sed id arcu ac eros consectetur maximus. Nam hendrerit turpis nec convallis scelerisque."
      />
      <div className="flex flex-wrap -m-4">
        {projects.all.map(project => (
          <ProjectItem project={project} imagesPath={projects.imagesPath} />
        ))}
      </div>
    </div>
  </section>
)

export default Projects
