import { ChainId, WETH9, ERC20Token, NATIVE } from '@pancakeswap/sdk'

export const whaleTokens = {
  whale: NATIVE[ChainId.WHALE],
  wwhale: WETH9[ChainId.WHALE],
  usdt: new ERC20Token(ChainId.WHALE, '0xd45EE3C021e579dAa5cb28a5B4Bf8562b779feF1', 18, 'USDT', 'Tether USD'),
  wbnb: new ERC20Token(
    ChainId.WHALE,
    '0x9659B2FbAfcb2E3A6792B90d8DEF38bB826208fc',
    18,
    'WBNB',
    'WBNB',
    'https://www.binance.com/',
  ),
}
