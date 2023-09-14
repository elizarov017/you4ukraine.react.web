import React from 'react'
import './SectionHook.scss';

export default function SectionHook({idName}) {
  return (
      <div style={{position: 'relative'}}>
          <div className="section-hook" id={idName}></div>
      </div>
  )
}
