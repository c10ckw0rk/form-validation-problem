import * as React from 'react';
import { Global, css } from '@emotion/core';

export default function GlobalStyles() {
  return (
    <Global
      styles={css`
        /*
        -------------------------------------------------------------------
          Page
          prettiness
          -------------------------------------------------------------------
          */
        body {
          font-family: sans-serif;
          line-height: 1.5;
          color: #333;
          background: #ddd;
          margin: 2em;
        }

        form {
          background: #fff;
          padding: 1em 1.25em;
          border: solid 1px #ccc;
          border-radius: 0.25em;
        }

        /*
            -------------------------------------------------------------------
            Error states
            -------------------------------------------------------------------

            An error class to forms that fail your validation:

            <p class='error'>
                <label for='field'></label>
                <input id='field' type='text' value='foo'>
            </p>
        */
        .error > input,
        .error > label {
          color: red;
        }

        .error > input {
          border-color: red;
        }
      `}
    />
  );
}
