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
        return `https://catcolor.live/images/${token.chainId}/tokens/${getAddress(token.address)}.png`
      
    }
    return null
  },
  (t) => `${t.chainId}#${t.address}`,
)

export default getTokenLogoURL
