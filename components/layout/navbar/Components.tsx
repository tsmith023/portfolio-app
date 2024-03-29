import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faGithub,
  faGitlab,
  faLinkedin,
  IconDefinition
} from '@fortawesome/free-brands-svg-icons'
import {
  faBookOpenReader,
  faFlask,
  faIdCard,
  faRocket,
  faSeedling,
} from '@fortawesome/free-solid-svg-icons'

interface NavbarLinkProps {
  icon: IconDefinition,
  tip: string,
  to: string
}


export const intNavbarLinks = [
  {
    icon: faSeedling,
    tip: "Who",
    to: "/who"
  },
  {
    icon: faFlask,
    tip: "What",
    to: "/what"
  },
  {
    icon: faRocket,
    tip: "How",
    to: "/how"
  },
  // {
  //   icon: faFlask,
  //   tip: "Interests",
  //   to: "/interests",
  // }
]

export const extNavbarLinks = [
  {
    icon: faGithub,
    tip: "Github",
    to: process.env.NEXT_PUBLIC_GITHUB_LINK,
  },
  {
    icon: faGitlab,
    tip: "Gitlab",
    to: process.env.NEXT_PUBLIC_GITLAB_LINK,
  },
  {
    icon: faLinkedin,
    tip: "Linkedin",
    to: process.env.NEXT_PUBLIC_LINKEDIN_LINK,
  },
  {
    icon: faBookOpenReader,
    tip: "Publications",
    to: process.env.NEXT_PUBLIC_GOOGLE_SCHOLAR_LINK,
  },
]

export const NavbarInternalLinkDesktop = (props: NavbarLinkProps) => {
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


export const NavbarInternalLinkMobile = (props: NavbarLinkProps) => {
  return (
    <div className="btn btn-ghost normal-case text-2xl">
      <Link href={props.to}>
        <div className="tooltip tooltip-right" data-tip={props.tip}>
          <FontAwesomeIcon icon={props.icon} />
        </div>
      </Link>
    </div>
  )
}


export const NavbarExternalLinkDesktop = (props: NavbarLinkProps) => {
  return (
    <a href={props.to} target="_blank" className="btn btn-ghost normal-case text-2xl">
      <div className="tooltip tooltip-bottom" data-tip={props.tip}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
    </a>
  )
}


export const NavbarExternalLinkMobile = (props: NavbarLinkProps) => {
  return (
    <a href={props.to} target="_blank" className="btn btn-ghost normal-case text-2xl">
      <div className="tooltip tooltip-right" data-tip={props.tip}>
        <FontAwesomeIcon icon={props.icon} />
      </div>
    </a>
  )
}


export const DropdownMenu = () => {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box">
        { 
          intNavbarLinks.map((link, idx) => (
            <li key={idx}>
              <NavbarInternalLinkMobile
                icon={link.icon}
                tip={link.tip}
                to={link.to}
              />
            </li>
          ))
        }
        { 
          extNavbarLinks.map((link, idx) => (
            <li key={idx}>
              <NavbarExternalLinkMobile
                icon={link.icon}
                tip={link.tip}
                to={link.to}
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export const ResumeButton = () => {
  return (
    <a
      href={process.env.NEXT_PUBLIC_CV_DOWNLOAD_LINK}
      rel="noopener noreferrer"
      download
      className="btn btn-ghost normal-case text-2xl"
    >
      <div className="tooltip tooltip-bottom" data-tip="Resume">
        <FontAwesomeIcon icon={faIdCard} />
      </div>
    </a>
  )
}

export const HeaderDesktop = () => {
  return (
    <>
      <div className="btn btn-ghost normal-case text-2xl">
        <Link href="/">
          T.B.S. Ph.D.
        </Link>
      </div>
      <ResumeButton />
    </>
  )
}


export const HeaderMobile = () => {
  return (
    <div className="btn btn-ghost normal-case text-2xl">
      <Link href="/">
        T.B.S. Ph.D.
      </Link>
    </div>
  )
}