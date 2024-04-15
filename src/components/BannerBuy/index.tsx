import { Imagem, Titulo, Precos } from './styles'

import LaDolceCapa from '../../assets/images/LaDolceCapa.png'

const BannerBuy = () => (
  <Imagem style={{ backgroundImage: `url(${LaDolceCapa})` }}>
    <Precos>Italiana</Precos>
    <Titulo>La Dolce Vita Trattoria</Titulo>
  </Imagem>
)

export default BannerBuy
