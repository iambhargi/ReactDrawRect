import React, { Component } from 'react'
import { Layer, Stage } from 'react-konva';
import GetReact from './GetReact';

class DrawRect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shapes: [],
            isDrawing: false,
        }
    }

    handleClick = (e) => {
        if (this.state.isDrawing) {
            this.setState({
                isDrawing: !this.state.isDrawing,
            })
            return;
        }

        const newShapes = this.state.shapes.slice();
        newShapes.push({
            x: e.evt.layerX,
            y: e.evt.layerY,
            width: 0,
            height: 0,
        });

        this.setState({
            isDrawing: true,
            shapes: newShapes,
        })
    }

    handleMouseMove = (e) => {
        const mouseX = e.evt.layerX;
        const mouseY = e.evt.layerY;

        if (this.state.isDrawing) {
            const currShapeIndex = this.state.shapes.length - 1;
            const currShape = this.state.shapes[currShapeIndex];
            const newWidth = mouseX - currShape.x;
            const newHeight = mouseY - currShape.y;

            const newShapesList = this.state.shapes.slice();
            newShapesList[currShapeIndex] = {
                x: currShape.x,
                y: currShape.y,
                width: newWidth,
                height: newHeight
            }

            this.setState({
                shapes: newShapesList,
            });
        }
    }

    render() {
        return (
            <div style={{
                backgroundImage: `url(${require("../assets/bgImage.png")})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover'
            }}>
                <Stage
                    width={window.innerWidth}
                    height={window.innerHeight}
                    onContentClick={this.handleClick}
                    onContentMouseMove={this.handleMouseMove}
                >
                    <Layer>
                        {this.state.shapes.map(shape => {
                            return (
                                <GetReact
                                    x={shape.x}
                                    y={shape.y}
                                    width={shape.width}
                                    height={shape.height}
                                />
                            );
                        })}
                    </Layer>
                </Stage>
            </div>
        );
    }
}

export default DrawRect;
