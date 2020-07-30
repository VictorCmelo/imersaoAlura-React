import React from 'react'

import { Label, Container, Input } from './styles';

function FormField({ value, onChange, type = 'text', name, label, placeholder }) {

  return (
    <Container>
      <Input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      <Label for={label}>
        {label}
      </Label>
    </Container>
  )
}


export default FormField;