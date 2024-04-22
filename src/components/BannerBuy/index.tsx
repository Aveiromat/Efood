import { Imagem, Titulo, Precos, Alinhar } from './styles'

import LaDolceCapa from '../../assets/images/LaDolceCapa.png'

const BannerBuy = () => (
  <Imagem style={{ backgroundImage: `url(${LaDolceCapa})` }}>
    <Alinhar>
      <Precos>Italiana</Precos>
      <Titulo>La Dolce Vita Trattoria</Titulo>
    </Alinhar>
  </Imagem>
)

export default BannerBuy
