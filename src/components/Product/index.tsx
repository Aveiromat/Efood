import EstrelaImg from '../../assets/images/estrela.png'
import { Tag, TagBig } from '../Tag'

import {
  Card,
  Descricao,
  Titulo,
  Imagem,
  Container,
  Border,
  Nota,
  Star
} from './styles'
import { TagContainerSmall } from '../Tag/styles'

type Props = {
  title: string
  category: string
  type?: number
  description: string
  image: string
}

const Product = ({ title, category, type, description, image }: Props) => (
  <Card>
    <Container>
      <Imagem src={image} alt={title} />
      <TagContainerSmall>{category}</TagContainerSmall>
    </Container>
    <Border>
      <Titulo>
        {title} <Nota>{type}</Nota> <Star src={EstrelaImg} />
      </Titulo>
      <Descricao>{description}</Descricao>
      <TagBig>Saiba mais</TagBig>
    </Border>
  </Card>
)

export default Product
