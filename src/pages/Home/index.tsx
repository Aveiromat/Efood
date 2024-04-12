import Clothing from '../../models/Clothing'
import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import macarrao from '../../assets/images/macarrao.png'
import sushi from '../../assets/images/sushi.png'
import nota from '../../assets/images/nota.png'

const promocoes: Clothing[] = [
  {
    id: 1,
    category: 'Saiba mais',
    description: 'teste32131',
    title: 'bag vans',
    type: 'bag',
    infos: ['Destaque da semana', 'R$ 250,00'],
    image: macarrao
  },
  {
    id: 2,
    category: 'Saiba mais',
    description: 'teste32131',
    title: 'bag vans2',
    type: 'bag',
    infos: ['10%', 'R$ 250,00'],
    image: macarrao
  },
  {
    id: 3,
    category: 'Saiba mais',
    description: 'teste32131',
    title: 'bag vans3',
    type: 'bag',
    infos: ['10%', 'R$ 250,00'],
    image: macarrao
  },
  {
    id: 4,
    category: 'Saiba mais',
    description: 'teste32131',
    title: 'bag vans4',
    type: 'bag',
    infos: ['10%', 'R$ 250,00'],
    image: macarrao
  }
]

const lancamentos: Clothing[] = [
  {
    id: 1,
    category: 'Saiba mais',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    title: 'Hioki Sushi',
    type: nota,
    infos: ['Destaque da semana', 'Japonesa'],
    image: sushi
  },
  {
    id: 2,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    type: nota,
    infos: ['Italiana'],
    image: macarrao
  },
  {
    id: 3,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    type: nota,
    infos: ['Italiana'],
    image: macarrao
  },
  {
    id: 4,
    category: 'Saiba mais',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    title: 'La Dolce Vita Trattoria',
    type: nota,
    infos: ['Italiana'],
    image: macarrao
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList clothes={lancamentos} title="" background="cor3" />
  </>
)

export default Home
