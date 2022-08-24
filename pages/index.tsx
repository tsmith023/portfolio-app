import React, { useEffect, useState } from "react";
import { Transition } from '@headlessui/react'
import Stanza from '../components/landing/Stanza'


export default function Home(): React.ReactElement {
  const texts = [
    "The desire of my spirit urges me to journey forth",
    "over the flowing sea, that far hence",
    "across the hills of water and the whale's country",
    "I may seek the land of strangers"
  ]

  const [ isShowing, setIsShowing ] = useState(true)
  const [ whichStack, setWhichStack ] = useState(0)
  // const [ selectedStack, setSelectedStack ] = useState(defaultStacks[0])
  // const [ stacks, setStacks ] = useState(defaultStacks)

  const fadeTime = 200

  const onFadeOut = () => {
    setIsShowing(false)
  }

  const onFadeIn = () => {
    setIsShowing(true)
  }

  const onChange = () => {
    // Begin fade out transition
    setIsShowing(false)
    // Calculate new stack to choose from
    const newStackNumber = whichStack + 1 === texts.length ? 0 : whichStack + 1
    // Trigger function to execute after fadeTime to change stack and fade back in
    setTimeout(() => {
      setWhichStack(newStackNumber)
      setIsShowing(true)
    }, fadeTime)
  }

  useEffect(() => {
    // Setup time between Stack Fades to trigger on each fade-out-and-in
    const waitTime = 6000
    const change = setInterval(() => onChange(), waitTime)
    return () => clearInterval(change)
  }, [onChange])
  
  return (
    <div className="h-full flex">
      <div className="m-auto">
        <Transition
          show={isShowing}
          unmount={false}
          enter={`transition-opacity duration-${fadeTime}`}
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave={`transition-opacity duration-${fadeTime}`}
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Stanza text={texts[whichStack]} visible={isShowing} />
        </Transition>
      </div>
    </div>
  )
}
