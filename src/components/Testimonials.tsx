import React from "react"
import Testimonial from "./Testimonial"
import customer1 from "../assets/customer1.png"
import customer2 from "../assets/customer2.png"
import customer3 from "../assets/customer3.png"
import Section from "./Section"

const Testimonials = () => (
  <Section
    title="Zákazníci"
    description="Ak ste sa ešte stále nerozhodli
  či si vyberiete nás, prečítajte si 
  recenzie od našich spokojných 
  zákazníkov a zákazníčok."
    id="recenzie"
  >
    <div className="grid grid-cols-1 gap-16 md:gap-7 sm:grid-cols-2 md:grid-cols-3 pt-10">
      <Testimonial
        name="Jozef Novák, Prešov"
        content="S vykonanou prácou som bol veľmi spokojný, určite by som si Hellstav vybral znovu"
        imageSrc={customer1}
      />
      <Testimonial
        name="Arpád Fekete, Rožňava"
        content="Nemám najmenšiu sťažnosť. Bol som spokojný."
        imageSrc={customer2}
      />
      <Testimonial
        name="Ľubica Gmiterová, Bardejov"
        content="Hellstav som si vybrala prvý krát pri prerábaní svojho bytu. Rekonštrukcia prebehla nad moje očakávania aj vďaka užitočným radám."
        imageSrc={customer3}
      />
    </div>
  </Section>
)

export default Testimonials
