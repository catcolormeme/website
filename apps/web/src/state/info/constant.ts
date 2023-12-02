import { infoStableSwapClient } from '../../utils/graphql'
import {
  INFO_CLIENT_BITGERT,
  BLOCKS_CLIENT_BITGERT,
  INFO_CLIENT_BSC,
  BLOCKS_CLIENT_BSC,
} from "../../config/constants/endpoints";
import { ChainId } from '@pancakeswap/sdk'
import {
  PCS_BITGERT_START,
  PCS_CORE_START,
  PCS_SCROLL_START,
  PCS_XDC_START,
  PCS_TELOS_START,
  PCS_BASE_START,
  PCS_SHIMMER_START,
  PCS_BSC_START,
} from "../../config/constants/info";
import { GraphQLClient } from 'graphql-request'

export type MultiChainName = 'WHALE' | 'BSC TESTNET' | 'DOGECHAIN' | 'DOKEN' | 'FUSE' | 'XDC' | 'BSC' | 'CORE' | 'XODEX' | 'SCROLL' | 'TELOS' | 'BASE' | 'SHIMMER'

export const multiChainQueryMainToken = {
  WHALE: 'ETH',
  XDC: 'ETH',
  CORE: 'ETH',
  SCROLL: 'ETH',
  TELOS: 'ETH',
  BASE: 'ETH',
  SHIMMER: 'ETH',
  BSC: 'BNB',
}

export const multiChainBlocksClient = {
  WHALE: BLOCKS_CLIENT_BITGERT,
  BSC: BLOCKS_CLIENT_BSC,
}

export const multiChainStartTime = {
  WHALE: PCS_BITGERT_START,
  XDC: PCS_XDC_START,
  CORE: PCS_CORE_START,
  SCROLL: PCS_SCROLL_START,
  TELOS: PCS_TELOS_START,
  BASE: PCS_BASE_START,
  SHIMMER: PCS_SHIMMER_START,
  BSC: PCS_BSC_START,
}

export const multiChainId = {
  WHALE: ChainId.WHALE,
  BSC: ChainId.BSC,
}

export const multiChainPaths = {
  [ChainId.WHALE]: '',
  [ChainId.BSC]: '',
}

// @ts-ignore fix missing queryClients
export const multiChainQueryClient: Record<MultiChainName, GraphQLClient> = {
  WHALE: new GraphQLClient(INFO_CLIENT_BITGERT),
  SCROLL: new GraphQLClient(INFO_CLIENT_BSC),
  BSC: new GraphQLClient(INFO_CLIENT_BSC),
}

export const multiChainQueryEndPoint = {
  WHALE: INFO_CLIENT_BITGERT,
  SCROLL: INFO_CLIENT_BSC,
  BSC: INFO_CLIENT_BSC,
}

export const multiChainScan = {
  WHALE: 'WhaleScan',
  BSC: 'BscScan',
}

export const multiChainTokenBlackList = {
  WHALE: [''],
  BSC: [''],
}

export const getMultiChainQueryEndPointWithStableSwap = (chainName: MultiChainName) => {
  const isStableSwap = checkIsStableSwap()
  if (isStableSwap) return infoStableSwapClient
  return multiChainQueryClient[chainName]
}

export const checkIsStableSwap = () => window.location.href.includes('stableSwap')
