// import { whalechain } from "./whalechain"
import { bscTestnet } from './bscTestnet'
import { bsc } from './bsc'


export const chainMap = {
  bsc,
  // whalechain,
  // scroll,
  // bscTestnet,
}
export const chains = Object.values(chainMap)

export const getChain = (chainId: number) => {
  return chains.find((chain) => chain.id === chainId)
}

export enum ChainId {
  BSC = bsc.id,
  // WHALE = whalechain.id,
  // SCROLL = scroll.id,
  // BSC_TESTNET = bscTestnet.id,
}
