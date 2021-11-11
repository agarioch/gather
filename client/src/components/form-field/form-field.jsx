import React from "react";

const Field = ({ field, register, type }) => {
  return (
    <div className="field" key={field._uid}>
      <label htmlFor={field._uid}>{field.label}</label>
      <input
        type={type}
        id={field._uid}
        name={field._uid}
        {...register(field._uid)}
      />
    </div>
  )
}
export default Field;