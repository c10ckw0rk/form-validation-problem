import * as React from 'react';
import styled from '@emotion/styled';
import useUniqueId from '../../hooks/useUniqueId';
import Label from './Label';
import { InputHTMLAttributes } from 'react';

const Input = styled.input`
  font-size: 1em;
  border: solid 1px #ddd;
  border-radius: 0.25em;
  -webkit-appearance: none;
  color: #555;
  padding: 0.5em 0.5em;
  width: 16em;

  &:focus {
    outline: none;
    border-color: #0b77db;
    box-shadow: 0 0 6px rgba(48, 140, 255, 0.25);
  }
`;

type PropTypes = InputHTMLAttributes<HTMLInputElement> & {
  label: String;
};

TextField.defaultProps = {
  type: 'text'
};

export default function TextField({ label, onChange, value, type, name, minLength, onBlur, required }: PropTypes) {
  const id = useUniqueId('text-input');
  return (
    <>
      <Label pad htmlFor={id}>
        {label}
      </Label>
      <Input
        id={id}
        type={type}
        onChange={onChange}
        value={value}
        name={name}
        minLength={minLength}
        onBlur={onBlur}
        required={required}
      />
    </>
  );
}
