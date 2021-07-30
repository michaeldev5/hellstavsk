import React from "react"

export const Team = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col text-center w-full mb-18">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Posledné projekty
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
          Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
          gentrify, subway tile poke farm-to-table. Franzen you probably haven't
          heard of them man bun deep jianbing selfies heirloom.
        </p>
      </div>
      <div className="grid gap-10 mx-auto lg:grid-cols-3">
        <div className="grid sm:grid-cols-3">
          <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
            <p className="text-lg font-bold m-0">Stanislav Helmanovský</p>
            <p className="mb-4 text-xs text-gray-800">Product Manager</p>
            <p className="mb-4 text-sm tracking-wide text-gray-800">
              0907278857
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3">
          <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
            <p className="text-lg font-bold m-0">Vladimír Helmanovský</p>
            <p className="mb-4 text-xs text-gray-800">Design Team Service</p>
            <p className="mb-4 text-sm tracking-wide text-gray-800">
              0910144856
            </p>
          </div>
        </div>
        <div className="grid sm:grid-cols-3">
          <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
            <img
              className="absolute object-cover w-full h-full rounded"
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
              alt="Person"
            />
          </div>
          <div className="flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
            <p className="text-lg font-bold m-0">
              Ján
              <br /> Helmanovský
            </p>
            <p className="mb-4 text-xs text-gray-800">Human Resources</p>
            <p className="mb-4 text-sm tracking-wide text-gray-800">
              0911846157
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
