import { ChainId, ERC20Token } from '@pancakeswap/sdk'
import { whaleTokens } from './370'
import { bscTestnetTokens } from './97';
import { bscTokens } from './56';

export const USD: Record<ChainId, ERC20Token> = {
  [ChainId.WHALE]: whaleTokens.usdt,
  [ChainId.BSC]: bscTokens.usdt,
  [ChainId.BSC_TESTNET]: bscTestnetTokens.usdt,
}
