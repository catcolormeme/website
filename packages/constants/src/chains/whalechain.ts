import IceChain from '../ice-chain'

export const whalechain: IceChain = {
  id: 370,
  name: 'WhaleChain (Testnet)',
  features: ['swap', 'akkaRouter', 'bridge', 'farms', 'info', 'kyc', 'locks', 'staking', 'launchpad', 'tokenDeployer'],
  // features: ['swap', 'akkaRouter', 'bridge', 'info', 'farms', 'staking', 'locks', 'kyc'],
  network: 'whalechain',
  rpcUrls: {
    public: 'https://testnet.whalechain.live',
    default: 'https://testnet.whalechain.live',
  },
  blockExplorers: {
    default: { name: 'WhaleChainExplorer', url: 'https://explorer.whalechain.live' },
  },
  nativeCurrency: {
    name: 'Whale',
    symbol: 'WHALE',
    decimals: 18,
  },
  blockInterval: 15,
  multicall: {
    address: '0x7AE000f42443425D064d097c9aDE44f17654A09F',
    blockCreated: 211852,
  },
  locks: {
    factoryAddress: '0x9Cf1e91106CA675040a4eC9647f875785bCcAB71',
  },
  tokenDeployerDividend: {
    address: '0x5c39F20A0d75Cc8695cfBa8d97178aB64e60d848',
    feeToken: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44',
  },
  wrappedNative: {
    address: '0x10e9B2b7d1D2838a594B28d67c9481cc6419Ce45',
    decimals: 18,
    symbol: 'wWHALE',
    name: 'Wrapped Whale',
  },
  swap: {
    factoryAddress: '0x65fAE4c4571DA647ca5A6C3e32c832F3f0CAC74e',
    initCodeHash: '0x0168a4c1cffa0b0cba36f7e25f59660fa88c981095ca7dd04b93a8b93757392e',
  },
  campaignFactory: '0x79218D6d562a435ec258f2f4D8D17f1DEbbb114a',
  kyc: {
    feeToken: '0xc0E49f8C615d3d4c245970F6Dc528E4A47d69a44',
    fee: 10,
    feeWallet: '0x2Bfd1fc5e25a8F55C2E849492ad7966EA8A0dd9E',
    contractKyced: '0x913E332d552b98355587BBa82b1256BCAdbCeD48',
    contractKycDelegator: '0x682EAb822E5896dF1cD33C1Cd6EE99a3154Dd47E',
    contractKycDelegations: '0x790C138B110Bfb517cE5FaB8CF1a51ffDaAa9754',
  },
}
