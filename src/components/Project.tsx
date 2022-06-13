import React, { FC } from "react"
import { TProject } from "../types/TProject"
import ImageGallery from "react-image-gallery"
import { LocationMarkerIcon } from "@heroicons/react/solid"

type Props = {
  project: TProject
  images: string[]
}

const Project: FC<Props> = ({ project: { subtitle, name, desc }, images }) => (
  <div className="container mx-auto px-8 md:px-14 lg:px-24 py-8 pt-0 lg:pt-0">
    <div className="flex flex-col lg:flex-row">
      <div className="pt-8 pb-12 pr-12 flex flex-col flex-1 justify-center">
        <h1 className="text-5xl font-semibold pb-4">{subtitle}</h1>
        <div className="flex items-center pb-4">
          <LocationMarkerIcon width={24} />
          <h1 className="text-2xl pl-1">{name}</h1>
        </div>
        <p className="text-lg text-slate-700">{desc}</p>
      </div>
      <ImageGallery
        items={images.map(image => ({
          original: image,
          thumbnail: image,
        }))}
        showPlayButton={false}
        additionalClass="flex-1"
      />
    </div>
  </div>
)

export default Project
