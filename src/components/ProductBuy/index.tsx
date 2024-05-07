import { Link } from 'react-router-dom'
import { Tag } from '../Tag'
import { Item, Items, Action, Modal, ModalContent, Center } from './styles'
import close from '../../assets/images/close.png'
import macarrao from '../../assets/images/macarrao.png'
import { useState } from 'react'
import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Imagem,
  Container,
  Nota,
  Comprar
} from './styles'
import { TagBigBuy } from '../TagBuy'

type Props = {
  title: string
  category: string
  type?: string
  description: string
  infos: string[]
  image: string
}

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

const Product = ({
  title,
  category,
  type,
  description,
  infos,
  image
}: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  return (
    <>
      <Card>
        <Container>
          <Imagem src={image} alt={title} />
        </Container>
        <Infos>
          {infos.map((info) => (
            <Tag key={info}>{info}</Tag>
          ))}
        </Infos>
        <Titulo>
          {title} <Nota src={type} />
        </Titulo>
        <Descricao>{description}</Descricao>
        <Comprar>
          <a onClick={() => setModalEstaAberto(true)}>
            <TagBigBuy>{category}</TagBigBuy>
          </a>
        </Comprar>
      </Card>
      {mock.map((media, index) => (
        <Modal className={modalEstaAberto ? 'visivel' : ''} key={media.foto}>
          <ModalContent className="Container">
            <Item key={media.foto}>
              <header>
                <Titulo>{media.nome}</Titulo>
                <img
                  src={close}
                  alt="icone de fechar"
                  onClick={() => setModalEstaAberto(false)}
                />
              </header>
              <img src={media.foto} alt={`aa ${index + 1}`} />
              <Descricao>
                {media.preco},{media.id},{media.nome},{media.descricao},
                {media.porcao}, index = {media.id + 1}
              </Descricao>
              <TagBigBuy>{category}</TagBigBuy>
            </Item>
          </ModalContent>
          <div className="overlay"></div>
        </Modal>
      ))}
    </>
  )
}

export default Product
