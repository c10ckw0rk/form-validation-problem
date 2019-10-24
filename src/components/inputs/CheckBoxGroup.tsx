import * as React from 'react';
import { useRef } from 'react';
import CheckBox from './CheckBox';

type PropTypes = {
  name: string;
  options: { value: string; label: string }[];
  onChange: (vals: String[]) => void;
};

export default function CheckBoxGroup({ options, name, onChange: propsOnChange }: PropTypes) {
  const checked = useRef<String[]>([]);
  const onChange = ({ target: { value } }) => {
    if (checked.current.includes(value)) {
      checked.current.splice(checked.current.indexOf(value), 1);
    } else {
      checked.current.push(value);
    }
    propsOnChange(checked.current);
  };
  return (
    <>
      {options.map(({ label, value }) => (
        <CheckBox
          key={label}
          label={label}
          value={value}
          name={name}
          onChange={onChange}
          checked={checked.current.includes(value)}
        />
      ))}
    </>
  );
}
