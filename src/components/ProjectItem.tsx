import React from "react"
import { FC } from "react"
import { TProject } from "../types/TProject"

type Props = {
  project: TProject
  imagesPath: string
}

const ProjectItem: FC<Props> = ({
  project: { name, slug, subtitle, desc, mainImg },
  imagesPath,
}) => (
  <div className="lg:w-1/3 sm:w-1/2 p-4">
    <a href={`/${slug}`} className="flex relative">
      <img
        alt="gallery"
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={`/${imagesPath}/${slug}/${mainImg}`}
      />
      <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 transition-all">
        <h2 className="tracking-widest text-sm title-font font-medium text-primary1 mb-1">
          {name}
        </h2>
        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
          {subtitle}
        </h1>
        <p className="leading-relaxed mb-20">{desc}</p>
      </div>
    </a>
  </div>
)

export default ProjectItem