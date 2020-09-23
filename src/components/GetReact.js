import React from 'react';
import { Rect } from 'react-konva';

function GetRect(props) {
    return (
        <Rect
            x={props.x}
            y={props.y}
            width={props.width}
            height={props.height}
            fill='white'
            opacity='0.5'
            draggable='true'
        />
    )
}

export default GetRect;
