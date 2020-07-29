import React from 'react'

function FormField({ value, onChange, type = 'text', name, label }) {

  if (type == "textarea") {

    return (
      <div>
        <label>
          {label}
          <textarea
            name={name}
            value={value}
            onChange={onChange}
          />
        </label>
      </div>
    )
  }

  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  )
}


export default FormField;