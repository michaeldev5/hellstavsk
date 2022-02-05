import React, { FC } from "react"

type Props = {
  name: string
  content: string
  imageSrc: string
}

const Testimonial: FC<Props> = ({ name, content, imageSrc }) => (
  <div className="flex justify-center px-5 py-5">
    <div className="w-full mx-auto max-w-xl bg-white hover:shadow-lg transition-all rounded-md p-6 text-slate-700">
      <div className="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
        <a href="/#" className="block relative">
          <img
            alt="profil"
            src={imageSrc}
            className="mx-auto rounded-full border-2 border-orange-400 object-cover h-20 w-20 "
          />
        </a>
      </div>
      <div className="w-full mb-8">
        <div className="text-4xl text-orange-400 text-left leading-tight h-3">
          “
        </div>
        <p className="text-sm text-slate-700 text-center px-5 m-0">{content}</p>
        <div className="text-4xl text-orange-400 text-right leading-tight h-3">
          ”
        </div>
      </div>
      <div className="w-full">
        <p className="text-sm text-slate-700 font-semibold text-center m-0">
          {name}
        </p>
      </div>
    </div>
  </div>
)

export default Testimonial
