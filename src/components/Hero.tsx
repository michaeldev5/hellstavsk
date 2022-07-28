import React from "react"
import Crane from "./../assets/svg/crane.svg"

const Hero = () => (
  <div className="container mx-auto px-8 md:px-14 lg:px-24 py-8 pt-0 lg:pt-0">
    <div className="flex flex-col lg:flex-row items-start lg:items-center">
      <div className="w-full lg:w-1/2 pb-12 lg:pr-6">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl flex-1">
          Moderné
          <br /> <span className="text-orange-400">Kreatívne riešenia.</span>
        </h1>
        <h2 className="my-4 text-lg sm:text-xl text-slate-700 sm:max-w-xl">
          Ponúkame kvalitné murárske práce a stavebnú činnosť so zodpovedným
          prístupom.
        </h2>
        <a
          href="#posledne-projekty"
          className="flex sm:inline-flex items-center justify-center px-8 py-3 rounded-md text-base font-medium text-white bg-orang hover:bg-orange-300 md:py-4 md:text-lg md:px-10"
        >
          Naše projekty
        </a>
      </div>
      <div className="pr-8 w-full sm:w-9/12 lg:w-1/2">
        <Crane />
      </div>
    </div>
  </div>
)

export default Hero
