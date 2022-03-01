import React from 'react'
import Nav from './Nav'
import '../static/css/layout.css'

const Layout = ({children}) => {
  return (
    <div className = "layout">
        <Nav />
        <div className = "layout-container">
            {children}
        </div>
    </div>

  )
}

export default Layout