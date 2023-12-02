import { chains } from '@icecreamswap/constants'
import { useActiveChainId } from './useActiveChainId'

export const useActiveChain = () => {
  const { chainId } = useActiveChainId()
  return chains.find((chain) => chain.id === chainId)
}
