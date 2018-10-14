/* eslint-disable */
import React, { Component } from 'react'
import { render } from 'react-dom';
import SimpleTween from '../components/simple-tween'

class ControllLogoTween extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React'
        };
    }
    render() {
        return (
            <div className="container">
                <SimpleTween />
            </div>
        );
    }
}
export default ControllLogoTween