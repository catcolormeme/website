import { ChainId, ERC20Token, NATIVE, WETH9 } from '@pancakeswap/sdk'

export const bscTestnetTokens = {
  bnb: NATIVE[ChainId.BSC_TESTNET],
  wbnb: WETH9[ChainId.BSC_TESTNET],
  usdt: new ERC20Token(ChainId.BSC_TESTNET, '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd', 18, 'USDT', 'Tether USD')
}
