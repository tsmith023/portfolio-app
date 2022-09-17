import React from 'react'
import Card from '../../components/interests/Card'

const cards = [
  {
    title: "Foundational Mechanics",
    body: `
      A deep-dive into the fundamental concept that guides every physical
      system that we know: The Principle of Least Action
    `
  },
  {
    title: "Theoretical Frontiers",
    body: `
      Discover the magic of topological protection and its application to
      myriad physical systems in all dimensions and at all length-scales
    `
  },
  {
    title: "High Fantasy",
    body: ""
  },
  {
    title: "Selected Poetry",
    body: ""
  },
]

const Interests = () => {
  return (
    <div className="h-full w-full grid grid-cols-2 gap-20 p-20">
      {cards.map((card, idx) => <Card key={idx} title={card.title} body={card.body} />)}
    </div>
  )
}

export default Interests