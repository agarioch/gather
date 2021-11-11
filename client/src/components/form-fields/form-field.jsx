import React from "react";
import classNames from "classnames";
import './form-fields.css'

const Field = ({ field, register, type, error }) => {
  const inputClass = classNames([
    'input',
    { 'input--error': !!error }
  ])

  return (
    <div className="field" key={field._uid}>
      <label className="field__label" htmlFor={field._uid}>{field.label}</label>
      <input
        type={type}
        id={field._uid}
        name={field._uid}
        {...register(field._uid, { required: true })}
        className={inputClass}
      />
    </div>
  )
}
export default Field;