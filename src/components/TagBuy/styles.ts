import styled from 'styled-components'
import { cores } from '../../styles'

import { Props } from '.'

export const TagContainerBuy = styled.div<Props>`
  background-color: ${cores.cor3};
  color: ${cores.cor1};
  font-size: ${(props) => (props.size === 'big' ? '16px' : '12px')};
  font-weight: bold;
  padding: ${(props) => (props.size === 'big' ? '8px 48px' : '6px 8px')};
`
