import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { prefixLink } from 'gatsby-helpers'
import Img from 'gatsby-image'
import { TimelineLite } from 'gsap/all'

import styles from './slider-cover.module.scss'


class SliderCover extends React.Component {

  static propTypes = {
    project: PropTypes.object.isRequired,
    handleProjectLinkClick: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
    this.state = {
      imageOpacity: 0
    }
  }

  componentDidMount() {
    this.timeline = this.getTimeline()
    this.animate()
  }

  componentDidUpdate(nextProps) {
    if (this.props.project.title !== nextProps.project.title) {
      this.setState(this.getInitialState(), () => { this.animate() })
    }
  }

  componentWillUnmount() {
    // Always clear the timeline to avoid multiple timelines running at the same time if coming back
    // to the page.
    this.timeline.clear()
  }

  getTimeline() {
    // Create the timeline, paused by default, so that we can re-use the same timeline by restarting
    // it everytime we need it.
    const timeline = new TimelineLite({ paused: true })
    return (
      timeline
        .fromTo(this, 0.85, { state: { imageOpacity: 0 } }, { state: { imageOpacity: 1 } })
    )
  }

  animate() {
    this.timeline.restart()
  }

  render() {
    const { project } = this.props
    const { slug, cover, title } = project.node
    const imageOpacity = this.state

    return (
      <div>
        <Link to={slug + '/'}>
          <Img
            style={{
              opacity: imageOpacity
            }}
            sizes={cover.sizes}
            alt={cover.title}
            title={cover.title}
          />
          <div
            className={styles.projectImage}
            style={{
              backgroundImage: `url(${prefixLink(project.cover)})`,
              opacity: imageOpacity
            }}
          />
          <h3>{title}</h3>
        </Link>
      </div>
    )
  }
}
export default SliderCover
