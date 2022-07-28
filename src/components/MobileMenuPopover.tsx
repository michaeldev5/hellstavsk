import React, { FC, Fragment } from "react"
import { Popover, Transition } from "@headlessui/react"
import { TNavigation } from "../types/TCommon"
import HellstavLogo from "./HellstavLogo"
import { MenuIcon, XIcon } from "@heroicons/react/outline"

type Props = {
  navigation: TNavigation
}

const MobileMenuPopover: FC<Props> = ({ navigation }) => (
  <Popover>
    {({ open }) => (
      <>
        <div className="relative">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-300">
                    <span className="sr-only">Open main menu</span>
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
                  </Popover.Button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <Transition
          show={open}
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            static
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
          >
            <div className="shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div>
                  <HellstavLogo width={80} />
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-300">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <a
                href="#kontakt"
                className="block w-full px-5 py-3 text-center font-medium text-orange-400 bg-gray-50 hover:bg-gray-100"
              >
                Ozvite sa nám!
              </a>
            </div>
          </Popover.Panel>
        </Transition>
      </>
    )}
  </Popover>
)

export default MobileMenuPopover
