import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainerBuy } from '../TagBuy/styles'

export const Card = styled.div`
  display: grid;
  background-color: ${cores.cor1};
  margin-bottom: 4vh;
  border: 5px solid ${cores.cor1};
  position: relative;
  padding-bottom: 4px;

  ${TagContainerBuy} {
    display: flex;
    justify-content: center;
    margin-left: 8px;
    margin-right: 8px;
  }
`

export const Titulo = styled.h3`
  color: ${cores.cor3};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  font-weight: bold;
  font-size: 16px;
  padding: 4px;
  margin-left: 6px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
  color: ${cores.cor3};
  font-size: 14px;
  line-height: 22px;
  padding: 4px;
  padding-right: 8px;
  display: block;
  margin-left: 6px;
  margin-bottom: 4px;
  text-align: justify;
`

export const Infos = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
`

export const Imagem = styled.img`
  width: 100%;
  height: auto;
`

export const Comprar = styled.a`
  justify-content: center;
`

export const Nota = styled.img``
