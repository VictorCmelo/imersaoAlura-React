import React from 'react'

import { Label, Container, Input } from './styles';

function FormField({
  value, onChange, type = 'text', name, label, placeholder, required, suggestions = []
}) {

  const hasSuggenstion = Boolean(suggestions.length);

  return (
    <Container>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        autoComplete={hasSuggenstion ? "off" : "on"}
        list={hasSuggenstion ? `id_${name}` : undefined}
      />
      <Label forHtml={label}>
        {label}
      </Label>
      {
        hasSuggenstion && (
          <datalist id={`id_${name}`}>
            {
              suggestions.map((suggestion) => (
                <option key={`id_${name}_option`} option value={suggestion} >
                  {suggestion}
                </option>
              ))
            }
          </datalist>
        )
      }

    </Container >
  )
}


export default FormField;