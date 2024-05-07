import { useParams } from 'react-router-dom'

import Clothing from '../../models/Clothing'

import HeaderCarrinho from '../../components/HeaderCarrinho'
import pizza from '../../assets/images/pizza.png'
import ProductsListBuy from '../../components/ProductsListBuy'
import BannerBuy from '../../components/BannerBuy'
import Buy from '../../components/Buy'

const promocoes: Clothing[] = [
  {
    id: 1,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: [],
    image: pizza
  },
  {
    id: 2,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita2',
    infos: [],
    image: pizza
  },
  {
    id: 3,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita3',
    infos: [],
    image: pizza
  },
  {
    id: 4,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita4',
    infos: [],
    image: pizza
  },
  {
    id: 5,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita5',
    infos: [],
    image: pizza
  },
  {
    id: 6,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita6',
    infos: [],
    image: pizza
  }
]

const lancamentos: Clothing[] = [
  {
    id: 1,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita',
    infos: [],
    image: pizza
  },
  {
    id: 2,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita2',
    infos: [],
    image: pizza
  },
  {
    id: 3,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita3',
    infos: [],
    image: pizza
  },
  {
    id: 4,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita4',
    infos: [],
    image: pizza
  },
  {
    id: 5,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita5',
    infos: [],
    image: pizza
  },
  {
    id: 6,
    category: 'Adicionar ao carrinho',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    title: 'Pizza Marguerita6',
    infos: [],
    image: pizza
  }
]

const Categories = () => {
  const { id } = useParams()

  return (
    <>
      <HeaderCarrinho />
      <BannerBuy titulo="titulo" tipo="tipo" />
      <h1>{id}</h1>
      <ProductsListBuy clothes={promocoes} title="" background="cor1" />
      <Buy></Buy>
    </>
  )
}

export default Categories
