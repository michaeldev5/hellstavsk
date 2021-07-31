import React from "react"
import Testimonial from "./Testimonial"
import customer1 from "../assets/customer1.png"
import customer2 from "../assets/customer2.png"
import customer3 from "../assets/customer3.png"
import SectionHeader from "./SectionHeader"

const Testimonials = () => (
  <div className="px-4">
    <SectionHeader
      title="Zákazníci"
      description="Proin risus erat, volutpat hendrerit nibh vel, finibus venenatis urna. Integer vulputate turpis sed mauris euismod vestibulum. Etiam lacinia eleifend ante nec eleifend. Sed id arcu ac eros consectetur maximus. Nam hendrerit turpis nec convallis scelerisque."
    />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 py-8">
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
  </div>
)

export default Testimonials
