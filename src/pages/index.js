/* eslint-disable */
import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'


class IndexPage extends React.Component {
  constructor(props) {
    super(props)
  }
  _onMouseEnter = () => {
    console.log("Hello");
  }
  render() {
    return (

      <Layout>
        <h2 className="title"><Link to="#content-main">RaisonDePlus</Link></h2>
        <nav className="menu">
          <Link to="#content-photography" className="menu__item" onMouseEnter={this._onMouseEnter}>Photography</Link>
          <Link to="#content-exhibitions" className="menu__item">Exhibitions</Link>
          <Link to="#content-contact" className="menu__item">Contact</Link>
        </nav>
      </Layout>
    )
  }

}


export default IndexPage
