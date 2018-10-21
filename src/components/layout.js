import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from './footer'
import '../stylesheets/style.scss'
// import './layout.css'

const Layout = ({ children }) => (

  <div>
    <Helmet
      title='Gatsby Default Starter'
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    >
      <html lang="en" />
    </Helmet>


    <main>
      {children}
      <Footer />
    </main>
  </div>



)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
