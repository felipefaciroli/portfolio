import React, { useEffect, useRef } from 'react'
import * as Styled from './styles';
import { useField } from '@unform/core'
interface Props {
  name: string
  label?: string
}
type InputProps = JSX.IntrinsicElements['input'] & Props

export default function Input({ name, label, ...rest }: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, defaultValue, registerField, error } = useField(name)
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef,
      getValue: ref => {
        return ref.current.value
      },
      setValue: (ref, value) => {
        ref.current.value = value
      },
      clearValue: ref => {
        ref.current.value = ''
      },
    })
  }, [fieldName, registerField])
  return (
    <Styled.FieldCustom>
      <label htmlFor={fieldName} className="text-white">
        {label}
      </label>
      <input
        className="h-12 rounded text-textInput bg-bgCard px-4 mt-1"
        id={fieldName}
        ref={inputRef}
        defaultValue={defaultValue}
        {...rest}
      />
      {error && <span>{error}</span>}
    </Styled.FieldCustom>
  )
}
