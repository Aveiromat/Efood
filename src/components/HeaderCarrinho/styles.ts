import styled from 'styled-components'
import { cores } from '../../styles'

export const HeaderBar = styled.header`
  background-color: ${cores.cor3};
  border-radius: 16px;
  display: flex;

  a {
    color: ${cores.cor1};
    text-decoration: none;
    font-weight: bold;
    align-items: center;
  }

  div {
    display: flex;
    align-items: center;
  }
`

export const Links = styled.ul`
  display: flex;
  margin-left: 40px;
`

export const LinkItem = styled.li`
  margin-right: 16px;
  justify-content: center;
`

export const LinkCart = styled.a`
  display: flex;

  img {
    margin-left: 16px;
  }
`

export const Logo = styled.img``

export const Fundo = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: ${cores.cor1};
  width: 100%;
  height: 160px;
  align-items: center;
  justify-content: space-around;
`
