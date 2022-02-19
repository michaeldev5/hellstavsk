import React from "react"
import ContactForm from "./ContactForm"

const MapWithContact = () => (
  <section className="relative" id="kontakt">
    <div className="absolute inset-0 bg-slate-300">
      <iframe
        style={{ filter: "grayscale(1) opacity(1)" }}
        marginHeight={0}
        marginWidth={0}
        title="map"
        scrolling="no"
        src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Vy%C5%A1n%C3%A1%20vo%C4%BEa%20108&ie=UTF8&t=&z=14&iwloc=B&output=embed"
        width="100%"
        height="100%"
        frameBorder={0}
      />
    </div>
    <ContactForm />
  </section>
)

export default MapWithContact
