import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import Archive from './archive'
import Header from './header'
import Footer from './footer'
import '../stylesheets/style.scss'
// import './layout.css'

const MainLayout = styled.main`
  max-width: 90%;
  padding-top: 40px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-gap: 40px;
`


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
          }
        }
        file(relativePath: {
          regex: "/dillon-mangum-383677-unsplash/"
        }) {
          childImageSharp {
            fluid(maxWidth: 1920) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: data.site.siteMetadata.description,
            },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="fr" />
        </Helmet>
        <Header />
        <Img fluid={data.file.childImageSharp.fluid} />
        <MainLayout>
          <div>
            {children}
          </div>
          <Archive />
        </MainLayout>
        <Footer />

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
