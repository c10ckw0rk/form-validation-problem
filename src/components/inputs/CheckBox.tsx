import * as React from 'react';
import Label from './Label';
import useUniqueId from '../../hooks/useUniqueId';
import styled from '@emotion/styled';
import { InputHTMLAttributes } from 'react';

type PropTypes = InputHTMLAttributes<HTMLInputElement> & {
  label: String;
};

const StyledCheckBox = styled.input`
  margin-right: 0.6em;
  margin-left: 0;
`;

export default function CheckBox({ label, value, name, onChange }: PropTypes) {
  const id = useUniqueId('checkbox');
  return (
    <>
      <StyledCheckBox id={id} type={'checkbox'} value={value} name={name} onChange={onChange} />
      <Label smlPad htmlFor={id}>
        {label}
      </Label>
    </>
  );
}
