import { useParams } from 'react-router-dom'
import HeaderCarrinho from '../../components/HeaderCarrinho'
import ProductsListBuy from '../../components/ProductsListBuy'
import BannerBuy from '../../components/BannerBuy'
import { useEffect, useState } from 'react'

export interface ItemCardapio {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export interface Restaurante {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ItemCardapio[]
}

const Categories = () => {
  const [promocoes, setPromocoes] = useState<Restaurante[]>([])
  const { id } = useParams() // Obtendo o ID da página usando useParams

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setPromocoes(res))
  }, [])

  return (
    <>
      <HeaderCarrinho />
      <BannerBuy titulo="titulo" tipo="tipo" />
      {/* Certifique-se de que 'id' seja definido antes de passá-lo como propriedade */}
      {id && (
        <ProductsListBuy title="" pageId={parseInt(id)} background="cor1" />
      )}
    </>
  )
}

export default Categories
