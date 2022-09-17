import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import DesktopNavbar from './Desktop'
import MobileNavbar from './Mobile'

const Navbar = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })

  return isDesktopOrLaptop ?
    <DesktopNavbar /> :
    <MobileNavbar />
}

export default Navbar