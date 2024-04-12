import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  width: 100vw;
  height: 384px;
  display: block;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${cores.cor1};

  .container {
    position: relative;
    padding-top: 360px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  ${TagContainer} {
    position: absolute;
    top: 32px;
  }
`

export const Titulo = styled.h2`
font-size: 36px;
font weight: bold;
max-width: 450;
`

export const Precos = styled.p`
  font-size: 24px;
  margin-top: 24px;

  span {
    text-decoration: line-through;
  }
`
