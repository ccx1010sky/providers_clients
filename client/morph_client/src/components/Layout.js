import React from 'react'
import Nav from './Nav'

const Layout = ({children}) => {
  return (
    <div className = "layout">
        <nav />
        <div className = "layout-container">
            {children}
        </div>
    </div>

  )
}

export default Layout