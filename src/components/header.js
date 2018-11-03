import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

// import gatsbyLogo from '../images/gatsby-icon.png'
const HeaderWrapper = styled.header`
background: #FFFFFF;
`;

const Header = () => (
  <HeaderWrapper>
    <h2 className="title"><Link to="#content-main">Andy</Link></h2>
    <nav className="menu">
      <Link to="#content-photography" className="menu__item">Photography</Link>
      <Link to="#content-exhibitions" className="menu__item">Exhibitions</Link>
      <Link to="#content-contact" className="menu__item">Contact</Link>
    </nav>
  </HeaderWrapper>
)

export default Header
