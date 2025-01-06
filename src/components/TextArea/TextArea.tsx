import React from 'react'

interface TextAreaProps{
    placeholder?: string;
    value?: string;
    onChange?:()=>{}
}

function TextArea(
    {
        placeholder,
        value,
        onChange
    }:TextAreaProps
) {

  return (
      <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
      />
  )
}

export default TextArea