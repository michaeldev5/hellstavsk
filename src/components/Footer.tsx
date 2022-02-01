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
  <div className="pt-12">
    <footer id="footer" className="relative z-50 dark:bg-gray-900 pt-24">
      <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
        <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
          <div className="lg:flex">
            <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
              <div className="w-full lg:w-1/2 px-6">
                <ul>
                  {navigation.map(link => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
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
                      className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
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
                      className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                    >
                      Zásady ochrany osobných údajov
                    </a>
                  </li>
                  <li className="mt-6">
                    <a
                      href="/#"
                      className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
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
      <div className="py-16 flex flex-col justify-center items-center">
        <HellstavLogo width={200} />
        <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
          2022 Hellstav. Všetky práva vyhradené.
        </p>
      </div>
    </footer>
  </div>
)

export default Footer
