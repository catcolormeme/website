import { Heading, Flex, Text, Skeleton, ChartIcon, CommunityIcon, SwapIcon } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import { formatLocalisedCompactNumber } from '@pancakeswap/utils/formatBalance'
import useSWRImmutable from 'swr/immutable'
import IconCard, { IconCardData } from '../IconCard'
import StatCardContent from './StatCardContent'
import GradientLogo from '../GradientLogoSvg'

const Stats = () => {
  const { t } = useTranslation()

  return (
    <Flex justifyContent="center" alignItems="center" flexDirection="column">
      <GradientLogo height="48" width="48" style={{ marginBottom: '24px' }} />
      <Heading textAlign="center" scale="xl" mb="32px">
        {t('Multi-chain DeFi solutions')}
      </Heading>
      {/* <Heading textAlign="center" scale="xl" mb="32px"> */}
      {/*   {t('Trusted with billions.')} */}
      {/* </Heading> */}
      <Text textAlign="center" color="textSubtle">
        {t('Swap, Bridge and Launch')}
        <br />
        {t('across multiple blockchains')}
      </Text>
    </Flex>
  )
}

export default Stats
