import { getAddress } from '@ethersproject/address'
import memoize from 'lodash/memoize'
import { Token } from '@pancakeswap/sdk'
import chainName from "../config/constants/chainName";


const getTokenLogoURL = memoize(
  (token?: Token) => {
    if (token && chainName[token.chainId]) {
      if(window.location.hostname === 'localhost'){
      return `http://localhost:3000/images/${token.chainId}/tokens/${getAddress(token.address)}.png`
      } 
        return `https://whalechain.live/images/${token.chainId}/tokens/${getAddress(token.address)}.png`
      
    }

    /*
    if (token && chainName[token.chainId]) {
      return `https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/${chainName[token.chainId].toLowerCase()}/assets/${getAddress(
        token.address,
      )}/logo.png`
    }
    */
    return null
  },
  (t) => `${t.chainId}#${t.address}`,
)

export default getTokenLogoURL
