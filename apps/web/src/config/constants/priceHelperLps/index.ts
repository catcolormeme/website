import { getFarmsPriceHelperLpFiles } from '@pancakeswap/farms'
import { ChainId } from '@pancakeswap/sdk'
import PoolsWhaleChainPriceHelper from './pools/370'
// import PoolsCorePriceHelper from './pools/1116'

export { getFarmsPriceHelperLpFiles }

export const getPoolsPriceHelperLpFiles = (chainId: ChainId) => {
  switch (chainId) {
    case ChainId.WHALE:
      return PoolsWhaleChainPriceHelper
    // case ChainId.CORE:
    //   return PoolsCorePriceHelper
    default:
      return []
  }
}
