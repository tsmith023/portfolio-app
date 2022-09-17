import React, { useEffect, useState } from "react"
import { Transition } from '@headlessui/react'
import Stanza from '../components/landing/Stanza'

export default function Home(): React.ReactElement {
  const [ isShowing, setIsShowing ] = useState(true)
  const [ whichLine, setWhichLine ] = useState(0)

  const lines = [
    "The desire of my spirit urges me to journey forth",
    "over the flowing sea, that far hence",
    "across the hills of water and the whale's country",
    "I may seek the land of strangers"
  ]
  const fadeTime = 200

  const onChange = () => {
    // Begin fade out transition
    setIsShowing(false)
    // Calculate new stack to choose from
    const newLineNumber = whichLine + 1 === lines.length ? 0 : whichLine + 1
    // Trigger function to execute after fadeTime to change stack and fade back in
    setTimeout(() => {
      setWhichLine(newLineNumber)
      setIsShowing(true)
    }, fadeTime)
  }

  useEffect(() => {
    // Setup time between Stack Fades to trigger on each fade-out-and-in
    const waitTime = 5000
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
          <Stanza text={lines[whichLine]} visible={isShowing} />
        </Transition>
      </div>
    </div>
  )
}
