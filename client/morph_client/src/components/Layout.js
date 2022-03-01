import React from 'react'

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