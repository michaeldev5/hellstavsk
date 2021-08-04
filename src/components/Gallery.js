import React from "react"
import zlate from "../images/gallery/zlate.jpg"
import richvald from "../images/gallery/richvald.jpg"
import heppenheim from "../images/gallery/heppenheim.jpg"
import hazlin from "../images/gallery/hazlin.jpg"
import fribourg from "../images/gallery/fribourg.jpg"
import GalleryItem from "./GalleryItem"
import SectionHeader from "./SectionHeader"

const Gallery = () => (
  <section className="text-gray-600 body-font" id="projekty">
    <div className="container px-5 py-24 mx-auto">
      <SectionHeader
        title="Posledné projekty"
        description="Proin risus erat, volutpat hendrerit nibh vel, finibus venenatis urna. Integer vulputate turpis sed mauris euismod vestibulum. Etiam lacinia eleifend ante nec eleifend. Sed id arcu ac eros consectetur maximus. Nam hendrerit turpis nec convallis scelerisque."
      />
      <div className="flex flex-wrap -m-4">
        <GalleryItem
          imageSrc={zlate}
          title="Zlaté"
          subtitle="Rodinný dom"
          desc="Popis"
        />
        <GalleryItem
          imageSrc={richvald}
          title="Richvald"
          subtitle="Rodinný dom s podkrovím"
          desc="Popis"
        />
        <GalleryItem
          imageSrc={heppenheim}
          title="Heppenheim"
          subtitle="Omietnutie garáže"
          desc="Popis"
        />
        <GalleryItem
          imageSrc={hazlin}
          title="Hažlín"
          subtitle="Rodinný dvojpodlažný dom"
          desc="Popis"
        />
        <GalleryItem
          imageSrc={fribourg}
          title="Fribourg"
          subtitle="Historické podkrovné izby"
          desc="Popis"
        />
      </div>
    </div>
  </section>
)

export default Gallery
