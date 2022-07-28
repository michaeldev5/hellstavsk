import React, { FC } from "react"
import { TNavigation } from "../types/TCommon"
import HellstavLogo from "./HellstavLogo"
import MobileMenuPopover from "./MobileMenuPopover"

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
          <button className="px-6 py-2 bg-orang hover:bg-orange-500 transition-colors rounded-md text-white font-semibold">
            Ozvite sa nám
          </button>
        </a>
      </div>
      <div className="md:hidden">
        <MobileMenuPopover navigation={navigation}/>
      </div>
    </div>
  </header>
)

export default Nav2
