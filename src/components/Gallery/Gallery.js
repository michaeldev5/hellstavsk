import React from "react"

const Gallery = ({ children }) => (
  <div className="container mx-auto">
    <div class="flex flex-wrap">{children}</div>
  </div>
)

export default Gallery
