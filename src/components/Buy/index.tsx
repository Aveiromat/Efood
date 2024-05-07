import { Item, Items, Action, Modal, ModalContent, Center } from './styles'

import close from '../../assets/images/close.png'
import macarrao from '../../assets/images/macarrao.png'
import { useState } from 'react'

type BuyItem = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const mock: BuyItem[] = [
  {
    foto: 'https://fake-api-tau.vercel.app/efood/bella_tavola_italiana//1.webp',
    preco: 69.9,
    id: 1,
    nome: 'Ravioli al Tartufo Nero',
    descricao:
      'O Ravioli al Tartufo Nero é um requintado prato de massa artesanal, que celebra os sabores ricos e terrosos da trufa negra italiana. Cada ravióli é cuidadosamente recheado com uma mistura saborosa de ricota fresca, parmesão e trufas negras raladas, proporcionando uma combinação de texturas suaves e aromas irresistíveis.',
    porcao: '1 a 2 pessoas'
  }
]

const Buy = () => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      {mock.map((media, index) => (
        <Modal className={modalEstaAberto ? 'visivel' : ''} key={media.foto}>
          <ModalContent className="Container">
            <Item key={media.foto} onClick={() => setModalEstaAberto}>
              <img src={media.foto} alt={`aa ${index + 1}`} />
              <h4>
                {media.preco},{media.id},{media.nome},{media.descricao},
                {media.porcao}, index = {media.id + 1}
              </h4>
            </Item>
            <header>
              <h4>{media.nome}</h4>
              <img src={close} alt="icone de fechar" />
            </header>
            <img src={macarrao} alt="" />
          </ModalContent>
          <div className="overlay"></div>
        </Modal>
      ))}
    </>
  )
}

export default Buy
