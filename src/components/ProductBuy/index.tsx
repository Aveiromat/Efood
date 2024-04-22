import { Link } from 'react-router-dom'
import { Tag } from '../Tag'

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

const Product = ({
  title,
  category,
  type,
  description,
  infos,
  image
}: Props) => (
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
      <Link to="categories">
        <TagBigBuy>{category}</TagBigBuy>
      </Link>
    </Comprar>
  </Card>
)

export default Product
