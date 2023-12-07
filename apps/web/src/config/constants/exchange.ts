import { ChainId, JSBI, Percent, Token } from '@pancakeswap/sdk'
import { BigNumber } from '@ethersproject/bignumber'
import {
  whaleTokens,
  bscTestnetTokens,
  bscTokens,
} from '@pancakeswap/tokens';
import { ChainMap, ChainTokenList, RouterAddressTypes } from './types'

export const ROUTER_ADDRESS_COMMON = '0xBb5e1777A331ED93E07cF043363e48d320eb96c4'
export const ROUTER_ADDRESS_COMMON_AKKA_BITGERT = '0x25507a7323b04FD2687E72875aC4456C95782915'
export const ROUTER_ADDRESS_COMMON_AKKA_XDC = '0x8AB50AC5b3Ce4436Ad15EBA720a6e6264D3321A8'
export const ROUTER_ADDRESS_COMMON_AKKA_CORE = '0x5f3B7b49c5763045a6571dEe9A2b13ccd2407daA'
export const ROUTER_ADDRESS_COMMON_AKKA_TELOS = '0x67770F918D1F7Fac8eaA2266977bA81D8F46d300'
export const ROUTER_ADDRESS_COMMON_AKKA_BASE = '0xF84f39714E11A8031Ad4c5D5B4437E3b5d81b6F2'

export const ROUTER_ADDRESS: Partial<ChainMap<RouterAddressTypes>> = {
  [ChainId.BSC_TESTNET]: {
    Icecream: '0x174114C8110b4A0CdF6202f60bE782b4cB3965d6',
  },
  [ChainId.BSC]: {
    Icecream: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
  },
}

// used to construct intermediary pairs for trading
export const BASES_TO_CHECK_TRADES_AGAINST: Partial<ChainTokenList> = {
  [ChainId.BSC_TESTNET]: [bscTestnetTokens.usdt, bscTestnetTokens.wbnb],
  [ChainId.BSC]: [bscTokens.usdt, bscTokens.wbnb]
}

/**
 * Additional bases for specific tokens
 * @example { [WBTC.address]: [renBTC], [renBTC.address]: [WBTC] }
 */
export const ADDITIONAL_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {}

/**
 * Some tokens can only be swapped via certain pairs, so we override the list of bases that are considered for these
 * tokens.
 * @example [AMPL.address]: [DAI, WNATIVE[ChainId.BSC]]
 */
export const CUSTOM_BASES: { [chainId in ChainId]?: { [tokenAddress: string]: Token[] } } = {}

// used for display in the default list when adding liquidity
export const SUGGESTED_BASES: Partial<ChainTokenList> = {
  [ChainId.BSC_TESTNET]: [bscTestnetTokens.usdt, bscTestnetTokens.wbnb],
  [ChainId.BSC]: [bscTokens.usdt, bscTokens.wbnb],
}

// used to construct the list of all pairs we consider by default in the frontend
export const BASES_TO_TRACK_LIQUIDITY_FOR: Partial<ChainTokenList> = {
  [ChainId.BSC_TESTNET]: [bscTestnetTokens.usdt, bscTestnetTokens.wbnb],
  [ChainId.BSC]: [bscTokens.usdt, bscTokens.wbnb],
}

export const PINNED_PAIRS: { readonly [chainId in ChainId]?: [Token?, Token?][] } = {
  [ChainId.BSC_TESTNET]: [
    [bscTestnetTokens.usdt, bscTestnetTokens.wbnb],
  ],
  [ChainId.BSC]: [
    [bscTokens.usdt, bscTokens.wbnb],
  ]
}

export const BIG_INT_ZERO = JSBI.BigInt(0)
export const BIG_INT_TEN = JSBI.BigInt(10)

// one basis point
export const BIPS_BASE = JSBI.BigInt(10000)
export const ONE_BIPS = new Percent(JSBI.BigInt(1), BIPS_BASE)
// used for warning states
export const ALLOWED_PRICE_IMPACT_LOW: Percent = new Percent(JSBI.BigInt(100), BIPS_BASE) // 1%
export const ALLOWED_PRICE_IMPACT_MEDIUM: Percent = new Percent(JSBI.BigInt(300), BIPS_BASE) // 3%
export const ALLOWED_PRICE_IMPACT_HIGH: Percent = new Percent(JSBI.BigInt(500), BIPS_BASE) // 5%
// if the price slippage exceeds this number, force the user to type 'confirm' to execute
export const PRICE_IMPACT_WITHOUT_FEE_CONFIRM_MIN: Percent = new Percent(JSBI.BigInt(1000), BIPS_BASE) // 10%
// for non expert mode disable swaps above this
export const BLOCKED_PRICE_IMPACT_NON_EXPERT: Percent = new Percent(JSBI.BigInt(1500), BIPS_BASE) // 15%

// used to ensure the user doesn't send so much BNB so they end up with <.01
export const MIN_BNB: JSBI = JSBI.multiply(JSBI.exponentiate(BIG_INT_TEN, JSBI.BigInt(16)), JSBI.BigInt(6)) // .06 NativeToken
export const BETTER_TRADE_LESS_HOPS_THRESHOLD = new Percent(JSBI.BigInt(50), BIPS_BASE)

export const ZERO_PERCENT = new Percent('0')
export const ONE_HUNDRED_PERCENT = new Percent('1')

export const BASE_FEE = new Percent(JSBI.BigInt(30), BIPS_BASE)
export const INPUT_FRACTION_AFTER_FEE = ONE_HUNDRED_PERCENT.subtract(BASE_FEE)

// BNB
export const DEFAULT_INPUT_CURRENCY = 'BNB'
// CAKE
export const DEFAULT_OUTPUT_CURRENCY = '0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82'

// Handler string is passed to Gelato to use PCS router
export const GELATO_HANDLER = 'pancakeswap'
export const GENERIC_GAS_LIMIT_ORDER_EXECUTION = BigNumber.from(500000)

export const LIMIT_ORDERS_DOCS_URL = 'https://docs.catcolor.live/products/pancakeswap-exchange/limit-orders'

export const EXCHANGE_PAGE_PATHS = ['/swap', '/limit-orders', 'liquidity', '/add', '/find', '/remove']
