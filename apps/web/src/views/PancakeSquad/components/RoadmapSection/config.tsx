import { ContextApi } from '@pancakeswap/localization'

type FAQsType = {
  t: ContextApi['t']
}

const config = ({ t }: FAQsType) => [
  {
    icon: '🚀',
    title: t('Phase 1'),
    description: [
      t('Website launch'),
      t(`Launch ${process.env.NEXT_PUBLIC_NAME}`),
      t('Marketing Campaigns'),
      t('CMC Listing'),
      t('CoinAlpha Listing'),
    ],
    reached: '03-2023',
  },
  {
    title: t('Phase 02'),
    icon: '👨‍',
    description: [
      t('Create dashboard panel'),
      t('Marketing Campaigns'),
      t('Youtubers Vídeos'),
      t(`2000 members telegram`),
    ],
    reached: '04-2023',
  },
  {
    title: t('Phase 03'),
    icon: '🌐',
    description: [
      t('NFT OpenSea'),
      t('2,000 Token Holders'),
      t('10,000 Telegram Members'),
      t('10,000 Telegram Members'),
    ],
    reached: '05-2023',
  },
]
export default config
