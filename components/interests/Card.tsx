import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface InterestsCardProps {
  imageLoc: string
  slug: string
  title: string
}

const Card = (props: InterestsCardProps) => {
  return (
    <div className="card glass border border-secondary">
      {/* <figure>
        <img src="https://placeimg.com/400/225/arch"/>
      </figure> */}
      <div className="m-auto text-center">
        <Link href={`/interests/${props.slug}`}>
          <a>
            <Image
              width={650}
              height={340}
              layout="intrinsic"
              alt={props.title}
              src={`/${props.imageLoc}`}
            />
            <div className="card-body">
              <h2 className="card-title">
                {props.title}
              </h2>
            </div>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Card