import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGithub,
  faLinkedin,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons'
import {
  faBookOpenReader,
  faFlask,
  faRocket,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons'

interface NavbarLinkProps {
  icon: IconDefinition,
  tip: string,
  to: string
}


const NavbarInternalLink = (props: NavbarLinkProps) => {
  return (
    <div className="btn btn-ghost normal-case text-2xl">
      <Link href={props.to}>
        <div className="tooltip tooltip-bottom" data-tip={props.tip}>
          <FontAwesomeIcon icon={props.icon} />
        </div>
      </Link>
    </div>
  )
}


const NavbarExternalLink = (props: NavbarLinkProps) => {
  return (
    <a href={props.to} target="_blank"  className="btn btn-ghost normal-case text-2xl">
      <div className="tooltip tooltip-bottom" data-tip={props.tip}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
    </a>
  )
}

const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box">
        <li key="1"><Link href="/">Landing</Link></li>
        <li key="2"><Link href="/about">About</Link></li>
        <li key="3"><Link href="/portfolio">Portfolio</Link></li>
        <li key="4"><Link href="/interests">Interests</Link></li>
      </ul>
    </div>
  )
}

const intNavbarLinks = [
  {
    icon: faSeedling,
    tip: "About",
    to: "/about"
  },
  {
    icon: faRocket,
    tip: "Portfolio",
    to: "/portfolio"
  },
  {
    icon: faFlask,
    tip: "Interests",
    to: "/interests",
  }
]
const extNavbarLinks = [
  {
    icon: faGithub,
    tip: "Github",
    to: process.env.REACT_APP_GITHUB_LINK,
  },
  {
    icon: faLinkedin,
    tip: "Linkedin",
    to: process.env.REACT_APP_LINKEDIN_LINK,
  },
  {
    icon: faBookOpenReader,
    tip: "Publications",
    to: process.env.REACT_APP_GOOGLE_SCHOLAR_LINK,
  },
]

const Navbar = () => {
  return (
    <div className="navbar bg-primaryDark text-primary-content rounded-2xl">
      <div className="navbar-start">
        { 
          intNavbarLinks.map((link, idx) => (
            <NavbarInternalLink
              key={idx}
              icon={link.icon}
              tip={link.tip}
              to={link.to}
            />
          ))
        }
      </div>
      <div className="navbar-center">
        <div className="btn btn-ghost normal-case text-2xl">
          <Link href="/">
            T.B.S. Ph.D.
          </Link>
        </div>
      </div>
      <div className="navbar-end">
        { 
          extNavbarLinks.map((link, idx) => (
            <NavbarExternalLink
              key={idx}
              icon={link.icon}
              tip={link.tip}
              to={link.to}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Navbar