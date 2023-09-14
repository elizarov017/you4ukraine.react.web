import './AppButton.scss'
import React from 'react'

// types: yellow, blue, outline-yellow, outline-blue

export default function AppButton({action, type = 'blue', text, small = false}) {

    return (
        <button
            onClick={() => action()}
            className={`button button__${type} ${small ? 'button-small' : ''}`}
        >
            {text}
        </button>
    )
}
