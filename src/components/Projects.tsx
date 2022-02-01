import React from "react"
import ProjectItem from "./ProjectItem"
import SectionHeader from "./SectionHeader"
import projects from "../../content/projects.json"

const Projects = () => (
  <section className="text-gray-600 body-font" id="projekty">
    <div className="container px-5 py-24 mx-auto">
      <SectionHeader
        title="Posledné projekty"
        description="V poslednej dobe sme spolupracovali na viacerých projektoch. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet mi quis eros finibus tempus nec nec ligula. Nullam eget pellentesque mauris. Nullam eget metus vel leo ornare blandit nec sit amet augue. Nunc sed magna faucibus, viverra mi ultricies, fringilla leo. Aenean iaculis fermentum arcu non tincidunt. Mauris nec aliquet eros."
      />
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
