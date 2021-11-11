import React from "react";
import classNames from "classnames";
import './form-fields.css'

const Field = ({ id, label, register, validation, type, error }) => {
  const inputClass = classNames([
    'input',
    { 'input--error': !!error }
  ])

  return (
    <div className="field" key={id}>
      <label className="field__label" htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        name={id}
        {...register(id, validation)}
        className={inputClass}
      />
    </div>
  )
}
export default Field;