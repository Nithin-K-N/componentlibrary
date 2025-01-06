import React from 'react'

interface InputFieldProps{
    type?: 'text'|'number'|'email'|'password';
    placeholder?: string;
    value?: string;
    onChange?:()=>{}
}

function InputField(
    {
      type = 'text',
      placeholder,
      value,
      onChange
    }: InputFieldProps
) {

  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
    />
  )
}

export default InputField