import React from 'react'
import { Header } from './'

const Layout = ({ children }) => {
  return (
    <>
        <title>Joseph's Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <Header />
        {children}
    </>
  )
}

export default Layout