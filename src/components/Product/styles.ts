import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  display: grid;
  background-color: ${cores.cor3};
  margin-bottom: 4vh;
  position: relative;
  border: 1px solid ${cores.cor1};

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const Border = styled.div`
  border-top: none;
`

export const Titulo = styled.h3`
  display: flex;
  align-items: end;
  justify-content: space-between;
  margin-top: 4px;
  font-weight: bold;
  font-size: 16px;
  padding: 4px;
  margin-left: 6px;
  margin-bottom: 8px;
`

export const Descricao = styled.p`
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
  height: 216px;
  overflow: hidden;
`

export const Imagem = styled.img`
  border: none;
  width: 100%;
  height: auto;
`

export const Nota = styled.a`
  position: absolute;
  right: 36px;
`

export const Star = styled.img`
  margin-bottom: 0;
`
