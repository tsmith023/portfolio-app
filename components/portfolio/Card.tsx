import React from 'react'

import ImageCarousel from './ImageCarousel'
import { CardGlassProps } from './types'
import { DescriptionPopup, TechsPopup, WhoWithPopup } from './components'


const CardGlass = (props: CardGlassProps) => {
  const renderDescription = () => {
    return (
      <>
        <div className="block md:hidden text-center">
          <DescriptionPopup
            title={props.title}
            subtitle={props.subtitle}
            description={props.body}
            whichModal={`desc-modal-${props.idx}`}
          />
        </div>
        <div className="hidden md:block">
          <div className="card-title">{props.title}: {props.subtitle}</div>
          <p className="hidden md:block">{props.body}</p>
        </div>
      </>
    )
  }

  const renderTechs = () => {
    return (
      <>
        <div className="block lg:hidden">
          <TechsPopup
            buttonName="Key Techs"
            title="Project Technologies"
            techs={props.techs}
            whichModal={`tech-modal-${props.idx}`}
          />
        </div>
        <div className="hidden lg:block text-center">
          { 
            props.techs.map((tech, idx) => (
              <a key={idx} href={tech.url} target="_blank"  className="btn btn-outline btn-success mx-2">{tech.name}</a>
            ))
          }
        </div>
      </>
    )
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="card card-compact md:card-normal glass h-3/4 lg:h-fit w-5/6">
        <ImageCarousel
          images={props.imgs}
        />
        <div className="card-body">
          { renderDescription() }
          <div className="card-actions flex flex-col md:flex-row items-center h-full justify-evenly md:mt-2">
            <WhoWithPopup
              title={props.whoWith.title}
              body={props.whoWith.body}
              whichModal={`whoWith-modal-${props.idx}`}
            />
            { renderTechs() }
            <a href={props.mothballed ? "" : props.url} target="_blank" className={`btn btn-outline btn-primary ${props.mothballed && "btn-disabled"}`}>
              { props.mothballed ? "Mothballed" : "Check it out!"}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardGlass