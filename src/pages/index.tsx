import * as React from 'react';
import TextField from '../components/inputs/TextField';
import SubmitButton from '../components/inputs/SubmitButton';
import Select from '../components/inputs/Select';
import GlobalStyles from '../components/GlobalStyles';
import H1 from '../components/typography/H1';
import H2 from '../components/typography/H2';
import Fieldset from '../components/Layout/Fieldset';
import Box from '../components/Layout/Box';
import Legend from '../components/inputs/Legend';
import useBatchState from '../hooks/useBatchState';
import CheckBoxGroup from '../components/inputs/CheckBoxGroup';

const colorOptions = [
  {
    value: '',
    label: 'Choose colour'
  },
  {
    value: 'blue',
    label: 'Blue'
  },
  {
    value: 'green',
    label: 'Green'
  },
  {
    value: 'red',
    label: 'Red'
  },
  {
    value: 'black',
    label: 'Black'
  },
  {
    value: 'brown',
    label: 'Brown'
  }
];

const animalOptions = [
  {
    value: 'bear',
    label: 'Bear'
  },
  {
    value: 'tiger',
    label: 'Tiger'
  },
  {
    value: 'snake',
    label: 'Snake'
  },
  {
    value: 'donkey',
    label: 'Donkey'
  }
];

export default () => {
  const [{ email, password, tigerType, color, tigerRequired }, setState] = useBatchState({
    email: '',
    password: '',
    tigerType: '',
    color: '',
    animals: [],
    tigerRequired: false
  });

  const onChange = ({ target }) => {
    const { value, name } = target;
    setState({ [name]: value });
  };

  const onSubmit = ({ target, preventDefault }) => {
    target.reportValidity();
    preventDefault();
  };

  const onCheck = vals => {
    setState({ animals: vals, tigerRequired: vals.includes('tiger') });
  };

  return (
    <main>
      <form method="post" action="" onSubmit={onSubmit}>
        <GlobalStyles />
        <H1>Fill out this awesome form</H1>
        <Box>
          <H2>Your details</H2>
          <p>
            <TextField required type={'email'} label={'Email'} value={email} name={'email'} onChange={onChange} />
          </p>
          <p>
            <TextField
              required
              type={'password'}
              label={'Password'}
              value={password}
              name={'password'}
              onChange={onChange}
              minLength={8}
            />
          </p>
        </Box>
        <Box>
          <H2>Your animal</H2>
          <p>
            <Select label={'Colour'} name={'color'} value={color} required options={colorOptions} onChange={onChange} />
          </p>
          <Fieldset>
            <p>
              <Legend>Animal</Legend>
              <CheckBoxGroup name={'animals'} options={animalOptions} onChange={onCheck} />
            </p>
            <p>
              <TextField
                label={'Type of tiger'}
                onChange={onChange}
                name={'tigerType'}
                value={tigerType}
                required={tigerRequired}
              />
            </p>
          </Fieldset>
        </Box>
        <Box>
          <p>
            <SubmitButton type="submit" value="Create account" />
          </p>
        </Box>
      </form>
    </main>
  );
};
