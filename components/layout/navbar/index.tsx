import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import DesktopNavbar from './Desktop'
import MobileNavbar from './Mobile'

const Navbar = () => {
  const isDesktop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return isDesktop ?
    <DesktopNavbar /> :
    <MobileNavbar />
}

export default Navbar