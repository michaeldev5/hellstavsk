import React from "react"

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
    <div className="container mx-auto px-8 py-14 flex">
      <div className="lg:w-1/3 md:w-1/2 bg-white p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md rounded-md">
        <h2 className="text-slate-900 text-lg mb-1 font-medium title-font">
          KONTAKTNÝ FORMULÁR
        </h2>
        <p className="leading-relaxed mb-4 text-slate-700">
          V prípade akýchkoľvek otázok nás neváhajte kontaktovať
        </p>
        <div className="relative mb-3">
          <label htmlFor="email" className="leading-7 text-sm text-slate-700">
            Meno
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="rounded-md w-full bg-white border border-slate-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300 text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-3">
          <label htmlFor="email" className="leading-7 text-sm text-slate-700">
            Telefónne číslo
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="rounded-md w-full bg-white border border-slate-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300 text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-3">
          <label htmlFor="email" className="leading-7 text-sm text-slate-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="rounded-md w-full bg-white border border-slate-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300 text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-3">
          <label htmlFor="email" className="leading-7 text-sm text-slate-700">
            Služba
          </label>
          <input
            type="text"
            id="service"
            name="service"
            className="rounded-md w-full bg-white border border-slate-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300 text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-3">
          <label htmlFor="message" className="leading-7 text-sm text-slate-700">
            Správa
          </label>
          <textarea
            id="message"
            name="message"
            className="rounded-md w-full bg-white border border-slate-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300 h-32 text-sm outline-none text-gray-700 px-3 py-1 resize-none leading-6 transition-colors duration-200 ease-in-out"
            defaultValue={""}
          />
        </div>
        <button className="text-white font-medium bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-300 rounded-md text-base transition-colors">
          Odoslať
        </button>
      </div>
    </div>
  </section>
)

export default MapWithContact
