import React from "react"

const TeamMember = ({ name, desc, phone, imageSrc }) => (
  <div className="grid sm:grid-cols-3">
    <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
      <img
        className="absolute object-cover w-full h-full rounded"
        src={imageSrc}
        alt={name.toString()}
      />
    </div>
    <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
      <p className="text-lg font-bold m-0">{name}</p>
      <p className="mb-4 text-xs text-gray-800">{desc}</p>
      <p className="mb-4 text-sm tracking-wide text-gray-800">{phone}</p>
    </div>
  </div>
)

export default TeamMember
