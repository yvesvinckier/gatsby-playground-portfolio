import React from 'react'
import { graphql } from 'gatsby'
// import Link from 'gatsby-link'
// import Img from 'gatsby-image'
import Slider from '../components/Slider'

import Layout from '../components/layout'

const IndexPage = ({ location, data }) => {
  const posts = data.allContentfulGallery.edges
  const slider = React.createRef()
  return (
    <Layout location={location}>
      <Slider
        ref={slider}
        // ref={(component) => { this.slider = component }}
        posts={posts}
        handleProjectLinkClick={(projectCoverCallback) => {
          this.projectLinkClicked = true
          // Pass a callback to the page so that we can pass back the leave animation timeline
          // to the SliderCover component when transitioning the page out.
          this.projectCoverCallback = projectCoverCallback
        }}
      />
      {/* <ul className="featured__list">
        {posts.map(({ node: post }) => (
          <li key={post.id}>
            <Link to={post.slug + '/'}>
              <Img
                sizes={post.cover.sizes}
                alt={post.cover.title}
                title={post.cover.title}
                backgroundColor={'#f1f1f1'}
              />
              <h3>View Gallery</h3>
            </Link>
          </li>
        ))}
      </ul> */}
      {/* <ul className="featured__list">
        <li key={posts[0].node.id}>
          <Link to={posts[0].node.slug + '/'}>
            <Img
              sizes={posts[0].node.cover.sizes}
              alt={posts[0].node.cover.title}
              title={posts[0].node.cover.title}
              backgroundColor={'#f1f1f1'}
            />
            <h3>View Gallery</h3>
          </Link>
        </li>
      </ul> */}
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery {
    allContentfulGallery(limit: 8, sort: { fields: [createdAt], order: DESC }) {
      edges {
        node {
          title
          id
          slug
          cover {
            title
            sizes(maxWidth: 1800) {
              ...GatsbyContentfulSizes_noBase64
            }
          }
        }
      }
    }
  }
`

export default IndexPage
