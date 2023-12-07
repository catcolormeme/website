const chains = [
  {
    domainId: 2,
    networkId: 370,
    name: 'WhaleChain',
    decimals: 18,
    bridgeAddress: '0x13B59549AD625FA2F15885221dbcd2aADb0D5Ffe',
    rpcUrl: 'https://testnet.catcolor.live',
    type: 'Ethereum',
    nativeTokenSymbol: 'Whale',
    tokens: [
      {
        address: '0x9659B2FbAfcb2E3A6792B90d8DEF38bB826208fc',
        name: 'WBNB',
        symbol: 'WBNB',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5000000',
      },
      {
        address: '0xd45EE3C021e579dAa5cb28a5B4Bf8562b779feF1',
        name: 'USDT',
        symbol: 'USDT',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f3000000',
      },
    ],
  },
  {
    domainId: 3,
    networkId: 97,
    name: 'BscTestnet',
    decimals: 18,
    bridgeAddress: '0x4F0c2959689B1411eFbf7aa84490B18d6e210613',
    rpcUrl: 'https://data-seed-prebsc-1-s1.binance.org:8545',
    type: 'Ethereum',
    nativeTokenSymbol: 'BNB',
    tokens: [
      {
        address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
        name: 'WBNB',
        symbol: 'WBNB',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f5000000',
      },
      {
        address: '0x337610d27c682E347C9cD60BD4b3b107C9d34dDd',
        name: 'USDT',
        symbol: 'USDT',
        imageUri:
          'https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png',
        resourceId: '0x000000000000000000000000000000c76ebe4a02bbc34786d860b355f3000000',
      },
    ],
  },
]

export type BridgeChain = typeof chains[number]
export type TokenConfig = BridgeChain['tokens'][number]

export const bridgeChains = chains as BridgeChain[]
