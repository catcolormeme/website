import styled from 'styled-components'
import { Flex, Heading, Text, Button, TwitterIcon, TelegramIcon } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import SunburstSvg from './SunburstSvg'

const BgWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`

const StyledSunburst = styled(SunburstSvg)`
  height: 350%;
  width: 350%;

  ${({ theme }) => theme.mediaQueries.xl} {
    height: 400%;
    width: 400%;
  }
`

const Wrapper = styled(Flex)`
  z-index: 1;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

const Footer = () => {
  const { t } = useTranslation()

  return (
    <>
      <BgWrapper>
        <Flex alignItems="center" justifyContent="center" width="100%" height="100%">
          <StyledSunburst />
        </Flex>
      </BgWrapper>
      {/* {(isTablet || isDesktop) && ( */}
      {/*   <FloatingPancakesWrapper> */}
      {/*     <TopLeftImgWrapper> */}
      {/*       <CompositeImage {...topLeftImage} maxHeight="256px" /> */}
      {/*     </TopLeftImgWrapper> */}
      {/*     <BottomRightImgWrapper> */}
      {/*       <CompositeImage {...bottomRightImage} maxHeight="256px" /> */}
      {/*     </BottomRightImgWrapper> */}
      {/*   </FloatingPancakesWrapper> */}
      {/* )} */}
      <Wrapper>
        <Heading mb="24px" scale="xl" color="white">
          {t('Join us on social media')}
        </Heading>
        <Text textAlign="center" color="white" mb="24px">
          {t("Don't miss out on the latest news and updates")}
        </Text>

        <Flex mb="24px" style={{ gap: '12px' }}>
          <Button
            as="a"
            title={t(`${process.env.NEXT_PUBLIC_NAME} Twitter`)}
            href="https://twitter.com/CatColorToken"
            variant="primary"
            scale="md"
            mr="8px"
          >
            <TwitterIcon color="currentColor" mr="8px" /> {t('Twitter')}
          </Button>
          <Button
            as="a"
            title={t(`${process.env.NEXT_PUBLIC_NAME} Telegram`)}
            href="https://t.me/CatColorTokenGlobal"
            variant="primary"
            scale="md"
            mr="8px"
          >
            <TelegramIcon color="currentColor" mr="8px" /> {t('Telegram')}
          </Button>
        </Flex>
      </Wrapper>
    </>
  )
}

export default Footer
