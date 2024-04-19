import { forwardRef, useState } from 'react'

function LeftPane(props) {
    return (
        <div {...props}>
            {props.children}
        </div>
    )
}

export default LeftPane;