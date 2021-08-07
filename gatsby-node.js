/* eslint-disable no-undef */
const path = require("path")
const fs = require("fs")

const projectTemplate = path.resolve(`src/templates/project.js`)

const projects = JSON.parse(fs.readFileSync("./content/projects.json"))

const PUBLIC_PATH = "public"

exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  projects.all.forEach(project => {
    const transformedImages = fs
      .readdirSync(`${PUBLIC_PATH}/${projects.imagesPath}/${project.slug}`)
      .map(image => `${projects.imagesPath}/${project.slug}/${image}`)
    createPage({
      path: `/${project.slug}`,
      component: projectTemplate,
      context: {
        project,
        images: transformedImages,
      },
    })
  })
}
