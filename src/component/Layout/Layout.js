import React from 'react'
import Navbars from '../widgets/Navbar'
import Footers from '../widgets/Footers'

const Layout = (props) => {
  return (
    <>
  <Navbars/>
  {props.children}
  <Footers/>
  </>
    )
}

export default Layout