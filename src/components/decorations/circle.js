import React from "react";

class Circle extends React.Component {

    render() {

        let vh = 7;

        if (typeof window !== "undefined") {
            vh = window.innerHeight / 100;
        }

        const pixelDiameter = this.props.diameter * vh;
        const svgWidth = pixelDiameter * 1.3;
        const pixelRadius = (pixelDiameter / 2);

        const styles = Object.assign({}, this.props.style, {
            width: svgWidth + "px",
            height: svgWidth + "px"
        });

        return (
            <div style={styles} className="hidden-xs">
                <svg width={svgWidth} height={svgWidth}>
                    <circle cx={svgWidth / 2} cy={svgWidth / 2} r={pixelRadius} stroke={this.props.colour} strokeWidth={pixelRadius / 7} fill="none" />
                </svg>
            </div>
        );
    }

}

export default Circle;