import React from 'react'
import Navbar from "../NavBar/Navbar"
import Footer from "../Footer/Footer"
import {LayoutStyles} from "./LayoutStyles"

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      <LayoutStyles>{children}</LayoutStyles>
    <Footer />
    </>
  )
}

export default Layout
