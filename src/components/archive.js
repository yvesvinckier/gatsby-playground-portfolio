import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Archive = () => (
    <StaticQuery
        query={graphql`
      query ProjectsArchive {
        allMarkdownRemark {
          edges {
            node {
                frontmatter {
                    title
                    shortTitle
                    slug
                }
            }
          }
        }
      }
    `}
        render={({ allMarkdownRemark }) => (
            <>
                <aside>
                    <h3>Archive</h3>
                    {allMarkdownRemark.edges.map(edge => (
                        <li>
                            {edge.node.frontmatter.title}
                        </li>
                    ))}
                </aside>
            </>
        )}
    />
)

export default Archive
