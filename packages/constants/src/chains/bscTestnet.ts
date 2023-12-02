import IceChain from '../ice-chain'

const bscExplorer = { name: 'BscScan (Testnet)', url: 'https://testnet.bscscan.com' }

export const bscTestnet: IceChain = {
  id: 97,
  name: 'BNB (Testnet)',
  features: ['bridge', 'swap'],
  network: 'binanceTestnet',
  rpcUrls: {
    public: 'https://data-seed-prebsc-1-s2.bnbchain.org:8545',
    default: 'https://data-seed-prebsc-1-s2.bnbchain.org:8545',
  },
  blockExplorers: {
    default: bscExplorer,
    etherscan: bscExplorer,
  },
  nativeCurrency: {
    name: 'Binance Chain Native Token',
    symbol: 'BNB',
    decimals: 18,
  },
  blockInterval: 3,
  multicall: {
    address: '0x8d7d51BE15DaFA8cc9D6aAa5476568536047E80b', // https://testnet.bscscan.com/address/0xc6617D53C021F2Be7C903df91afaeE1A55433171
    blockCreated: 35247418,
  }, 
  swap: {
    factoryAddress: '0xE01Ff2a8D4D907c4E4c53e722812120b8D82C6Bf', // https://testnet.bscscan.com/address/0x3597320B0c48304ec2aB63066BacB323e4AC8cCC
    initCodeHash: '0x0168a4c1cffa0b0cba36f7e25f59660fa88c981095ca7dd04b93a8b93757392e',
  },
  wrappedNative: {
    address: '0xae13d989daC2f0dEbFf460aC112a837C89BAa7cd',
    decimals: 18,
    symbol: 'WBNB',
    name: 'Wrapped BNB',
  },
}
