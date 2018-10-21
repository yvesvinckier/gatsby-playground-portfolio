import React from 'react'
import Link from 'gatsby-link'

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__left">©Raison De Plus <br />2018</div>
                <div className="footer__right">
                    <div className="footer__column">
                        <Link to="/">Stories &amp; Awards</Link>
                        <Link to="/">Exhibitions</Link>
                        <Link to="/">Contact</Link>
                    </div>
                    <div className="footer__column">
                        <Link to="/">Case Studies</Link>
                        <Link to="/">Advertisement</Link>
                        <Link to="/">Friends &amp; Clients</Link>
                    </div>
                    <div className="footer__column">
                        <span className="address">
                            Ulitsa Lva Tolstogo 46<br />
                            Moscow, Russia<br />
                            +7 495 119-27-77
						    </span>
                    </div>
                </div>
            </footer>

        )
    }
}
export default Footer