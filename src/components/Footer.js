import React, { useState } from "react"
import { SocialIcon } from "react-social-icons"
import HellstavLogo from "./HellstavLogo"

const Footer = ({ navigation }) => {
  const [mode, setMode] = useState("auto")
  return (
    <div className="pt-12">
      <footer id="footer" className="relative z-50 dark:bg-gray-900 pt-24">
        <div className=" border-t border-b border-gray-200 dark:border-gray-700 py-16">
          <div className="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div className="lg:flex">
              <div className="w-full lg:w-1/2 mb-16 lg:mb-0 flex">
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    {navigation.map(link => (
                      <li>
                        <a href={link.href}>
                          <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                            {link.name}
                          </a>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6">
                  <ul>
                    <li>
                      <a href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Kontaktujte nás od <br />
                          Po - Pi
                          <br />
                          8:00 - 20:00
                        </a>
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
                        href="javascript:void(0)"
                        className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50"
                      >
                        Zásady ochrany osobných údajov
                      </a>
                    </li>
                    <li className="mt-6">
                      <a href="javascript:void(0)">
                        <a className="text-xs lg:text-sm leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">
                          Podmienky služby
                        </a>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-1/2 px-6 flex flex-col justify-between">
                  <div className="flex items-center mb-6 space-x-2">
                    <SocialIcon network="facebook" url="#" bgColor="#f6871f" />
                    <SocialIcon network="instagram" url="#" bgColor="#f6871f" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="py-16 flex flex-col justify-center items-center">
          <HellstavLogo width={200} />
          <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">
            2021 Hellstav. Všetky práva vyhradené.
          </p>
        </div>
      </footer>
    </div>
  )
}
export default Footer
