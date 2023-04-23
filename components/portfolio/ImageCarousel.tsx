import React, { useState } from 'react';
import Image from 'next/image'

import { useSwipeable } from 'react-swipeable';
import { StaticImageData } from 'next/image'


const ImageCarousel = ({ images }: { images: StaticImageData[] }) => {
  const [ slideNumber, setSlideNumber ] = useState(0);

  const cycleLeft = (e) => {
    console.log(e)
    setSlideNumber(slideNumber === 0 ? images.length - 1 : slideNumber - 1);
  }
  const cycleRight = (e) => {
    console.log(e)
    setSlideNumber(slideNumber === images.length - 1 ? 0 : slideNumber + 1);
  }

  const handlers = useSwipeable({
    onSwipedLeft: (e) => cycleRight(e),
    onSwipedRight: (e) => cycleLeft(e),
  })

  return (
    <div { ...handlers } className="overflow-hidden">
      <div
        className="whitespace-nowrap transition-transform duration-500"
        style={{ transform: `translateX(-${slideNumber * 100}%)`}}  
      >
        {
          images.map((image, idx) => {
            return (
              <div key={idx} className="inline-flex">
                <div className="rounded-xl overflow-hidden">
                  <Image
                    src={image}
                    quality={100}
                    // width={height * ratio}
                    // height={height}
                    priority={true}
                  />
                </div>
              </div>
            )
          })
        }
      </div>
      {
        images.length > 1 && (
          <div className="sm:visible invisible fixed flex justify-between left-5 right-5 top-2/4 -translate-y-32">
            <button className="btn btn-circle bg-secondary border-white" onClick={cycleLeft}>(</button> 
            <button className="btn btn-circle bg-secondary border-white" onClick={cycleRight}>)</button>
          </div>
        )
      }
    </div>
  )
}

export default ImageCarousel