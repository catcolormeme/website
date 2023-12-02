import {ChainId} from '@pancakeswap/sdk'
import FarmsBitgertPriceHelper from './370'

// todo: make dynamic
export const getFarmsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.WHALE:
      return FarmsBitgertPriceHelper
    default:
      return []
  }
}
