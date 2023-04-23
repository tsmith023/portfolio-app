import { 
  HeaderDesktop,
  NavbarExternalLinkDesktop,
  NavbarInternalLinkDesktop,
  intNavbarLinks,
  extNavbarLinks,
} from "components/layout/navbar/Components"

const DesktopNavbar = () => {
  return (
    <div className="navbar text-primary-content rounded-2xl">
      <div className="navbar-start">
        { 
          intNavbarLinks.map((link, idx) => (
            <NavbarInternalLinkDesktop
              key={idx}
              icon={link.icon}
              tip={link.tip}
              to={link.to}
            />
          ))
        }
      </div>
      <div className="navbar-center">
        <HeaderDesktop />
      </div>
      <div className="navbar-end">
        { 
          extNavbarLinks.map((link, idx) => (
            <NavbarExternalLinkDesktop
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