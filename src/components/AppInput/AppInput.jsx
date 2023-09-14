import React from 'react'
import './AppInput.scss'

export default function AppInput(props) {
    const InputType = props.as || 'input';
  return (
    <div className="input-form-error-wrap">
        <div className="input-wrap">
            {props.preText ?  <>{props.preText}&nbsp;</> : ''}
            <InputType
                type={props.type}
                className={props.isValid ? '' : 'input-error'}
                onFocus={props.onFocus}
                value={props.value}
                onChange={props.onChange}
                name={props.name}
                id={props.id}
                placeholder={props.placeholder}
                rows={props.rows}
                min={props.min}
            />
        </div>
        <div
            style={{display: props.isValid ? 'none' : 'flex'}}
            className="error-text"
        >
            *{props.error}
        </div>
    </div>
  )
}
