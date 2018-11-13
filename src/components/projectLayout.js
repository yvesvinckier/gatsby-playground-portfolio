import React, { Component } from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import Img from 'gatsby-image'

// Static Query
// Used anywhere, doesn't accept variable, can't use context

// Page Query
// Must be used on pages

export default class projectLayout extends Component {
  render() {
    const {
      content,
      title,
      cover
    } = this.props.data.contentfulGallery
    const { location } = this.props
    return (
      <Layout location={location}>
        <h1>{title}</h1>
        <Img sizes={cover.sizes} alt={cover.title} />
        <div
          dangerouslySetInnerHTML={{
            __html: content.childMarkdownRemark.html,
          }}
        />
      </Layout>
    )
  }
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      title
      slug
      content{
        childMarkdownRemark {
          html
        }
      }
      cover {
        title
        sizes(maxWidth: 1800) {
          ...GatsbyContentfulSizes_noBase64
        }
      }
    }
  }
`
