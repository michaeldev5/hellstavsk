import React, { FC } from "react"
import { TNavigation } from "../types/TCommon"
import HellstavLogo from "./HellstavLogo"

type Props = {
  navigation: TNavigation
}

const Nav2: FC<Props> = ({ navigation }) => (
  <header className="pt-8 pb-8 md:pb-14">
    <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <a href="/">
        <HellstavLogo className="w-32 relative bottom-3" />
      </a>
      <div className="hidden md:flex space-x-12 items-center">
        {navigation.map(({ href, name }, index) => (
          <a
            key={index}
            href={href}
            className="text-slate-700 transition-colors hover:text-orange-400 font-medium"
          >
            {name}
          </a>
        ))}
        <a href="#kontakt">
          <button className="px-6 py-2 bg-orange-400 hover:bg-orange-500 transition-colors rounded-md text-white font-semibold">
            Ozvite sa nám
          </button>
        </a>
      </div>
      <div className="md:hidden">
        <svg
          width="26"
          height="18"
          viewBox="0 0 26 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
            fill="black"
          ></path>
        </svg>
      </div>
    </div>
  </header>
)

export default Nav2
