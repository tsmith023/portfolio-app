import {
  DropdownMenu,
  HeaderMobile,
  ResumeButton
} from 'components/layout/navbar/Components'

const MobileNavbar = () => {
  return (
    <div className="navbar text-primary-content">
      <div className="navbar-start">
        <DropdownMenu />
      </div>
      <div className="navbar-center">
        <HeaderMobile />
      </div>
      <div className="navbar-end">
        <ResumeButton />
      </div>
    </div>
  )
}

export default MobileNavbar