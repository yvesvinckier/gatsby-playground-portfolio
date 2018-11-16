import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { PAGE_FADE_DURATION } from '../values/animations'
import breakpoints from '../values/breakpoints'
import TweenLite from 'gsap/TweenLite'
import TimelineLite from 'gsap/TimelineLite'
// import Link from 'gatsby-link'
// import Img from 'gatsby-image'
import Slider from '../components/Slider'

import Layout from '../components/layout'

class IndexPage extends React.Component {
  static propTypes = {
    posts: PropTypes.array,
    previousPath: PropTypes.string,
    transitionPage: PropTypes.func,
    notifyPageTransitionEnded: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.state = {
      sliderOpacity: 1,
    }
  }

  componentWillAppear(onComplete) {
    if (window.innerWidth >= breakpoints.desktop) {
      TweenLite.fromTo(
        this,
        PAGE_FADE_DURATION,
        { state: { sliderOpacity: 0 } },
        { state: { sliderOpacity: 1 }, onComplete }
      )
    } else {
      onComplete()
    }
  }

  componentWillEnter(onComplete) {
    const { previousPath, transitionPage } = this.props

    if (previousPath === '/about/' || previousPath === '/projects/') {
      transitionPage('in', onComplete, true)
    } else if (window.innerWidth >= breakpoints.desktop) {
      TweenLite.fromTo(
        this,
        1,
        { state: { sliderOpacity: 0 } },
        { state: { sliderOpacity: 1 }, onComplete }
      )
    } else {
      onComplete()
    }
  }

  componentWillLeave(onComplete) {
    if (this.projectLinkClicked) {
      if (window.innerWidth >= breakpoints.desktop) {
        this.slider.animatingOut = true
        const timeline = new TimelineLite({ onComplete })
        timeline.add(() => {
          this.projectCoverCallback(timeline, () => {
            timeline.fromTo(
              this,
              PAGE_FADE_DURATION,
              { state: { sliderOpacity: 1 } },
              { state: { sliderOpacity: 0 } }
            )
          })
        })
      } else {
        onComplete()
      }
    } else {
      this.props.transitionPage('out', onComplete)
    }
  }

  componentWillUnmount() {
    this.props.notifyPageTransitionEnded()
  }

  render() {
    const { data, location } = this.props
    const posts = data.allContentfulGallery.edges
    const { sliderOpacity } = this.state

    return (
      <Layout location={location}>
        <div style={{ opacity: sliderOpacity }}>
          <Slider
            ref={component => {
              this.slider = component
            }}
            posts={posts}
            handleProjectLinkClick={projectCoverCallback => {
              this.projectLinkClicked = true
              // Pass a callback to the page so that we can pass back the leave animation timeline
              // to the SliderCover component when transitioning the page out.
              this.projectCoverCallback = projectCoverCallback
            }}
          />
        </div>
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
