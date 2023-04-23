import { StaticImageData } from 'next/image'

export interface TechProps {
  name: string
  url: string
}

export interface WhoWithProps {
  title: string
  body: string
}

export interface CardGlassProps {
  body: string
  idx: number
  imgs: StaticImageData[]
  subtitle: string
  techs: TechProps[]
  title: string
  url: string
  whoWith: WhoWithProps
  mothballed?: boolean
}

export interface TechsPopupProps {
  buttonName: string
  title: string
  techs: TechProps[]
  whichModal: string
}

export interface DescriptionPopupProps {
  description: string
  subtitle: string
  title: string
  whichModal: string
}

export interface WhoWithPopupProps {
  title: string
  body: string
  whichModal: string
}