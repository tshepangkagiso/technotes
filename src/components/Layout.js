import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Outlet/> // The Outlet component is used to render child routes, consistent header or footer that we want on all pages
  )
}

export default Layout