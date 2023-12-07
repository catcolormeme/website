import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      // {
      //   label: t('Contact'),
      //   href: 'https://docs.catcolor.live/contact-us',
      //   isHighlighted: true,
      // },
      // {
      //   label: t('Brand'),
      //   href: 'https://docs.catcolor.live/brand',
      // },
      // {
      //   label: t('Blog'),
      //   href: 'https://medium.com/pancakeswap',
      // },
      // {
      //   label: t('Community'),
      //   href: 'https://docs.catcolor.live/contact-us/telegram',
      // },
      // {
      //   label: t('Litepaper'),
      //   href: 'https://v2litepaper.catcolor.live/',
      // },
      // {
      //   label: '—',
      // },
      // {
      //   label: t('Online Store'),
      //   href: 'https://pancakeswap.creator-spring.com/',
      // },
    ],
  },
  {
    label: t('Help'),
    items: [
      // {
      //   label: t('Customer Support'),
      //   href: 'https://docs.catcolor.live/contact-us/customer-support',
      // },
      // {
      //   label: t('Troubleshooting'),
      //   href: 'https://docs.catcolor.live/help/troubleshooting',
      // },
      // {
      //   label: t('Guides'),
      //   href: 'https://docs.catcolor.live/get-started',
      // },
    ],
  },
  {
    label: t('Developers'),
    items: [
      // {
      //   label: 'Github',
      //   href: 'https://github.com/pancakeswap',
      // },
      // {
      //   label: t('Documentation'),
      //   href: 'https://docs.catcolor.live',
      // },
      // {
      //   label: t('Bug Bounty'),
      //   href: 'https://docs.catcolor.live/code/bug-bounty',
      // },
      // {
      //   label: t('Audits'),
      //   href: 'https://docs.catcolor.live/help/faq#is-pancakeswap-safe-has-pancakeswap-been-audited',
      // },
      // {
      //   label: t('Careers'),
      //   href: 'https://docs.catcolor.live/hiring/become-a-chef',
      // },
    ],
  },
]
