import { Tag } from '../Tag'
import {
  Item,
  Modal,
  ModalContent,
  ItemImagem,
  Fechar,
  TituloCompra,
  DescricaoCompra
} from './styles'
import close from '../../assets/images/close.png'
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
import { TagBigBuy, TagComprar } from '../TagBuy'

type Props = {
  id: string | number
  title: string
  category: string
  type?: number
  description: string
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

const Product = ({ title, category, type, description, image }: Props) => {
  const [modalEstaAberto, setModalEstaAberto] = useState(false)

  const descricaoLimitada =
    description.length > 240
      ? `${description.substring(0, 240)}...`
      : description

  return (
    <>
      <Card>
        <Container>
          <Imagem src={image} alt={title} />
        </Container>
        <Titulo>{title}</Titulo>
        <Descricao>{descricaoLimitada}</Descricao>
        <Comprar>
          <a onClick={() => setModalEstaAberto(true)}>
            <TagBigBuy>Mais detalhes</TagBigBuy>
          </a>
        </Comprar>
      </Card>
      {mock.map((media, index) => (
        <Modal className={modalEstaAberto ? 'visivel' : ''} key={media.foto}>
          <ModalContent className="Container">
            <ItemImagem key={media.foto}>
              <img src={media.foto} alt={`aa ${index + 1}`} />
            </ItemImagem>
            <Item key={media.foto}>
              <header>
                <Fechar
                  src={close}
                  alt="icone de fechar"
                  onClick={() => setModalEstaAberto(false)}
                />
              </header>
              <TituloCompra>{media.nome}</TituloCompra>
              <DescricaoCompra>
                {media.descricao}
                <br />
                <br /> Serve de {media.porcao}
              </DescricaoCompra>
              <TagComprar>
                Adicionar ao carrinho -{' '}
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                }).format(media.preco)}
              </TagComprar>
            </Item>
          </ModalContent>
          <div
            onClick={() => setModalEstaAberto(false)}
            className="overlay"
          ></div>
        </Modal>
      ))}
    </>
  )
}

export default Product
