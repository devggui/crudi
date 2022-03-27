import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    min-height: 100%;
    background: var(--primary);
  }
  *, button, input {
    border: 0;
    background: none;
    font-family: Poppins, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji;
    color: var(--black);
    
    transition: color .2s ease-out;
  }
  :root {
    --primary: #fff;
    --black: #1b1f23;
    --gray: #586069;
    --gray-light: #6a737d;
    --gray-light-1: #dedede;
    --gray-light-2: #bfbfbf;
    --gray-light-3: #afacac;
    --gray-light-4: #ebeaea;
    --gray-light-5: #d4d4d4;
    --gray-dark: #24292e;
    --orange: #f9826c;
    --blue: #2b7489;
    --blue-2: #00BAED;
    --purple: #8257e5;

    --blue-dark: #165364;
    
    --header: #24292e;
    --logo: #fff;
    --username: #666;
    --search: rgba(255, 255, 255, 0.13);
    --search-placeholder: hsla(0,0%,100%,.75);
    --icon: #6a737d;
    --link: #0366d6;
    --border: #e1e4e8;
    --ticker: rgba(209,213,218,.5);
    --table-border: #b0b2b3;

    --submit-button: #3FC463;
    --submit-button-border: #30A14E;
    
    --calendar-scale-0: #ebedf0;
    --calendar-scale-1: #9BE9A8;
    --calendar-scale-2: #3FC463;
    --calendar-scale-3: #30A14E;
    --calendar-scale-4: #216E3A;
  
    --javascript: #f1e05a;
    --typescript: #2b7489;
    --other-language: #8257e5;
  }
`;