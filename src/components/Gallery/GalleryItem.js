import React from "react"

const GalleryItem = ({ imageSrc }) => (
  <div className="px-2 flex-grow md:flex-1/2 md:max-w-1/2 lg:flex-1/4 lg:max-w-1/4">
    <a href={imageSrc}>
      <img alt="gallery" className="mt-4 mb-0 w-full" src={imageSrc} />
    </a>
  </div>
)

export default GalleryItem
