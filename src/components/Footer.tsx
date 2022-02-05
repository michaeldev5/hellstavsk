import React, { FC } from "react"
import { SocialIcon } from "react-social-icons"
import HellstavLogo from "./HellstavLogo"
import { TNavigation } from "../types/TCommon"

const FACEBOOK =
  "https://www.facebook.com/pages/category/Construction-Company/HellStav-100723655427335/"
const INSTAGRAM = "https://www.instagram.com/hellstavsro/"

type Props = {
  navigation: TNavigation
}

const Footer: FC<Props> = ({ navigation }) => (
  <footer id="footer" className="relative z-50 pt-24">
    <div className="border-t border-b border-slate-200 py-12 sm:py-16">
      <div className="mx-auto container px-8 py-4">
        <div className="lg:flex">
          <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
            <div className="w-full lg:w-1/2 px-6">
              <ul>
                {navigation.map(link => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm leading-none hover:text-orange-400 transition-colors text-slate-700"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full lg:w-1/2 px-6">
              <ul>
                <li>
                  <a
                    href="/#"
                    className="text-sm leading-none hover:text-orange-400 transition-colors text-slate-700"
                  >
                    Kontaktujte nás od <br />
                    Po - Pi
                    <br />
                    8:00 - 20:00
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex">
            <div className="w-full lg:w-1/2 px-6">
              <ul>
                <li>
                  <a
                    href="/#"
                    className="text-sm leading-none hover:text-orange-400 text-slate-700"
                  >
                    Zásady ochrany osobných údajov
                  </a>
                </li>
                <li className="mt-6">
                  <a
                    href="/#"
                    className="text-sm leading-none hover:text-orange-400 text-slate-700"
                  >
                    Podmienky služby
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
              <div className="flex items-center mb-6 space-x-2">
                <SocialIcon
                  network="facebook"
                  url={FACEBOOK}
                  bgColor="#fb923c"
                  target="_blank"
                />
                <SocialIcon
                  network="instagram"
                  url={INSTAGRAM}
                  bgColor="#fb923c"
                  target="_blank"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="py-12 sm:py-16 flex flex-col justify-center items-center">
      <HellstavLogo className="w-36 sm:w-48" />
      <p className="mt-6 text-sm leading-none text-slate-700">
        2022 Hellstav. Všetky práva vyhradené.
      </p>
    </div>
  </footer>
)

export default Footer
