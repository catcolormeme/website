import {ChainId} from '@pancakeswap/sdk'

// todo: make dynamic
export const getFarmsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    // case ChainId.WHALE:
    //   return FarmsBitgertPriceHelper
    default:
      return []
  }
}
