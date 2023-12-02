import Image, { StaticImageData } from 'next/image'
import { HelpIcon } from '@pancakeswap/uikit'
import { isChainSupported } from '../../utils/wagmi'
import { memo } from 'react'
import logo370 from '../../../public/images/chains/370.png'
import logo56 from '../../../public/images/chains/56.png'
import logo97 from '../../../public/images/chains/97.png'
import logo534352 from '../../../public/images/chains/534352.png'
import { ChainId } from '@pancakeswap/sdk'

const logoMap: Record<ChainId, StaticImageData> = {
  370: logo370,
  56: logo56,
  97: logo97,
  534352: logo534352,
}

export const ChainLogo = memo(
  ({ chainId, width = 24, height = 24 }: { chainId: number; width?: number; height?: number }) => {
    if (isChainSupported(chainId)) {
      return (
        <Image
          alt={`chain-${chainId}`}
          style={{ maxHeight: `${height}px` }}
          src={logoMap[chainId]}
          width={width}
          height={height}
        />
      )
    }

    return <HelpIcon width={width} height={height} />
  },
)
