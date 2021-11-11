import React from "react";

const Field = ({ field, fieldChanged, type, value }) => {
  return (
    <div className="field" key={field._uid}>
      <label htmlFor={field._uid}>{field.label}</label>
      <input
        type={type}
        id={field._uid}
        name={field._uid}
        value={value}
        onChange={event => fieldChanged(field._uid, event.target.value)}
      />
    </div>
  )
}
export default Field;