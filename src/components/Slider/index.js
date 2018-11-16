import React from 'react'
import PropTypes from 'prop-types'
import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'
import SliderCover from '../SliderCover'

class Slider extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentIndex: 0,
    }
  }

  static propTypes = {
    posts: PropTypes.array.isRequired,
  }

  // getInitialState() {
  //   return {
  //     currentIndex: 0
  //   }
  // }

  componentDidMount() {
    this.keyDownListener = e => this.handleKeyDown(e)
    this.mouseWheelListener = throttle(e => this.handleMouseWheel(e), 2000, {
      leading: true,
      trailing: false,
    })
    window.addEventListener('keydown', this.keyDownListener)
    window.addEventListener('wheel', this.mouseWheelListener, { passive: true })
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDownListener)
    window.removeEventListener('wheel', this.mouseWheelListener)
  }

  handleKeyDown({ keyCode }) {
    const { currentIndex } = this.state
    let newIndex = 0

    switch (keyCode) {
      case 39: // Right
      case 40: // Down
        newIndex = currentIndex + 1
        break

      case 38: // Up
      case 37: // Left
        newIndex = currentIndex - 1
        break

      default:
        return
    }

    this.handleProjectSwitch(newIndex)
  }

  handleMouseWheel({ deltaY }) {
    const { currentIndex } = this.state
    const newIndex = deltaY > 0 ? currentIndex + 1 : currentIndex - 1
    this.handleProjectSwitch(newIndex)
  }

  handleProjectSwitch = debounce(
    newIndex => {
      if (!this.animatingOut) {
        const projectsDataCount = this.props.posts.length - 1
        let index = newIndex

        if (index > projectsDataCount) {
          index = 0
        } else if (index < 0) {
          index = projectsDataCount
        }

        this.setState({ currentIndex: index })
      }
    },
    350,
    { leading: true, trailing: false }
  )

  render() {
    const { currentIndex } = this.state
    const { posts } = this.props

    return (
      <section className="">
        <SliderCover project={posts[currentIndex]} {...this.props} />
      </section>
    )
  }
}

export default Slider
