import React from "react"
import SectionHeader from "./SectionHeader"
import TeamMember from "./TeamMember"

const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <SectionHeader
        title="Náš tím"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante laoreet, gravida turpis nec, porta erat. Sed feugiat neque vel maximus tristique. Quisque iaculis turpis ut elit pretium, non porta augue faucibus. 
        "
      />
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

export default Team
