import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import Card, { TechProps } from './Card'
import atIcon from '../../assets/images/atcounselling.png'
import bpIcon from '../../assets/images/brainpool.png'
import cfIcon from '../../assets/images/carbonfixers.png'
import sxIcon from '../../assets/images/stox.png'
import sgIcon from '../../assets/images/strawberry-gql.png'

const cards = [
  {
    body: `
      Become an investment expert by actively managing your portfolio through actionable insights generated from data-driven
      calculations and recommendations. Understand the holdings in your portfolio at the granular level through traditional statistical
      methods and discover your own investment style through AI recommendation strategies based on your fundamental personality.
    `,
    img: sxIcon,
    techs: new Array<TechProps>(
      {
        name: "React",
        url: "https://reactjs.org"
      },
      {
        name: "Apollo-GQL",
        url: "https://www.apollographql.com"
      },
      {
        name: "Strawberry-GQL", 
        url: "https://strawberry.rocks"
      },
      {
        name: "FastAPI",
        url: "https://fastapi.tiangolo.com"
      },
      {
        name: "MongoDB",
        url: "https://mongodb.com"
      },
      {
        name: "Go",
        url: "https://go.dev"
      }
    ),
    title: "StoX: An investment portfolio management SaaS platform",
    url: "https://mystox.io",
    whoWith: "Freelance"
  },
  {
    body: "AI Consultancy",
    img: bpIcon,
    techs: new Array<TechProps>(
      {
        name: "Docker",
        url: "https://www.docker.com"
      },
      {
        name: "k8s",
        url: "https://kubernetes.io"
      },
      {
        name: "Knowledge Graphs", 
        url: "https://en.wikipedia.org/wiki/Knowledge_graph"
      },
      {
        name: "Sentiment Analysis",
        url: "https://en.wikipedia.org/wiki/Sentiment_analysis"
      },
      {
        name: "Demand Forecasting",
        url: "https://en.wikipedia.org/wiki/Demand_forecasting"
      },
    ),
    title: "Brainpool AI: A network of over 500 data scientists and AI experts",
    url: "https://brainpool.ai",
    whoWith: "Employed"
  },
  {
    body: "EPDs",
    img: cfIcon,
    techs: new Array<TechProps>(
      {
        name: "React",
        url: "https://reactjs.org"
      },
      {
        name: "Apollo-GQL",
        url: "https://www.apollographql.com"
      },
      {
        name: "Strawberry-GQL", 
        url: "https://strawberry.rocks"
      },
      {
        name: "FastAPI",
        url: "https://fastapi.tiangolo.com"
      },
      {
        name: "MongoDB",
        url: "https://mongodb.com"
      },
      {
        name: "Speckle",
        url: "https://speckle.systems/"
      },
    ),
    title: "Carbon Fixers: A SaaS platform for cradle-to-gate carbon emissions estimation of early-stage architectural designs",
    url: "https://carbonfixers.org",
    whoWith: "Employed"
  },
  {
    body: "Remote Psychotherapy Services",
    img: atIcon,
    techs: new Array<TechProps>(
      {
        name: "Next",
        url: "https://nextjs.org"
      },
      {
        name: "Tailwind",
        url: "https://tailwindcss.com"
      },
      {
        name: "Daisy UI",
        url: "https://daisyui.com"
      },
    ),
    title: "AT Counselling Services: A portfolio website for professional therapy services",
    url: "https://atcounselling.services",
    whoWith: "Freelance"
  },
  {
    body: "Open-source collaborator and contributor",
    img: sgIcon,
    techs: new Array<TechProps>(
      {
        name: "Poetry",
        url: "https://python-poetry.org"
      },
      {
        name: "my[py]",
        url: "https://mypy.readthedocs.io/en/stable"
      },
      {
        name: "Github Actions",
        url: "https://docs.github.com/en/actions"
      },
    ),
    title: "Strawberry-GraphQL: An open-source Python GraphQL API technology",
    url: "https://strawberry.rocks",
    whoWith: "Contributor"
  },
]

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
            <div className="carousel-item w-full h-full">
              <div className="w-full h-full">
                <Card
                  key={idx}
                  body={card.body}
                  img={card.img}
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