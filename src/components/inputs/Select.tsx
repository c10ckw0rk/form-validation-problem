import * as React from 'react';
import styled from '@emotion/styled';
import useUniqueId from '../../hooks/useUniqueId';
import Label from './Label';
import { InputHTMLAttributes } from 'react';

const StyledSelect = styled.select`
  font-size: 1em;
  border-radius: 0.25em;
  -webkit-appearance: none;
  width: 17em;
`;

type PropTypes = InputHTMLAttributes<HTMLSelectElement> & {
  options: { value: string; label: string }[];
  label: String;
};

export default function Select({ options, label, name, required, onChange, value }: PropTypes) {
  const id = useUniqueId('');

  console.log(value);

  return (
    <>
      <Label pad htmlFor={id}>
        {label}
      </Label>
      <StyledSelect name={name} id={id} required={required} onChange={onChange} value={value}>
        {options.map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          );
        })}
      </StyledSelect>
    </>
  );
}
