import { useState } from 'react'

function RightPane(props) {
    return (
        <div {...props}>
            {props.children}
        </div>
    )
}

export default RightPane;