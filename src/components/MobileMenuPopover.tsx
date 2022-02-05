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
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
          <nav
            className="relative flex items-center justify-between sm:h-10 lg:justify-start"
            aria-label="Global"
          >
            <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="/">
                  <span className="sr-only">Workflow</span>
                  <HellstavLogo width={120} />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <Popover.Button className="bg-white p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-300">
                    <span className="sr-only">Open main menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
            </div>
            <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
              {navigation.map(item => (
                <a
                  key={item.name}
                  href={item.href}
                  className="font-medium text-gray-500 hover:text-gray-900"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#kontakt"
                className="font-medium text-orange-400 hover:text-orange-300"
              >
                Ozvite sa nám!
              </a>
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
