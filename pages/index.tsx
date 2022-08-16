import React, { useEffect, useRef, useState } from "react";
import nextPackage from "next/package.json";
import Title from '../components/Title'

interface StackedCardProps {
  disabled: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  stack: React.ReactElement,
}

const StackedCard: React.FC<StackedCardProps> = (props: StackedCardProps): React.ReactElement => {
  return (
    <button
      className="text-center btn btn-primary border border-quaternary card w-80 bg-primary place-content-center"
      onClick={props.onClick}
    >
      <div className="card-body">{ props.stack }</div>
    </button>
  )
}

const defaultStacks = [
  <div>I bloody love physics</div>,
  <div>I also bloody love coding</div>,
  <div>And DnB m8</div>
]

export default function Home(): React.ReactElement {
  const [ whichStack, setWhichStack ] = useState(0)
  const [ stacks, setStacks ] = useState(defaultStacks)

  const onClick = ( idx: number ) => {
    const newStackNumber = whichStack + 1 === stacks.length ? 0 : whichStack + 1
    const poppedStacks = defaultStacks.filter((_, idx) => idx !== newStackNumber)
    setWhichStack(newStackNumber)
    setStacks([
      defaultStacks[newStackNumber],
      ...poppedStacks
    ])
  }

  return (
    <div className="h-full flex">
      <div className="stack m-auto">
        { stacks.map((stack, idx) => {
          return (
            <StackedCard
              key={idx}
              disabled={idx!==whichStack}
              onClick={() => onClick(idx)}
              stack={stack}
            />
          )
        }) }
      </div>
    </div>
  );
}
