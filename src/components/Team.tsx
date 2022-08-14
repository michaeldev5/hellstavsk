import React from "react"
import Section from "./Section"
import TeamMember from "./TeamMember"

const Team = () => (
  <Section
    id="tim"
    title="Náš tím"
    description="Hellstav s.r.o. je rodinná firma troch bratov, ktorí sa stavebnej činnosti venujú už viac ako 20 rokov. Môžete sa spoľahnúť, že Vám nielenže poskytnú dobré rady, ale taktiež splnia Vaše vízie."
  >
    <div className="grid gap-10 mx-auto lg:grid-cols-2">
      <TeamMember
        name="Stanislav Helmanovský"
        desc="Spolumajiteľ"
        phone="0907278857"
        imageSrc="team/stano.jpg"
      />
      <TeamMember
        name="Vladimír Helmanovský"
        desc="Spolumajiteľ"
        phone="0910144856"
        imageSrc="team/vlado.jpg"
      />
      <TeamMember
        name="Ján Helmanovský"
        desc="Spolumajiteľ"
        phone="0911846157"
        imageSrc="team/jan.jpg"
      />
      <TeamMember
        name="Jakub Helmanovský"
        desc="Spolumajiteľ"
        phone="0911846157"
        enableAvatar
      />
    </div>
  </Section>
)

export default Team
