import React from "react"
import Button from "./Button"
import Section from "./Section"

const Download = () => (
  <Section
    title="Služby"
    description="Presnejšie informácie o nami ponúkaných službách nájdete v našom CENNÍKU ktorý si môžete stiahnuť v PDF súbore, alebo požiadať o  aktuálnu cenovú ponuku cez náš kontaktný formulár."
    id="sluzby"
  >
    <Button
      label="Stiahnuť PDF"
      Icon={
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
      }
      href="/hellstavsro.pdf"
    />
  </Section>
)

export default Download
