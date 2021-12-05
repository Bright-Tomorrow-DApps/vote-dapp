import { useMemo } from 'react'

import './App.css'

import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { getPhantomWallet } from '@solana/wallet-adapter-wallets'
import { clusterApiUrl } from '@solana/web3.js'

import { Flex, Sidebar, Card } from 'components'
import Logo from './logo.svg'
import Wallet from './wallet'
import LotteryButton from './components/LotteryButton'
import TransferButton from './components/TransferButton'

function App() {
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])
  const wallets = useMemo(() => [getPhantomWallet()], [network])

  const cardItems = [
    { id: 1, topic: 'Kevin週一上午請假?', isFinished: false, isYesWin: null },
    { id: 2, topic: '下週會不會有人訂可不可?', isFinished: false, isYesWin: null },
    { id: 3, topic: '週五下雨?', isFinished: true, isYesWin: true },
  ]

  const handleYesOnClick = (id) => () => {
    console.log('aaaa', 'yes', id)
  }
  const handleNoOnClick = (id) => () => {
    console.log('aaaa', 'no', id)
  }

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets}>
        <Flex justifyContent="center" bg="rgb(45, 11, 90)">
          <Flex
            flexDirection="column"
            minHeight="100vh"
            width="100%"
            maxWidth="1460px"
            margin="auto 0"
          >
            <Flex
              as="header"
              color="white"
              justifyContent="space-between"
              alignItems="center"
              height="100px"
              p="20px"
            >
              <Flex>
                <img alt="logo" src={Logo} width="250"></img>
              </Flex>
              <Flex>
                <Wallet />
              </Flex>
            </Flex>

            <Flex>
              <Sidebar />
              <Flex width="80%" flexDirection="column">
                {cardItems.map(({ id, topic, isFinished, isYesWin }) => (
                  <Card
                    key={id}
                    topic={topic}
                    isFinished={isFinished}
                    isYesWin={isYesWin}
                    yesOnClick={handleYesOnClick(id)}
                    noOnClick={handleNoOnClick(id)}
                  />
                ))}
              </Flex>
            </Flex>
            {/* defi */}

            <LotteryButton />
            <TransferButton />
            {/* defi */}
            <Flex
              as="footer"
              position="fixed"
              left="0"
              bottom="0"
              width="100%"
              color="white"
              justifyContent="center"
              alignItems="center"
              height="50px"
              bg="rgb(255, 255, 255, 0.1)"
            >
              Footer
            </Flex>
          </Flex>
        </Flex>
      </WalletProvider>
    </ConnectionProvider>
  )
}

export default App
