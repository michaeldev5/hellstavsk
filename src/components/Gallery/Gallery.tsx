import React, { ReactNode } from "react"
import { FC } from "react"

type Props = {
  children: ReactNode
}

const Gallery: FC<Props> = ({ children }) => (
  <div className="container mx-auto">
    <div className="flex flex-wrap">{children}</div>
  </div>
)

export default Gallery
