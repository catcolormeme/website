import IceChain from '../ice-chain'

const bscExplorer = { name: 'BscScan', url: 'https://bscscan.com' }

export const bsc: IceChain = {
  id: 56,
  name: 'BNB Smart Chain',
  features: ['swap', 'info'],
  network: 'binance',
  rpcUrls: {
    public: 'https://bscrpc.com',
    default: 'https://bscrpc.com',
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
    address: '0xCb3B1E92Fc0a39b23b69379c94FC99b2CF2Fc6fe',
    blockCreated: 33902366,
  },
  swap: {
    factoryAddress: '0xcA143Ce32Fe78f1f7019d7d551a6402fC5350c73',
    initCodeHash: '0x00fb7f630766e6a796048ea87d01acd3068e8ff67d078148a3fa3f4a84f69bd5',
  },
  wrappedNative: {
    address: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    decimals: 18,
    symbol: 'WBNB',
    name: 'Wrapped BNB',
  },
}
