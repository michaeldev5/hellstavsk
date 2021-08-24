import React, { FC, ReactNode } from "react"

type Props = {
  title: string
  content: string
  icon: ReactNode
}

const FeatureItem: FC<Props> = ({ title, content, icon }) => (
  <div className="xl:w-1/3 md:w-1/2 p-3">
    <div className="border border-gray-200 p-5 rounded-lg hover:shadow-lg transition-all">
      <div className="w-9 h-9 inline-flex items-center justify-center rounded-full bg-primary1light text-primary1 mb-4">
        {icon}
      </div>
      <h2 className="text-base text-gray-900 font-medium title-font mb-2">
        {title}
      </h2>
      <p className="leading-relaxed text-sm">{content}</p>
    </div>
  </div>
)

export default FeatureItem
