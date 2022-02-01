import React, { FC } from "react"

type Props = {
  name: string
  content: string
  imageSrc: string
}

const Testimonial: FC<Props> = ({ name, content, imageSrc }) => (
  <div className="flex justify-center px-5 py-5">
    <div className="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
      <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
        <a href="/#" className="block relative">
          <img
            alt="profil"
            src={imageSrc}
            className="mx-auto object-cover rounded-full h-20 w-20 "
          />
        </a>
      </div>
      <div className="w-full mb-10">
        <div className="text-3xl text-orange-400 text-left leading-tight h-3">
          “
        </div>
        <p className="text-sm text-gray-600 dark:text-gray-100 text-center px-5 m-0">
          {content}
        </p>
        <div className="text-3xl text-orange-400 text-right leading-tight h-3">
          ”
        </div>
      </div>
      <div className="w-full">
        <p className="text-md text-orange-400 font-bold text-center m-0">
          {name}
        </p>
      </div>
    </div>
  </div>
)

export default Testimonial
