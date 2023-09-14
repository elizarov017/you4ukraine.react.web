import React from 'react'
import './SeparatorLine.scss'

export default function SeparatorLine({mirror = false}) {
  return (
    <div className={'separator-line' + (mirror ? ' mirror-y' : '')}>
        <img src="/resources/separator.png" alt="Separator Line" />
    </div>
  )
}
