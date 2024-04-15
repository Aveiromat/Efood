import { Link } from 'react-router-dom'

import { HeaderBar, Links, LinkItem, LinkCart, Logo, Fundo } from './styles'

import efood from '../../assets/images/efood.png'
import fundo from '../../assets/images/fundo.png'

const HeaderCarrinho = () => (
  <HeaderBar>
    <Fundo style={{ backgroundImage: `url(${fundo})` }}>
      <Links>
        <LinkItem>
          <Link to="/">Restaurantes</Link>
        </LinkItem>
      </Links>
      <Links>
        <LinkItem>
          <Link to="/">
            <Logo src={efood} />
          </Link>
        </LinkItem>
      </Links>
      <LinkCart href="#">0 produtos(s) no carrinho</LinkCart>
    </Fundo>
  </HeaderBar>
)

export default HeaderCarrinho
