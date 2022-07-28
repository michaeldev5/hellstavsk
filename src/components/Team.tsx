import React from "react"
import Section from "./Section"
import TeamMember from "./TeamMember"

const Team = () => (
  <Section
    id="tim"
    title="Náš tím"
    description="Hellstav s.r.o. pozostáva z troch bratov, ktorí sa stavebnej činnosti venujú už viac ako 20 rokov. Môžete sa spoľahnúť, že vám okrém dobrých rád splnia vaše vízie."
  >
    <div className="grid gap-10 mx-auto lg:grid-cols-3">
      <TeamMember
        name="Stanislav Helmanovský"
        desc="Spolumajiteľ"
        phone="0907278857"
        imageSrc="https://www.pinpng.com/pngs/m/341-3415688_no-avatar-png-transparent-png.png"
      />
      <TeamMember
        name="Vladimír Helmanovský"
        desc="Spolumajiteľ"
        phone="0910144856"
        imageSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
      />
      <TeamMember
        name="Ján Helmanovský"
        desc="Brigádnik"
        phone="0911846157"
        imageSrc="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
      />
    </div>
  </Section>
)

export default Team
