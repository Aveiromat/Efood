import styled from 'styled-components'

import { Props } from '.'
import { cores } from '../../styles'

export const Container = styled.section<Omit<Props, 'title' | 'pageId'>>`
  overflow-x: hidden;
  background-color: ${(props) =>
    props.background === 'cor1' ? cores.cor3 : cores.cor3};
`

export const List = styled.ul`
  display: grid;
  max-width: 1024px;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 24px;
  margin-top: 8vh;
  margin-bottom: 12vh;
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
`
