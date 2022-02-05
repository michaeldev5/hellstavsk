import React from "react"
import { FC } from "react"

type Props = {
  title: string
  description: string
}

const SectionHeader: FC<Props> = ({ title, description }) => (
  <div className="flex flex-col w-full">
    <h1 className="text-slate-900 text-2xl sm:text-4xl font-bold title-font">
      {title}
    </h1>
    {description && (
      <p className="text-slate-700 max-w-3xl text-base sm:text-lg my-4 sm:my-6">
        {description}
      </p>
    )}
  </div>
)

export default SectionHeader
