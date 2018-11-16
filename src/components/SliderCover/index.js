import React from 'react'
import PropTypes from 'prop-types'
// import { prefixLink } from 'gatsby-helpers'
import Link from 'gatsby-link'
import Img from 'gatsby-image'
import { TimelineLite } from 'gsap/all'

import styles from './slider-cover.module.scss'

class SliderCover extends React.Component {
  static propTypes = {
    project: PropTypes.object.isRequired,
    handleProjectLinkClick: PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {
      imageOpacity: 0,
    }
  }

  componentDidMount() {
    this.timeline = this.getTimeline()
    this.animate()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.project.title !== nextProps.project.title) {
      this.setState(this.state, () => {
        this.animate()
      })
    }
  }

  componentWillUnmount() {
    // Always clear the timeline to avoid multiple timelines running at the same time if coming back
    // to the page.
    this.timeline.clear()
  }

  getTimeline() {
    const coverImage = this.coverImage
    // Create the timeline, paused by default, so that we can re-use the same timeline by restarting
    // it everytime we need it.
    const timeline = new TimelineLite({ paused: true })
    return timeline.fromTo(coverImage, 5, { opacity: 0 }, { opacity: 1 })
  }

  animate() {
    this.timeline.restart()
  }

  render() {
    const { project } = this.props
    const { slug, cover, title } = project.node

    return (
      <div>
        <Link to={slug + '/'}>
          <div
            ref={c => {
              this.coverImage = c
            }}
          >
            <Img sizes={cover.sizes} alt={cover.title} title={cover.title} />
          </div>

          {/* <div
            className={styles.projectImage}
            style={{
              backgroundImage: `url(${prefixLink(project.cover)})`,
              opacity: imageOpacity,
            }}
          /> */}
          <h3>{title}</h3>
        </Link>
      </div>
    )
  }
}
export default SliderCover
