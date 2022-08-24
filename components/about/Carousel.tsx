import React from 'react'
// import { useSwipeable } from "react-swipeable";
import Hero from './Hero'

const NEXT = "NEXT"
const PREV = "PREV"

const SLIDES = [
  {
    body: "I love coding",
    iconSrc: "https://placeimg.com/260/400/arch",
    title: "Coding",
  },
  {
    body: "body2",
    iconSrc: "https://placeimg.com/260/410/arch",
    title: "I love physics",
  },
  {
    body: "body2",
    iconSrc: "https://placeimg.com/260/410/arch",
    title: "I love Tolkein",
  },
  {
    body: "",
    iconSrc: "https://placeimg.com/260/410/arch",
    title: "In that order!",
  },
]

const initialState = { pos: 0, sliding: false, dir: NEXT };

interface CarouselProps {
  // children: React.ReactElement,
}

const Carousel = (props: CarouselProps) => {
  const renderCarousels = () => {
    return SLIDES.map((slide, idx) => {
      return (
        <div id={`item${idx}`} className="carousel-item w-full">
          <Hero
            body={slide.body}
            iconSrc={slide.iconSrc}
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