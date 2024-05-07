import { Imagem, Titulo, Precos, Alinhar } from './styles'

export type Props = {
  titulo: string
  tipo: string
}

import LaDolceCapa from '../../assets/images/LaDolceCapa.png'

const BannerBuy = ({ titulo, tipo }: Props) => (
  <Imagem style={{ backgroundImage: `url(${LaDolceCapa})` }}>
    <Alinhar>
      <Precos>{tipo}</Precos>
      <Titulo>{titulo}</Titulo>
    </Alinhar>
  </Imagem>
)

export default BannerBuy
