import { infoStableSwapClient } from '../../utils/graphql'
import {
  INFO_CLIENT_BSC,
  BLOCKS_CLIENT_BSC,
} from "../../config/constants/endpoints";
import { ChainId } from '@pancakeswap/sdk'
import {
  PCS_BSC_START,
} from "../../config/constants/info";
import { GraphQLClient } from 'graphql-request'

export type MultiChainName = 'WHALE' | 'BSC TESTNET' | 'BSC' | 'DOGECHAIN' | 'DOKEN' | 'FUSE' | 'XDC' | 'BSC' | 'CORE' | 'XODEX' | 'SCROLL' | 'TELOS' | 'BASE' | 'SHIMMER'

export const multiChainQueryMainToken = {
  BSC: 'BNB',
}

export const multiChainBlocksClient = {
  // WHALE: BLOCKS_CLIENT_BITGERT,
  BSC: BLOCKS_CLIENT_BSC,
}

export const multiChainStartTime = {
  // WHALE: PCS_BITGERT_START,
  BSC: PCS_BSC_START,
}

export const multiChainId = {
  // WHALE: ChainId.WHALE,
  BSC: ChainId.BSC,
}

export const multiChainPaths = {
  // [ChainId.WHALE]: '',
  [ChainId.BSC]: '',
}

// @ts-ignore fix missing queryClients
export const multiChainQueryClient: Record<MultiChainName, GraphQLClient> = {
  // WHALE: new GraphQLClient(INFO_CLIENT_BITGERT),
  SCROLL: new GraphQLClient(INFO_CLIENT_BSC),
  BSC: new GraphQLClient(INFO_CLIENT_BSC),
}

export const multiChainQueryEndPoint = {
  // WHALE: INFO_CLIENT_BITGERT,
  SCROLL: INFO_CLIENT_BSC,
  BSC: INFO_CLIENT_BSC,
}

export const multiChainScan = {
  // WHALE: 'WhaleScan',
  BSC: 'BscScan',
}

export const multiChainTokenBlackList = {
  // WHALE: [''],
  BSC: [''],
}

export const getMultiChainQueryEndPointWithStableSwap = (chainName: MultiChainName) => {
  const isStableSwap = checkIsStableSwap()
  if (isStableSwap) return infoStableSwapClient
  return multiChainQueryClient[chainName] ? multiChainQueryClient[chainName] : multiChainQueryClient.BSC
}

export const checkIsStableSwap = () => window.location.href.includes('stableSwap')
