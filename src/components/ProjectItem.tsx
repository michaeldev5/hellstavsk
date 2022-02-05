import React from "react"
import { FC } from "react"
import { TProject } from "../types/TProject"

type Props = {
  project: TProject
  imagesPath: string
}

const ProjectItem: FC<Props> = ({
  project: { name, slug, subtitle, mainImg },
  imagesPath,
}) => (
  <a
    href={`/${slug}`}
    className="flex flex-col group rounded-md overflow-hidden"
  >
    <img
      alt="gallery"
      className="w-full h-full object-cover object-center aspect-video"
      src={`/${imagesPath}/${slug}/${mainImg}`}
    />
    <div className="p-5 pl-0 group-hover:p-5 group-hover:bg-orange-400 group-hover:text-white transition-all flex justify-between">
      <div>
        <h3 className="font-semibold text-xl mb-2">{subtitle}</h3>
        <h3 className="uppercase font-bold text-xs tracking-widest">
          <span className="font-normal uppercase">poloha </span>
          {name}
        </h3>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-white"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M14 5l7 7m0 0l-7 7m7-7H3"
        />
      </svg>
    </div>
  </a>
)

export default ProjectItem
