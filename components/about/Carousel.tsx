import React from 'react'
import { HeroSideground } from './Hero'
import physics1Gif from '../../assets/gifs/physics1.gif'
import physics2Gif from '../../assets/gifs/physics2.gif'
import physics3Gif from '../../assets/gifs/physics3.gif'

const SLIDES = [
  {
    body: "First-principles thinking is the nucleus of comprehensive general solutions",
    icon: physics1Gif,
    title: "Solving Problems",
  },
  {
    body: "Knowledge-mining is a direct outcome of seeking general solutions",
    icon: physics2Gif,
    title: "Discovering Truths",
  },
  {
    body: "Ambition and curiosity lead to the expansion of knowledge boundaries",
    icon: physics3Gif,
    title: "Broadening Horizons",
  },
]

const Carousel = () => {
  const renderCarousels = () => {
    return SLIDES.map((slide, idx) => {
      return (
        <div key={idx} id={`item${idx}`} className="carousel-item w-full">
          <HeroSideground
            body={slide.body}
            icon={slide.icon}
            title={slide.title}
          />
        </div>
      )
    })
  }

  const renderButtons = () => {
    return SLIDES.map((_, idx) => {
      return (
        <a href={`#item${idx}`} className="btn btn-xs">
          { idx + 1 }
        </a>
      )
    })
  }

  return (
    <>
      <div className="carousel w-full">
        { renderCarousels() }
      </div>
      <div className="flex justify-center w-full py-2 gap-2">
        { renderButtons() }
      </div>
    </>
  )
}

export default Carousel