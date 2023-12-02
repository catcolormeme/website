import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://docs.whalechain.live/contact-us',
        isHighlighted: true,
      },
      {
        label: t('Brand'),
        href: 'https://docs.whalechain.live/brand',
      },
      {
        label: t('Blog'),
        href: 'https://medium.com/pancakeswap',
      },
      {
        label: t('Community'),
        href: 'https://docs.whalechain.live/contact-us/telegram',
      },
      {
        label: t('Litepaper'),
        href: 'https://v2litepaper.whalechain.live/',
      },
      {
        label: '—',
      },
      {
        label: t('Online Store'),
        href: 'https://pancakeswap.creator-spring.com/',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://docs.whalechain.live/contact-us/customer-support',
      },
      {
        label: t('Troubleshooting'),
        href: 'https://docs.whalechain.live/help/troubleshooting',
      },
      {
        label: t('Guides'),
        href: 'https://docs.whalechain.live/get-started',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/pancakeswap',
      },
      {
        label: t('Documentation'),
        href: 'https://docs.whalechain.live',
      },
      {
        label: t('Bug Bounty'),
        href: 'https://docs.whalechain.live/code/bug-bounty',
      },
      {
        label: t('Audits'),
        href: 'https://docs.whalechain.live/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      },
      {
        label: t('Careers'),
        href: 'https://docs.whalechain.live/hiring/become-a-chef',
      },
    ],
  },
]
