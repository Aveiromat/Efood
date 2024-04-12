import { createGlobalStyle } from 'styled-components'

export const cores = {
  cor1: '#E66767;', // branca
  cor2: '#FFEBD9', // preta
  cor3: '#FFF8F2', //cinza
  cor4: '#FFFFFF' // verde
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
    overflow-x: hidden
  }

  body {
    background-color: ${cores.cor2};
    color: ${cores.cor1};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
