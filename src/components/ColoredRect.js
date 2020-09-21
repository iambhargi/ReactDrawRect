import React, { Component } from 'react';
import { Rect, Group } from 'react-konva';


class ColoredRect extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: 'white',
            opacity: 0.5
        };
    }

    render() {
        return (
            <Group>
                <Rect
                    x={this.props.x}
                    y={this.props.y}
                    width={this.props.width}
                    height={this.props.height}
                    fill={this.state.color}
                    opacity={this.state.opacity}
                />
            </Group>
        );
    }
}

export default ColoredRect