import { TagContainerBuy } from './styles'

export type Props = {
  size?: 'small' | 'big'
  children: string
}

export const Tagbuy = ({ children, size = 'small' }: Props) => (
  <TagContainerBuy size={size}>{children}</TagContainerBuy>
)

export const TagBigBuy = ({ children, size = 'big' }: Props) => (
  <TagContainerBuy size={size}>{children}</TagContainerBuy>
)
