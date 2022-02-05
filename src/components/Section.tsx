import React, { FC } from "react"
import SectionHeader from "./SectionHeader"

type Props = {
  title: string
  description: string
  id: string
}

const Section: FC<Props> = ({ children, title, description, id }) => (
  <section
    id={id}
    className="container mx-auto px-8 md:px-14 lg:px-24 py-8 sm:py-16"
  >
    <SectionHeader title={title} description={description} />
    {children}
  </section>
)

export default Section
