import {
  DropdownMenu,
  Header
} from './Components'

const MobileNavbar = () => {
  return (
    <div className="navbar bg-primaryDark text-primary-content rounded-2xl">
      <div className="navbar-start">
        <DropdownMenu />
      </div>
      <div className="navbar-center">
        <Header />
      </div>
    </div>
  )
}

export default MobileNavbar