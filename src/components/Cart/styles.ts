import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { ButtonContainer } from '../Button/styles'

import fechar from '../../assets/images/fechar.png'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Sidebar = styled.aside`
  background-color: ${cores.cor1};
  z-index: 1;
  padding: 40px 16px 0 16px;
  max-width: 360px;
  width: 100%;

  ${ButtonContainer} {
    max-width: 100%;
    width: 100%;
    height: 24px;
    color: ${cores.cor1};
    font-size: 14px;
    background-color: ${cores.cor2};
    border-radius: 0;
    padding: 0;
  }

  h1,
  h3 {
    color: ${cores.cor2};
  }
`

export const Prices = styled.p`
  display: flex;
  font-size: 14px;
  color: ${cores.cor3};
  margin: 16px 0 16px;
  justify-content: space-between;

  span {
    display: block;
    font-size: 12px;
    color: ${cores.cor3};
  }
`

export const Quantity = styled.p`
  font-weight: bold;
  font-size: 16px;
  color: ${cores.cor3};
  margin-top: 32px;
  margin-bottom: 16px;
`

export const CartItem = styled.li`
  display: flex;
  border-bottom: 2px solid ${cores.cor3};
  padding: 8px 0;
  position: relative;
  background-color: ${cores.cor2};
  margin-bottom: 16px;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin: 0 8px;
  }

  h3 {
    color: ${cores.cor1};
    font-weight: bold;
    font-size: 16px;
  }

  span {
    padding-top: 16px;
    display: block;
    color: ${cores.cor1};
    font-size: 14px;
  }

  ${TagContainer} {
    margin-right: 8px;
    color: ${cores.cor3};
    margin-top: 8px;
    margin-bottom: 16px;
  }

  button {
    background-image: url(${fechar});
    width: 16px;
    height: 16px;
    border: none;
    background-color: transparent;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`
