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
  height: 208px;
`

export const Comprar = styled.a`
  justify-content: center;
  cursor: pointer;
`

export const Nota = styled.img``

export const Items = styled.ul`
  display: flex;
`

export const Action = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.73);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.5s ease;
`

export const Item = styled.li`
  margin-right: 16px;
  position: relative;

  > img {
    border: 2px solid ${cores.cor1};
    border-radius: 8px;
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visivel {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
  }
`

export const ModalContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 1024px;
  height: 344px;
  position: relative;
  z-index: 1;
  background-color: ${cores.cor1};
  padding: 20px; /* Adicione um espaçamento interno ao redor do conteúdo */
  color: ${cores.cor3}; /* Defina a cor do texto */

  /* Adicione um estilo para o conteúdo do modal */
  .content {
    background-color: ${cores.cor2}; /* Defina uma cor de fundo para o conteúdo */
    padding: 20px; /* Adicione um espaçamento interno */
    border-radius: 8px; /* Adicione bordas arredondadas */
  }

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    h4 {
      font-size: 18px;
      font-weight: bold;
    }
  }

  > img {
    width: 100%;
  }

  img,
  iframe {
    display: block;
    max-width: 100%;
  }

  iframe {
    width: 100%;
    height: 480px;
  }
`

export const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ItemImagem = styled.li`
  align-self: center;
  justify-self: center;
  position: relative;

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const ItemCompra = styled.li`
  align-self: center;
  justify-self: center;
  position: relative;

  > img {
    width: 280px;
    height: 280px;
    object-fit: cover;
  }

  &:hover {
    ${Action} {
      opacity: 1;
      transition: opacity 0.5s ease;
    }
  }
`

export const Fechar = styled.img`
  position: absolute;
  right: 0;
  top: 16px;
  width: 16px;
  height: 16px;
`

export const TituloCompra = styled.h3`
  color: ${cores.cor3};
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 4px;
  font-weight: bold;
  font-size: 16px;
  padding: 4px;
  margin-top: 32px;
`

export const DescricaoCompra = styled.p`
  color: ${cores.cor3};
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  padding: 4px;
  padding-right: 8px;
  display: block;
  margin-top: 16px;
  margin-bottom: 4px;
  text-align: justify;
`
