import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* ===========================================================
   * Base Styles
  =========================================================== */
  :root {
    --bodyBgColor: #eae6e5;
    --elementsColor: #fafafa;
    --textColor: #0b090a;
    --placeholderColor: #161a1d;
    --remove: #e63946;
    --add: #52b788;
  }

  .darkmode:root {
    --bodyBgColor: #0b090a;
    --elementsColor: #161a1d;
    --textColor: #fafafa;
    --placeholderColor: #fafafa;
  }

  html {
    box-sizing: border-box;
    font-size: 100%;
    height: 100%;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
  }

  body {
    background-color: var(--bodyBgColor);
    color: var(--textColor);
    font-family: 'Work Sans', sans-serif;
    font-weight: 500; 
    height: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #root {
    align-items: center;
    display: flex;
    justify-content: center;
    height: 100%;
    padding: 2rem 1rem;
  }

  img {
    display: block;
    max-width: 100%;
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
