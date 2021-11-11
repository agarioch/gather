import React from "react";
import classNames from "classnames";
import './form-fields.css'
import ButtonGroup from "./button-group";

const OptionField = ({ field, register, type, error }) => {
  const inputClass = classNames([
    'input__option',
    { 'input--error': !!error }
  ])

  return (
    <div className="field" key={field._uid}>
      <label className="field__label" htmlFor={field._uid}>{field.label}</label>
      <div className="field__options">
        {
          <ButtonGroup
            field={field}
            register={register}
            error={error} />
        }
      </div>
    </div>
  )
}
export default OptionField;

// Option to revert back to simple html radio buttons vs. animation 
// field.options.map(option => (
//   <span className="field__option" key={option}>
//     <label htmlFor={option}>{option}</label>
//     <input
//       type={type}
//       name={option}
//       value={option}
//       {...register(field._uid, { required: true })}
//       className={inputClass}
//     />
//   </span>
// ))