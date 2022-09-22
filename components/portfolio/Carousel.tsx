import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

import { cards } from './data'
import Card from './Card'

const Carousel = () => {
  const [ slideNumber, setSlideNumber ] = useState(0)

  const cycleLeft = () => {
    setSlideNumber(slideNumber === 0 ? cards.length - 1 : slideNumber - 1)
  }
  const cycleRight = () => {
    setSlideNumber(slideNumber === cards.length - 1 ? 0 : slideNumber + 1)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => cycleRight(),
    onSwipedRight: () => cycleLeft()
  })

  return (
    <div { ...handlers } className="carousel carousel-vertical w-full h-full">
      {
        cards.map((card, idx) => {
          return (
            <div key={idx} className="carousel-item w-full h-full">
              <div className="w-full h-full">
                <Card
                  key={idx}
                  idx={idx}
                  body={card.body}
                  img={card.img}
                  subtitle={card.subtitle}
                  techs={card.techs}
                  title={card.title}
                  url={card.url}
                  whoWith={card.whoWith}
                />
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default Carousel