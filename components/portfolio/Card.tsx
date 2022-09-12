import React from 'react'
import Image, { StaticImageData } from 'next/image'

export interface TechProps {
  name: string
  url: string
}

interface CardGlassProps {
  img: StaticImageData
  title: string
  body: string
  techs: TechProps[]
  url: string
  whoWith: string
}

const CardGlass = (props: CardGlassProps) => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="card glass h-7/8 w-5/6">
        <Image 
          className="rounded-xl"
          src={props.img}
          alt="example-site"
          layout='responsive'
          quality={100}
          unoptimized={true}
        />
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.body}</p>
          <div className="card-actions justify-between">
            <button className="btn btn-outline btn-nifo">{props.whoWith}</button>
            {
              props.techs.map((tech, idx) => (
                <a key={idx} href={tech.url} target="_blank"  className="btn btn-outline btn-success">{tech.name}</a>
              ))
            }
            <a href={props.url} target="_blank" className="btn btn-outline btn-primary">Check it out!</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardGlass