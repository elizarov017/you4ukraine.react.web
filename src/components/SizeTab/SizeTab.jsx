import React from 'react'
import './SizeTab.scss'

export default function SizeTab({sizeName, onClick, isActive = false}) {
  return (
    <button className={`size-button${isActive ? ' size-button-active' : ''}`} onClick={onClick}>{sizeName}</button>
  )
}
