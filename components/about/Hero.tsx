import React from 'react'
import Image from 'next/image'

interface HeroProps {
  body: string,
  button?: string,
  iconSrc: string,
  title: string,
}

const HeroBackground = (props: HeroProps) => {

  return (
    <div className="hero hero-background rounded-3xl">
      <div className="hero-overlay bg-opacity-80 rounded-3xl"/>
      <div className="absolute -z-10">
        <Image
          src={ props.iconSrc }
          layout='fill'
          objectFit='cover'
          quality={100}
        />
      </div>
      <div className="hero-content text-center text-neutral-content px-28 py-40">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">{ props.title }</h1>
          <p className="mb-5">{ props.body }</p>
          {/* <button className="btn btn-primary">Get Started</button> */}
        </div>
      </div>
    </div>
  )
}

export default HeroBackground