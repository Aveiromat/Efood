import { Link } from 'react-router-dom'
import { Tag, TagBig } from '../Tag'

import {
  Card,
  Descricao,
  Titulo,
  Infos,
  Imagem,
  Container,
  Nota,
  Border
} from './styles'

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
    <Border>
      <Infos>
        {infos.map((info) => (
          <Tag key={info}>{info}</Tag>
        ))}
      </Infos>
      <Titulo>
        {title} <Nota src={type} />
      </Titulo>
      <Descricao>{description}</Descricao>
      <Link to="categories">
        <TagBig>{category}</TagBig>
      </Link>
    </Border>
  </Card>
)

export default Product
