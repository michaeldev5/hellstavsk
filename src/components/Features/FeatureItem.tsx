import React, { ReactNode } from "react"

type Props = {
  title: string
  content: string
  icon: ReactNode
}

const FeatureItem = ({ title, content, icon }) => (
  <div className="xl:w-1/3 md:w-1/2 p-4">
    <div className="border border-gray-200 p-6 rounded-lg">
      <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-primary1light text-primary1 mb-4">
        {icon}
      </div>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
        {title}
      </h2>
      <p className="leading-relaxed text-base">{content}</p>
    </div>
  </div>
)

export default FeatureItem
