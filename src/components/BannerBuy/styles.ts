import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Imagem = styled.div`
  display: grid;
  width: 100vw;
  height: 384px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${cores.cor1};
  padding-left: 320px;

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
  font-size: 32px;
  font-weight: bold;
  align-self: center;
  color: ${cores.cor4};
`

export const Precos = styled.p`
  font-weight: 100;
  font-size: 32px;
  margin-top: 24px;
  align-self: center;
  color: ${cores.cor4};

  span {
    text-decoration: line-through;
  }
`
