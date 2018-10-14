/* eslint-disable */
import React from 'react'
import bg from '../assets/images/dillon-mangum-383677-unsplash.jpg'
import logo from '../assets/images/logo.png'
import { TimelineLite } from 'gsap/all';
import ScrollMagic from "../components/ScrollMagic"; // my own wrapper for scrollmagic that includes greensock

class HeaderShelf extends React.Component {
    constructor(props) {
        super(props);
        // logo tween
        this.FadeOutLogo = null;

    }

    componentDidMount() {
        this.FadeOutLogo = new TimelineLite()
            .to("#logo-strapline", 1, { y: -100, ease: Linear.easeNone })
            .to("#logo-strapline", 1, { opacity: 0, ease: Linear.easeNone }, '-=1')

        // Init ScrollMagic Controller
        const controller = new ScrollMagic.Controller()
        const FadeOutLogo = this.FadeOutLogo

        // Create a Scene 1 - move pen body back to start - HOW?
        const FadeOutLogoScene = new ScrollMagic.Scene({
            triggerElement: "#header-section",
            triggerHook: 0,
            duration: document.documentElement.clientHeight / 2
        })
            .setTween(FadeOutLogo)
            .setPin("#header-pin", { pushFollowers: false })
            // .addIndicators()
            .addTo(controller)
    }
    render() {
        return (
            <section id="header-section" style={styles.sectionLong}>
                <section id="header-pin" className="cover darken-pseudo" style={styles.section}>
                    <div style={{ display: "table", width: "100%", height: "100%" }}>
                        <div style={{ display: "table-cell", verticalAlign: "middle" }}>
                            <div id="logo-strapline">
                                <img id="logo" src={logo} alt="" style={styles.logo} />
                                <hr style={styles.hr} />
                                <h1 id="strapline" style={styles.h1}>Freelance design<br />by Andy</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}
var styles = {};

styles.section = {
    height: '100vh',
    backgroundImage: 'url(' + bg + ')',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    'WebkitBackgroundSize': 'cover',
    'MozBackgroundSize': 'cover',
    'OBackgroundSize': 'cover',
    'BackgroundSize': 'cover',
    width: "100%"
}

styles.sectionLong = {
    height: '120vh'
}

styles.h1 = {
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Apercu-Regular',
    fontSize: '4.5vh',
    letterSpacing: '0.05em',
    lineHeight: '1.3em',
    "@media only screen and (max-width : 480px)": {
        letterSpacing: 0
    }
}

styles.logo = {
    display: 'block',
    width: '24vh',
    height: 'auto',
    margin: '0 auto'
}

styles.hr = {
    width: styles.logo.width,
    margin: '0 auto',
    color: 'black',
    backgroundColor: 'black',
    marginTop: '4vh',
    marginBottom: '4vh'
}
export default HeaderShelf