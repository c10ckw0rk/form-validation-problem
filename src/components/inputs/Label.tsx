import styled from '@emotion/styled';
import { css } from '@emotion/core';

const StyledLabel = styled.label<{
  pad?: boolean;
  smlPad?: boolean;
}>`
  vertical-align: middle;
  display: inline-block;

  ${props =>
    props.pad &&
    css`
      width: 10em;
    `}

  ${props =>
    props.smlPad &&
    css`
      margin-right: 1em;
    `}
`;

export default StyledLabel;
