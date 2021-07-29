import React from "react"
import house1 from "../images/house1.png"
import house2 from "../images/house2.png"
import house3 from "../images/house3.png"

const Gallery = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
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
      <div className="flex flex-wrap -m-4">
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={house1}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-primary1 mb-1">
                DOMOVÉ STAVBY
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Presklenný byt
              </h1>
              <p className="leading-relaxed">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={house2}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-primary1 mb-1">
                THE SUBTITLE
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                The Catalyzer
              </h1>
              <p className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={house3}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-primary1 mb-1">
                THE SUBTITLE
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                The 400 Blows
              </h1>
              <p className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={house1}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-primary1 mb-1">
                THE SUBTITLE
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Neptune
              </h1>
              <p className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={house1}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-primary1 mb-1">
                THE SUBTITLE
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Holden Caulfield
              </h1>
              <p className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3 sm:w-1/2 p-4">
          <div className="flex relative">
            <img
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src={house1}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-primary1 mb-1">
                THE SUBTITLE
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                Alper Kamu
              </h1>
              <p className="leading-relaxed">
                Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                microdosing tousled waistcoat.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Gallery
