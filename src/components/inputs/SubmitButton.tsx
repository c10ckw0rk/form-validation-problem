import styled from '@emotion/styled';

const SubmitButton = styled.input`
  font-size: 0.875em;
  border: solid 1px transparent;
  background: #0b77db;
  color: #fff;
  padding: 0.75em 1em;
  cursor: pointer;

  &:hover {
    background: #3c9aa7;
  }

  &:focus {
    background: #3d6eac;
  }

  &:active {
    background: #333;
    border-color: #333;
  }
`;

export default SubmitButton;
