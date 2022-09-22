import React from 'react'
import Image, { StaticImageData } from 'next/image'

interface HeroProps {
  body: string,
  button?: string,
  icon: StaticImageData,
  isReverse?: boolean,
  title: string,
}

export const HeroBackground = (props: HeroProps) => {
  return (
    <div className="hero rounded-3xl">
      <Image
        className="rounded-3xl"
        src={props.icon}
        alt="gif"
        layout='intrinsic'
        quality={100}
        unoptimized={true}
        height="700%"
      />
      <div className="hero-content text-center text-neutral-content px-28 py-40">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">{props.title}</h1>
          <p className="mb-5">{props.body}</p>
        </div>
      </div>
    </div>
  )
}

export const HeroSideground = (props: HeroProps) => {
  return (
    <div className="hero">
      <div className={`hero-content w-screen md:w-full flex-col  ${props.isReverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}>
        <Image
          className="rounded-3xl"
          src={props.icon}
          alt="gif"
          layout='intrinsic'
          quality={100}
          // unoptimized={true}
          // height="100%"
        />
        <div className="text-center lg:w-1/2 px-0 sm:px-28">
          <h1 className="mb-3 sm:mb-5 text-3xl md:text-4xl font-bold">{props.title}</h1>
          <p className="mb-0 sm:mb-5 text-md md:text-lg">{props.body}</p>
        </div>
      </div>
    </div>
  )
}