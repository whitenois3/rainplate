import { ChakraProvider } from '@chakra-ui/react'
import Head from "next/head";
import { theme } from '../styles';
import { darkTheme, DisclaimerComponent, getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit'
import '@rainbow-me/rainbowkit/styles.css'
import 'material-react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app'
import { chain, configureChains, createClient, WagmiConfig } from 'wagmi'

import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

const { chains, provider } = configureChains(
  [chain.mainnet, chain.goerli, chain.rinkeby, chain.polygon, chain.polygonMumbai, chain.optimism, chain.arbitrum],
  [
    alchemyProvider({ alchemyId: process.env.ALCHEMY_ID }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Rainplate',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})


const Disclaimer: DisclaimerComponent = ({ Text, Link }) => (
  <Text>
    By connecting your wallet, you agree to the{' '}
    <Link href="https://termsofservice.xyz">Terms of Service</Link> and
    acknowledge you have read and understand the protocol{' '}
    <Link href="https://disclaimer.xyz">Disclaimer</Link>
  </Text>
);

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Head>
        <title>Rainplate</title>
      </Head>
      <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider
            chains={chains}
            theme={darkTheme({
              ...darkTheme.accentColors.green,
              accentColorForeground: 'white',
              borderRadius: 'large',
            })}
            appInfo={{
              disclaimer: Disclaimer,
            }}
            coolMode>
            <Component {...pageProps} />
          </RainbowKitProvider>
        </WagmiConfig>
      <style jsx global>{`
        html,
        body {
          min-height: 100%;
          height: 100%;
          font-family: Azeret Mono, monospace;
        }

        #__next {
          height: 100%;
          min-height: 100%;
        }

        #__next > div {
          height: 100%;
          min-height: 100%;
        }
      `}</style>
    </ChakraProvider>
  )
}

export default MyApp