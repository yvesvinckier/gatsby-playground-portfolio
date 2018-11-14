import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'

const Project = styled.article`
 box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.05);
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1rem;
  a {
    color: #000;
    text-decoration: none;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 0.4rem;
  }
  p {
    font-size: 0.8rem;
  }
  .read-more {
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: 0.8rem;
    text-decoration: underline;
    color: #524763;
  }
`

const LISTING_QUERY = graphql`
  query ProjectsListing {
    allContentfulGallery (limit :10, sort: {
          order: DESC,
          fields: [createdAt]
    }){
      edges {
        node {
          slug
          id
          content {
            childMarkdownRemark {
              html
            }
          }
          cover {
            title
              fluid {
              sizes
            }
          }
        }
      }
    }
  }
`

const Listing = () => (
  <StaticQuery
    query={LISTING_QUERY}
    render={({ allContentfulGallery }) => (
      allContentfulGallery.edges.map(({ node }) => (
        <Project key={node.id}>
          <Link to={node.slug}>
            <h2>{node.title}</h2>
          </Link>
          <p>{node.content}</p>
          <Link className="read-more" to={node.slug}>Read More</Link>
        </Project>
      ))
    )}
  />

)

export default Listing
