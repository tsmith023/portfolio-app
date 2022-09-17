import React from 'react'

interface InterestsCardProps {
  body: string,
  title: string
}

const Card = (props: InterestsCardProps) => {
  return (
    <div className="card glass border border-secondary w-full h-full">
      {/* <figure>
        <img src="https://placeimg.com/400/225/arch"/>
      </figure> */}
      <div className="m-auto text-center">
        <div className="card-body">
          <h2 className="card-title">
            {props.title}
          </h2>
          <p>
            {props.body}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card