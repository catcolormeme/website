import { SerializedFarmConfig } from '@pancakeswap/farms'

const farms: SerializedFarmConfig[] = [
  // {
  //   pid: 4,
  //   lpSymbol: 'ICE-USDTi LP',
  //   lpAddress: '0x460dc5054d0afb419832bcfb087fd0ba2e63e0ea',
  //   token: bitgertTokens.ice,
  //   quoteToken: bitgertTokens.usdti,
  // },
].map((p) => ({ ...p, token: p.token.serialize, quoteToken: p.quoteToken.serialize }))

export default farms
