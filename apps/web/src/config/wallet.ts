import { WalletConfigV2 } from '@pancakeswap/ui-wallets'
import { WalletFilledIcon } from '@pancakeswap/uikit'
import type { ExtendEthereum } from 'global'
import { isFirefox } from 'react-device-detect'
import { metaMaskConnector, walletConnectNoQrCodeConnector } from '../utils/wagmi'

export enum ConnectorNames {
  MetaMask = 'metaMask',
  Injected = 'injected',
  // WalletConnect = 'walletConnect',
  BSC = 'bsc',
  Blocto = 'blocto',
  WalletLink = 'coinbaseWallet',
  BitKeep = 'bitKeep',
  Nabox = 'nabox',
  Okx = 'okx',
}

const delay = (t: number) => new Promise((resolve) => setTimeout(resolve, t))

const createQrCode = (chainId: number, connect) => async () => {
  connect({ connector: walletConnectNoQrCodeConnector, chainId })

  // wait for WalletConnect to setup in order to get the uri
  await delay(100)
  const { uri } = (await walletConnectNoQrCodeConnector.getProvider()).connector

  return uri
}

const walletsConfig = ({
  chainId,
  connect,
}: {
  chainId: number
  connect: (connectorID: ConnectorNames) => void
}): WalletConfigV2<ConnectorNames>[] => {
  const qrCode = createQrCode(chainId, connect)
  return [
    {
      id: 'metamask',
      title: 'Metamask',
      icon: '/images/wallets/metamask.png',
      installed: typeof window !== 'undefined' && Boolean(window.ethereum?.isMetaMask) && metaMaskConnector.ready,
      connectorId: ConnectorNames.MetaMask,
      deepLink: 'https://metamask.app.link/dapp/catcolor.live/',
      qrCode,
      downloadLink: 'https://metamask.app.link/dapp/catcolor.live/',
    },
    {
      id: 'binance',
      title: 'Binance Wallet',
      icon: '/images/wallets/binance.png',
      installed: typeof window !== 'undefined' && Boolean(window.BinanceChain),
      connectorId: ConnectorNames.BSC,
      guide: {
        desktop: 'https://www.bnbchain.org/en/binance-wallet',
      },
      downloadLink: {
        desktop: isFirefox
          ? 'https://addons.mozilla.org/en-US/firefox/addon/binance-chain/?src=search'
          : 'https://chrome.google.com/webstore/detail/binance-wallet/fhbohimaelbohpjbbldcngcnapndodjp',
      },
    },
    {
      id: 'coinbase',
      title: 'Coinbase Wallet',
      icon: '/images/wallets/coinbase.png',
      connectorId: ConnectorNames.WalletLink,
    },
    {
      id: 'trust',
      title: 'Trust Wallet',
      icon: '/images/wallets/trust.png',
      connectorId: ConnectorNames.Injected,
      installed:
        typeof window !== 'undefined' &&
        !(window.ethereum as ExtendEthereum)?.isSafePal && // SafePal has isTrust flag
        (Boolean(window.ethereum?.isTrust) ||
          // @ts-ignore
          Boolean(window.ethereum?.isTrustWallet)),
      deepLink: 'https://link.trustwallet.com/open_url?coin_id=20000714&url=https://catcolor.live/',
      downloadLink: {
        desktop: 'https://chrome.google.com/webstore/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph/related',
      },
      qrCode,
    },
    // {
    //   id: 'walletconnect',
    //   title: 'WalletConnect',
    //   icon: '/images/wallets/walletconnect.png',
    //   connectorId: ConnectorNames.WalletConnect,
    // },
    {
      id: 'opera',
      title: 'Opera Wallet',
      icon: '/images/wallets/opera.png',
      connectorId: ConnectorNames.Injected,
      installed: typeof window !== 'undefined' && Boolean(window.ethereum?.isOpera),
      downloadLink: 'https://www.opera.com/crypto/next',
    },
    {
      id: 'brave',
      title: 'Brave Wallet',
      icon: '/images/wallets/brave.png',
      connectorId: ConnectorNames.Injected,
      installed: typeof window !== 'undefined' && Boolean(window.ethereum?.isBraveWallet),
      downloadLink: 'https://brave.com/wallet/',
    },
    {
      id: 'math',
      title: 'MathWallet',
      icon: '/images/wallets/mathwallet.png',
      connectorId: ConnectorNames.Injected,
      installed: typeof window !== 'undefined' && Boolean(window.ethereum?.isMathWallet),
      qrCode,
    },
    {
      id: 'tokenpocket',
      title: 'TokenPocket',
      icon: '/images/wallets/tokenpocket.png',
      connectorId: ConnectorNames.Injected,
      installed: typeof window !== 'undefined' && Boolean(window.ethereum?.isTokenPocket),
      qrCode,
    },
    {
      id: 'safepal',
      title: 'SafePal',
      icon: '/images/wallets/safepal.png',
      connectorId: ConnectorNames.Injected,
      installed: typeof window !== 'undefined' && Boolean((window.ethereum as ExtendEthereum)?.isSafePal),
      qrCode,
    },
    {
      id: 'coin98',
      title: 'Coin98',
      icon: '/images/wallets/coin98.png',
      connectorId: ConnectorNames.Injected,
      installed:
        typeof window !== 'undefined' &&
        (Boolean((window.ethereum as ExtendEthereum)?.isCoin98) || Boolean(window.coin98)),
      qrCode,
    },
    {
      id: 'blocto',
      title: 'Blocto',
      icon: '/images/wallets/blocto.png',
      connectorId: ConnectorNames.Injected,
      installed: typeof window !== 'undefined' && Boolean((window.ethereum as ExtendEthereum)?.isBlocto),
      qrCode,
    },
    {
      id: 'bitkeep',
      title: 'BitKeep',
      icon: '/images/wallets/bitkeep.png',
      connectorId: ConnectorNames.BitKeep,
      installed: typeof window !== 'undefined' && Boolean(window.bitkeep),
      downloadLink: {
        desktop: 'https://chrome.google.com/webstore/detail/bitkeep-crypto-nft-wallet/jiidiaalihmmhddjgbnbgdfflelocpak',
      },
      qrCode,
    },
    {
      id: 'nabox',
      title: 'Nabox',
      icon: '/images/wallets/nabox.png',
      connectorId: ConnectorNames.Nabox,
      installed: typeof window !== 'undefined' && Boolean(window.NaboxWallet),
      downloadLink: {
        desktop: 'https://chrome.google.com/webstore/detail/nabox-wallet/nknhiehlklippafakaeklbeglecifhad',
      },
      qrCode,
    },
    {
      id: 'okx',
      title: 'Okx',
      icon: '/images/wallets/okx.png',
      connectorId: ConnectorNames.Okx,
      installed: typeof window !== 'undefined' && Boolean(window.okxwallet),
      downloadLink: {
        desktop: 'https://chrome.google.com/webstore/detail/okx-wallet/mcohilncbfahbmgdjkbpemcciiolgcge',
      },
      qrCode,
    },
  ]
}

export const createWallets = (chainId: number, connect: any) => {
  const hasInjected = typeof window !== 'undefined' && !window.ethereum
  const config = walletsConfig({ chainId, connect })
  return hasInjected && config.some((c) => c.installed && c.connectorId === ConnectorNames.Injected)
    ? config // add injected icon if none of injected type wallets installed
    : [
        ...config,
        {
          id: 'injected',
          title: 'Injected',
          icon: WalletFilledIcon,
          connectorId: ConnectorNames.Injected,
          installed: typeof window !== 'undefined' && Boolean(window.ethereum),
        },
      ]
}

const docLangCodeMapping: Record<string, string> = {
  it: 'italian',
  ja: 'japanese',
  fr: 'french',
  tr: 'turkish',
  vi: 'vietnamese',
  id: 'indonesian',
  'zh-cn': 'chinese',
  'pt-br': 'portuguese-brazilian',
}

export const getDocLink = (code: string) =>
  docLangCodeMapping[code]
    ? `https://docs.catcolor.live/v/${docLangCodeMapping[code]}/get-started/connection-guide`
    : `https://docs.catcolor.live/get-started/connection-guide`
