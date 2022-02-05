import React, { FC, ReactNode } from "react"

type Props = {
  title: string
  content: string
  icon: ReactNode
}

const FeatureItem: FC<Props> = ({ title, content, icon }) => (
  <div className="xl:w-1/3 md:w-1/2 p-3">
    <div className="bg-white rounded-md p-5 transition-all hover:shadow-lg">
      <div className="h-9 inline-flex items-center justify-center text-orange-400 mb-2">
        {icon}
      </div>
      <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
        {title}
      </h2>
      <p className="leading-relaxed text-sm text-slate-700">{content}</p>
    </div>
  </div>
)

export default FeatureItem
