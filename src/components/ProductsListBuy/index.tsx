import Clothing from '../../models/Clothing'
import ProductBuy from '../ProductBuy'

import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'cor3' | 'cor1'
  clothes: Clothing[]
}

const ProductsList = ({ background, title, clothes }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        {clothes.map((clothing) => (
          <ProductBuy
            key={clothing.id}
            category={clothing.category}
            description={clothing.description}
            image={clothing.image}
            infos={clothing.infos}
            type={clothing.type}
            title={clothing.title}
          />
        ))}
      </List>
    </div>
  </Container>
)

export default ProductsList
