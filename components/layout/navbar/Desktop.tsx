import { 
  Header,
  NavbarExternalLink,
  NavbarInternalLink,
  intNavbarLinks,
  extNavbarLinks,
} from "./Components"

const DesktopNavbar = () => {
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
        <Header />
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

export default DesktopNavbar