import { ChainId } from '@pancakeswap/sdk'

const chainName: Record<ChainId, string> = {
  [ChainId.WHALE]: 'WhaleChain',
  [ChainId.BSC]: 'Binance',
  [ChainId.BSC_TESTNET]: 'Binance Testnet',
}

export default chainName
