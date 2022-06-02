import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCog, faGraduationCap } from '@fortawesome/free-solid-svg-icons'

type LandingHeaderProps = {
  content: string
}

const LandingHeader = ({ content }: LandingHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <div className="text-tertiaryDark text-5xl">
        <FontAwesomeIcon
          className="fa-spin"
          icon={faCog}
        />
      </div>
      <h1 className="text-6xl text-center bg-clip-text text-transparent bg-gradient-to-r from-tertiary to-tertiary">
        { content }
      </h1>
      <div className="text-tertiaryDark text-5xl">
        <FontAwesomeIcon
          className="fa-spin-reverse fa-spin"
          icon={faCog}
        />
      </div>
    </div>
  )
}

export default LandingHeader