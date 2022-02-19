import { Dialog, Transition } from "@headlessui/react"
import React, { FC, Fragment } from "react"

type Props = {
  isOpen: boolean
  onRequestClose: () => void
}

const ContactFormDialog: FC<Props> = ({ isOpen, onRequestClose }) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={onRequestClose}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-xl rounded-md">
              <Dialog.Title
                as="h3"
                className="font-medium text-xl leading-6 text-gray-900"
              >
                Odoslanie úspešné
              </Dialog.Title>
              <div className="mt-2">
                <p className="text-md text-slate-500">
                  V najbližších dňoch vás budeme kontaktovať.
                </p>
              </div>

              <div className="mt-4">
                <button
                  onClick={onRequestClose}
                  className="text-white font-medium bg-orange-400 border-0 py-2 px-6 focus:outline-none hover:bg-orange-300 rounded-md text-base transition-colors"
                >
                  OK
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

export default ContactFormDialog
