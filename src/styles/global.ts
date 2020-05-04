import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #A9A9A9;
    -webkit-font-smoothing: antialiased;
  }

  border, input, button {
    font: 16px Roboto, sans-serif;
  }

  #root {
    max-width: 1200px;

    margin: 0 auto;
    padding: 30px 60px;
  }

  button {
    cursor: pointer;
  }
`;
