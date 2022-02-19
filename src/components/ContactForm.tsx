import React, { FormEvent, useState } from "react"
import ContactFormDialog from "./ContactFormDialog"

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    var form = document.querySelector<HTMLFormElement>("form.contact")
    if (!form) return
    const formData = new FormData(form)
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString(),
    })
      .then(() => setIsOpen(true))
      .catch(error => alert(error))
  }

  const onRequestClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <ContactFormDialog isOpen={isOpen} onRequestClose={onRequestClose} />
      <div className="container mx-auto px-8 py-14 flex">
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          onSubmit={onSubmit}
          className="contact lg:w-1/3 md:w-1/2 bg-white p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md rounded-md"
        >
          <input type="hidden" name="form-name" value="contact" />
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
              name="Meno"
              required
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
              name="Telefon"
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
              name="sluzba"
              className="rounded-md w-full bg-white border border-slate-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300 text-sm outline-none text-gray-700 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-3">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-slate-700"
            >
              Správa
            </label>
            <textarea
              id="message"
              name="sprava"
              className="rounded-md w-full bg-white border border-slate-300 focus:border-orange-300 focus:ring-2 focus:ring-orange-300 h-32 text-sm outline-none text-gray-700 px-3 py-1 resize-none leading-6 transition-colors duration-200 ease-in-out"
              required
            />
          </div>
          <button className="text-white font-medium bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-300 rounded-md text-base transition-colors">
            Odoslať
          </button>
        </form>
      </div>
    </>
  )
}

export default ContactForm
