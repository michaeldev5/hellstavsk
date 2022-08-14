import React from "react"
import { FC } from "react"

type Props = {
  name: string
  desc: string
  phone: string
  imageSrc?: string
  enableAvatar?: boolean
}

const TeamMember: FC<Props> = ({ name, desc, phone, imageSrc, enableAvatar = false }) => (
  <div className="grid grid-cols-3">
    <div className="relative aspect-[2/3] shadow">
      {enableAvatar ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="absolute object-cover w-full h-full rounded-md" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
        </svg>
      ) : (
        <img
          className="absolute object-cover w-full h-full rounded-md"
          src={imageSrc}
          alt={name}
        />
      )}
    </div>
    <div className="flex flex-col mt-3 pl-5 col-span-2">
      <p className="text-lg font-bold m-0 lg:w-2">{name}</p>
      <p className="mb-4 text-xs text-slate-700 uppercase">{desc}</p>
      <p className="mb-4 text-sm tracking-wide text-slate-700">{phone}</p>
    </div>
  </div>
)

export default TeamMember
