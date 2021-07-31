import React from "react"

const Testimonial = ({ name, content, imageSrc }) => (
  <div class="flex justify-center px-5 py-5">
    <div class="w-full mx-auto max-w-xl rounded-lg bg-white dark:bg-gray-800 shadow-lg px-5 pt-5 pb-10 text-gray-800 dark:text-gray-50">
      <div class="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
        <a href="#" class="block relative">
          <img
            alt="profil"
            src={imageSrc}
            class="mx-auto object-cover rounded-full h-20 w-20 "
          />
        </a>
      </div>
      <div class="w-full mb-10">
        <div class="text-3xl text-primary1 text-left leading-tight h-3">“</div>
        <p class="text-sm text-gray-600 dark:text-gray-100 text-center px-5 m-0">
          {content}
        </p>
        <div class="text-3xl text-primary1 text-right leading-tight h-3">”</div>
      </div>
      <div class="w-full">
        <p class="text-md text-primary1 font-bold text-center m-0">{name}</p>
      </div>
    </div>
  </div>
)

export default Testimonial
