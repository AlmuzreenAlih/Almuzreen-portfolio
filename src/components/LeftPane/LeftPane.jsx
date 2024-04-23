import { forwardRef, useState } from 'react'

function LeftPane(props) {
    return (
        <div {...props} style={{...props.style}}>
            {/* , width: "fit-content" */}
            {props.children}
        </div>
    )
}

export default LeftPane;