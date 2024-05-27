import { useState } from 'react'
import Button from '../Button'
import {
  Overlay,
  CartContainer,
  Sidebar,
  Prices,
  CartItem,
  InputGroup,
  Row,
  NextPrevious,
  Fracao
} from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { close, remove, finish } from '../../store/reducers/cart'
import { formataPreco } from '../ProductsList'
import Card from '../Card'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()
  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

  const form = useFormik({
    initialValues: {
      fullName: '',
      address: '',
      city: '',
      cep: '',
      homeNumber: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cardCode: ''
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório.'),
      address: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório.'),
      city: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório.'),
      cep: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório.'),
      homeNumber: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório.'),
      complement: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório.'),

      cardDisplayName: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório.'),
      cardNumber: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório.'),
      expiresMonth: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório.'),
      expiresYear: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório.'),
      cardCode: Yup.string()
        .min(5, 'O campo precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório.')
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          name: values.fullName,
          adress: '',
          city: '',
          cep: '',
          homeNumber: ''
        },
        payment: {
          card: {
            code: Number(values.cardCode),
            name: values.cardDisplayName,
            number: values.cardNumber,
            expires: {
              month: 1,
              year: 2023
            }
          }
        },
        products: [
          {
            id: 1,
            price: 10
          }
        ]
      })
    }
  })

  const getErrorMessage = (fieldName: string, message?: string) => {
    const isTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors

    if (isTouched && isInvalid) return message
    return ''
  }

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

  const posta = () => {
    form.handleSubmit()
    setCurrentStep(currentStep + 1)
  }

  const finaliza = () => {
    dispatch(finish())
    dispatch(close())
    setCurrentStep(1)
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
        <form>
          {currentStep === 1 && (
            <>
              {items.length === 0 ? (
                <h3>O carrinho está vazio, por favor adicione algum item.</h3>
              ) : (
                <>
                  <ul>
                    {items.map((item) => (
                      <CartItem key={item.id}>
                        <img src={item.foto} alt={item.nome} />
                        <div>
                          <h3>{item.nome}</h3>
                          <span>{formataPreco(item.preco)}</span>
                        </div>
                        <button
                          onClick={() => removeItem(item.id)}
                          type="button"
                        />
                      </CartItem>
                    ))}
                  </ul>
                  <Prices>
                    <span>Valor total</span> {formataPreco(getTotalPrice())}
                  </Prices>
                  <NextPrevious>
                    <Button
                      onClick={handleNextStep}
                      title="clique aqui para continuar com a compra"
                      type="button"
                    >
                      Continuar com a entrega
                    </Button>
                    <Button onClick={closeCart} title="Voltar" type="button">
                      Voltar
                    </Button>
                  </NextPrevious>
                </>
              )}
            </>
          )}
          {currentStep === 2 && (
            <>
              <Card title="Entrega">
                <Row>
                  <InputGroup>
                    <label htmlFor="fullName">Quem irá receber</label>
                    <input
                      id="fullName"
                      type="text"
                      name="fullName"
                      value={form.values.fullName}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                    />
                    <small>
                      {getErrorMessage('fullName', form.errors.fullName)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="address">Endereço</label>
                    <input
                      id="address"
                      type="text"
                      name="address"
                      value={form.values.address}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                    />
                    <small>
                      {getErrorMessage('address', form.errors.address)}
                    </small>
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="city">Cidade</label>
                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={form.values.city}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                    />
                    <small>{getErrorMessage('city', form.errors.city)}</small>
                  </InputGroup>
                  <Fracao>
                    <InputGroup>
                      <label htmlFor="cep">CEP</label>
                      <input
                        id="cep"
                        type="text"
                        name="cep"
                        value={form.values.cep}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                      />
                      <small>{getErrorMessage('cep', form.errors.cep)}</small>
                    </InputGroup>
                    <InputGroup>
                      <label htmlFor="homeNumber">Número</label>
                      <input
                        id="homeNumber"
                        type="text"
                        name="homeNumber"
                        value={form.values.homeNumber}
                        onBlur={form.handleBlur}
                        onChange={form.handleChange}
                      />
                      <small>
                        {getErrorMessage('homeNumber', form.errors.homeNumber)}
                      </small>
                    </InputGroup>
                  </Fracao>
                  <InputGroup>
                    <label htmlFor="complement">Complemento (opcional)</label>
                    <input
                      id="complement"
                      type="text"
                      name="complement"
                      value={form.values.complement}
                      onBlur={form.handleBlur}
                      onChange={form.handleChange}
                    />
                  </InputGroup>
                </Row>
              </Card>
              <NextPrevious>
                <Button
                  onClick={handleNextStep}
                  title="Continuar com o pagamento"
                  type="button"
                >
                  Continuar com o pagamento
                </Button>
                <Button
                  onClick={form.handleSubmit}
                  title="Voltar para o carrinho"
                  type="button"
                >
                  Voltar para o carrinho
                </Button>
              </NextPrevious>
            </>
          )}
          {currentStep === 3 && (
            <>
              <Card title="Pagamento">
                <Row>
                  <InputGroup>
                    <h1>ooiiee ani</h1>
                  </InputGroup>
                </Row>
              </Card>
              <NextPrevious>
                <Button
                  onClick={handlePreviousStep}
                  title="voltar"
                  type="button"
                >
                  Voltar
                </Button>
                <Button
                  onClick={handleNextStep}
                  title="clique aqui para continuar"
                  type="button"
                >
                  Continuar
                </Button>
              </NextPrevious>
            </>
          )}
          {currentStep === 4 && (
            <>
              <h1>Pedido realizado - ORDER_ID</h1>
              <h3>
                Estamos felizes em informar que seu pedido já está em processo
                de preparação e, em breve, será entregue no endereço fornecido.{' '}
                <br />
                Gostaríamos de ressaltar que nossos entregadores não estão
                autorizados a realizar cobranças extras. <br />
                Lembre-se da importância de higienizar as mãos após o
                recebimento do pedido, garantindo assim sua segurança e
                bem-estar durante a refeição. <br />
                Esperamos que desfrute de uma deliciosa e agradável experiência
                gastronômica. Bom apetite! <br />
              </h3>
              <Button onClick={finaliza} title="concluir" type="button">
                Concluir
              </Button>
            </>
          )}
        </form>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
