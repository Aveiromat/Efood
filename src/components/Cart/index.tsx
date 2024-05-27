import React, { useState } from 'react'
import Button from '../Button'
import { Overlay, CartContainer, Sidebar, Prices, CartItem } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const [currentStep, setCurrentStep] = useState(1)

  const closeCart = () => {
    dispatch(close())
  }

  const getTotalPrice = () => {
    return items.reduce((acumulador, valorAtual) => {
      return (acumulador += valorAtual.preco!)
    }, 0)
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  const finaliza = () => {
    dispatch(close())
  }

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1)
  }

  const handlePreviousStep = () => {
    setCurrentStep(currentStep - 1)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Sidebar>
        {currentStep === 1 && (
          <>
            <ul>
              {items.map((item) => (
                <CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{formataPreco(item.preco)}</span>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </CartItem>
              ))}
            </ul>
            <Prices>
              <span>Valor total</span> {formataPreco(getTotalPrice())}
            </Prices>
            <Button
              onClick={handleNextStep}
              title="clique aqui para continuar com a compra"
              type="button"
            >
              Continuar com a entrega
            </Button>
          </>
        )}
        {currentStep === 2 && (
          <>
            <h1>Hello World</h1>
            <Button onClick={handlePreviousStep} title="voltar" type="button">
              Voltar
            </Button>
            <Button
              onClick={handleNextStep}
              title="clique aqui para continuar"
              type="button"
            >
              Continuar
            </Button>
          </>
        )}
        {currentStep === 3 && (
          <>
            <h1>Hello World 2</h1>
            <Button onClick={handlePreviousStep} title="voltar" type="button">
              Voltar
            </Button>
            <Button
              onClick={handleNextStep}
              title="clique aqui para continuar"
              type="button"
            >
              Continuar
            </Button>
          </>
        )}
        {currentStep === 4 && (
          <>
            <h1>Pedido realizado - ORDER_ID</h1>
            <h3>
              Estamos felizes em informar que seu pedido já está em processo de
              preparação e, em breve, será entregue no endereço fornecido.{' '}
              <br />
              Gostaríamos de ressaltar que nossos entregadores não estão
              autorizados a realizar cobranças extras. <br />
              Lembre-se da importância de higienizar as mãos após o recebimento
              do pedido, garantindo assim sua segurança e bem-estar durante a
              refeição. <br />
              Esperamos que desfrute de uma deliciosa e agradável experiência
              gastronômica. Bom apetite! <br />
            </h3>
            <Button onClick={finaliza} title="concluir" type="button">
              Concluir
            </Button>
          </>
        )}
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
