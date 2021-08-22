import React, { FC } from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css" // requires a loader

type Props = {
  images: string[]
}

const CarouselWrapper: FC<Props> = ({ images }) => (
  <div className="container mx-auto max-w-sm p-4">
    <Carousel showStatus={false} infiniteLoop={true}>
      {images.map(image => (
        <div>
          <img src={image} alt="" />
        </div>
      ))}
    </Carousel>
  </div>
)

export default CarouselWrapper
