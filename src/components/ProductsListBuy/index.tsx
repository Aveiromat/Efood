import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Restaurante } from '../../pages/Home'
import ProductBuy from '../ProductBuy'
import { Container, List } from './styles'

export interface ItemCardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Props {
  title: string
  background: 'cor3' | 'cor1'
  pageId: number
}

const ProductsListBuy = ({ background, title }: Props) => {
  const [restaurants, setRestaurants] = useState<Restaurante[]>([])
  const { id } = useParams() // Obtendo o ID da página usando useParams

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  // Filtrando os restaurantes com base no id da URL
  const filteredRestaurants = restaurants.filter(
    (restaurant) => restaurant.id.toString() === id
  )

  return (
    <Container background={background}>
      <div className="container">
        <h2>{title}</h2>
        <List>
          {filteredRestaurants.map((restaurant) => (
            <div key={restaurant.id}>
              <h3>{restaurant.titulo}</h3>
              {restaurant.cardapio.map((item) => (
                <ProductBuy
                  key={item.id}
                  category={restaurant.tipo}
                  description={item.descricao}
                  image={item.foto}
                  type={restaurant.avaliacao}
                  title={item.nome}
                  id={item.id}
                />
              ))}
            </div>
          ))}
        </List>
      </div>
    </Container>
  )
}

export default ProductsListBuy
