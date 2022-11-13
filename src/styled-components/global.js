import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

/*
=============== 
Variables
===============
*/

:root {

  --clr-white: #fff;
  --clr-red-dark: hsl(360, 67%, 44%);
  --clr-red-light: hsl(360, 71%, 66%);
  --clr-green-dark: hsl(125, 67%, 44%);
  --clr-green-light: hsl(125, 71%, 66%);
  --clr-black: #222;
  --transition: all 0.3s linear;
  --spacing: 0.1rem;
  --radius: 0.25rem;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  --max-width: 1170px;
  --fixed-width: 620px;
}

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  background-color: ${({ theme }) => theme.colors.body};
/*   line-height: 1.5;
  font-size: 0.875rem; */
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text}
}
h1,
h2,
h3,
h4 {
  /* letter-spacing: var(--spacing); */
  text-transform: capitalize;
  line-height: 1.25;
  /* margin-bottom: 0.75rem; */
}


h1,
h2,
h3,
h4,
h5,
h5,
a,
ul,
li {
  margin: 0;
  padding: 0;
}

`;
export default GlobalStyles;
