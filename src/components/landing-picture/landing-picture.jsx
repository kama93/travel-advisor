import React, { Component } from 'react';
import ImageMapper from 'react-image-mapper';
import { withRouter } from "react-router-dom";


import './landing-picture.style.scss';

const MAP = {
    name: "my-map",
    areas: [
        { name: "laptop", shape: "poly", coords: [0, 0, 0, 420, 155, 545, 580, 0] },
        { name: "plane", shape: "poly", coords: [230, 700, 410, 820, 450, 620, 290, 500] },
        { name: "compass", shape: "circle", coords: [625, 420, 70] },
        { name: "camera", shape: "poly", coords: [880, 500, 900, 850, 1125, 830, 1110, 485] },
        { name: "passport", shape: "poly", coords: [975, 48, 960, 380, 1188, 390, 1212, 60] }
    ]
}
class Picture extends React.Component {
    constructor() {
        super();
        this.state = {
            hoveredArea: null,
            msg: null,
            moveMsg: null
        }
    }


    fun(area) {
        if (area.name !== undefined) {
            this.props.history.push(`/${area.name}`);
        }
    }


    clickedOutside(evt) {
        const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
        this.setState({
            msg: `You clicked on the image at coords ${JSON.stringify(coords)} !`
        });
    }

    moveOnImage(evt) {
        const coords = { x: evt.nativeEvent.layerX, y: evt.nativeEvent.layerY };
        this.setState({
            moveMsg: `You moved on the image at coords ${JSON.stringify(coords)} !`
        });
    }

    enterArea(area) {
        this.setState({ hoveredArea: area });
    }

    leaveArea(area) {
        this.setState({ hoveredArea: null });
    }

    moveOnArea(area, evt) {
        this.setState({ hoveredArea: null });
    }

    getTipPosition(area) {
        return { top: `${area.center[1]}px`, left: `${area.center[0]}px` };
    }

    render() {
        return (
            <div className="picture-container">
                <ImageMapper src="images/map.jpg" map={MAP} width={1300}
                    // onLoad={() => this.load()}
                    onClick={this.fun.bind(this)}
                    onMouseEnter={area => this.enterArea(area)}
                    onMouseLeave={area => this.leaveArea(area)}
                    onMouseMove={(area, _, evt) => this.moveOnArea(area, evt)}
                    onImageClick={this.fun.bind(this)}
                    onImageMouseMove={evt => this.moveOnImage(evt)}
                />
                {
                    this.state.hoveredArea &&
                    <span className="tooltip"
                        style={{ ...this.getTipPosition(this.state.hoveredArea) }}>
                        {this.state.hoveredArea && this.state.hoveredArea.name}
                    </span>
                }
            </div>
        )
    }
}


export default withRouter(Picture);