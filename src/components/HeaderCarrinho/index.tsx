import { Link } from 'react-router-dom'

import {
  HeaderBar,
  Links,
  LinkItem,
  LinkCart,
  Logo,
  Fundo,
  LinksLogo
} from './styles'

import efood from '../../assets/images/efood.png'
import fundo from '../../assets/images/fundo.png'

const HeaderCarrinho = () => (
  <HeaderBar style={{ backgroundImage: `url(${fundo})` }}>
    <Fundo>
      <Links>
        <LinkItem>
          <Link to="/">Restaurantes</Link>
        </LinkItem>
      </Links>
      <LinksLogo>
        <LinkItem>
          <Link to="/">
            <Logo src={efood} />
          </Link>
        </LinkItem>
      </LinksLogo>
      <LinkCart href="#">0 produtos(s) no carrinho</LinkCart>
    </Fundo>
  </HeaderBar>
)

export default HeaderCarrinho
