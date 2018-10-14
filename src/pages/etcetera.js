/* eslint-disable */
import React from 'react'

import HeaderShelf from '../components/headerShelf'
import FooterShelf from '../components/footerShelf'

class IndexPage extends React.Component {
    render() {
        return (<div id="pin-container">
            <HeaderShelf />
            <FooterShelf circle="true" />
        </div>)
    }
}
export default IndexPage