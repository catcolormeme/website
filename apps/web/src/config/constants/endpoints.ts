import { ChainId } from '@pancakeswap/sdk'

export const STABLESWAP_SUBGRAPH_CLIENT = 'https://api.thegraph.com/subgraphs/name/pancakeswap/exchange-stableswap'
export const GRAPH_HEALTH = 'https://the-graph-status.catcolor.live/graphql'

export const FARM_API = 'https://farms.pancake-swap.workers.dev'

export const BIT_QUERY = 'https://graphql.bitquery.io'

export const ACCESS_RISK_API = 'https://red.alert.pancakeswap.com/red-api'

export const CELER_API = 'https://api.celerscan.com/scan'

export const INFO_CLIENT_WITH_CHAIN = {
  [ChainId.BSC]: 'https://data-platform.nodereal.io/graph/v1/56f4b622f393460e8a3afa5701209816/projects/pancakeswap',
}

export const BLOCKS_CLIENT_WITH_CHAIN: Partial<Record<ChainId, string>> = {
  [ChainId.BSC]: 'https://api.thegraph.com/subgraphs/name/pancakeswap/blocks',
}

export const INFO_CLIENT_BSC = INFO_CLIENT_WITH_CHAIN[ChainId.BSC]
export const BLOCKS_CLIENT_BSC = BLOCKS_CLIENT_WITH_CHAIN[ChainId.BSC]
