import { BigNumber } from '@ethersproject/bignumber'
import { SerializedPoolConfig } from './types'

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('20000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {} as const

export const livePools: SerializedPoolConfig[] = [
  // souceId can be any positive number as long as it is unique and not 0
  // version can't be 3 as that uses the pancake profiles that we did not implement
  // {
  //   sousId: 41,
  //   stakingToken: bitgertTokens.lung,
  //   earningToken: bitgertTokens.lung,
  //   contractAddress: {
  //     32520: '0xaf4de2a3375dc718edbbad2ce207a08ad9e70086',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '3.99106',
  //   version: 2,
  // },
  // {
  //   sousId: 4,
  //   stakingToken: bitgertTokens.miidas,
  //   earningToken: bitgertTokens.miidas,
  //   contractAddress: {
  //     32520: '0xf4c78d403527ba2fb67ab599efea0a739d3d6547',
  //   },
  //   poolCategory: PoolCategory.CORE,
  //   tokenPerBlock: '12.5',
  //   version: 2,
  // },
  /*
  {
    sousId: 17,
    stakingToken: coreTokens.ice,
    earningToken: coreTokens.royale,
    contractAddress: {
      1116: '0x6ebcb39fa52253ec702518981b6449182e70dc74',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '4398148',
    version: 2,
  },
  {
    sousId: 18,
    stakingToken: coreTokens.royale,
    earningToken: coreTokens.royale,
    contractAddress: {
      1116: '0x18e1fee6da6af48296dfb1f9d8da9e3cc65aa35e',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '5657696',
    version: 2,
  },
    */
].map((p) => ({
  ...p,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

// known finished pools
const finishedPools = [].map((p) => ({
  ...p,
  isFinished: true,
  stakingToken: p.stakingToken.serialize,
  earningToken: p.earningToken.serialize,
}))

export default [...livePools, ...finishedPools]
