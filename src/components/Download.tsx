import React from "react"
import SectionHeader from "./SectionHeader"
import Button from "./Button"

const Download = () => (
  <div className="text-center mb-12 v" id="sluzby">
    <SectionHeader
      title="Služby"
      description="Presnejšie informácie o nami ponúkaných službách nájdete v našom CENNÍKU ktorý si môžete stiahnuť v PDF súbore, alebo požiadať o  aktuálnu cenovú ponuku cez náš kontaktný formulár."
    />
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
  </div>
)

export default Download
