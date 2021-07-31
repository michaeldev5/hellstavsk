import React from "react"
import TeamMember from "./TeamMember"

export const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col text-center w-full mb-18">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Náš tím
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom.
        </p>
      </div>
      <div className="grid gap-10 mx-auto lg:grid-cols-3">
        <TeamMember
          name="Stanislav Helmanovský"
          desc="Product Manager"
          phone="0907278857"
          imageSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
        />
        <TeamMember
          name="Vladimír Helmanovský"
          desc="Design Team"
          phone="0910144856"
          imageSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
        />
        <TeamMember
          name="Ján Helmanovský"
          desc="Human resources"
          phone="0911846157"
          imageSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
        />
      </div>
    </div>
  )
}
