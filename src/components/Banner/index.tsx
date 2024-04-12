import { Imagem, Titulo, Precos } from './styles'

import bannerImg from '../../assets/images/banner.png'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}></Imagem>
)

export default Banner
