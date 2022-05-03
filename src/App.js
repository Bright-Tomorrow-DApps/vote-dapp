import { useMemo } from 'react'

import './App.css'

import { ConnectionProvider, WalletProvider, useWallet } from '@solana/wallet-adapter-react'
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { getPhantomWallet } from '@solana/wallet-adapter-wallets'
import {
  Keypair,
  Transaction,
  TransactionInstruction,
  PublicKey,
  AccountMeta,
  clusterApiUrl,
  Connection,
  SystemProgram,
  sendAndConfirmTransaction,
} from '@solana/web3.js'

import Flex from './components/Flex'
import Sidebar from './components/Sidebar'
import Card from './components/Card'
import LotteryButton from './components/LotteryButton'
import TransferButton from './components/TransferButton'
import MintButton from './components/MintButton'
import CreateQuestionButton from './components/CreateQuestionButton'
import Logo from './logo.svg'
import Wallet from './wallet'

function App() {
  const network = WalletAdapterNetwork.Devnet
  const endpoint = useMemo(() => clusterApiUrl(network), [network])
  const wallets = useMemo(() => [getPhantomWallet()], [network])
  let connection = new Connection('https://api.devnet.solana.com')

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

  // code From Rust

  // Get Account (fee payer)
  //   pKjDe2kXWZNZhtTwnn7euyWgDjY8vqoW6Rcuvcgm32i $21.595631122
  let accountFromSecret = Keypair.fromSecretKey(
    Uint8Array.from([
      149, 60, 15, 69, 250, 136, 150, 132, 63, 132, 180, 80, 144, 60, 22, 44, 105, 201, 192, 41, 82,
      250, 4, 141, 202, 13, 105, 117, 101, 48, 169, 204, 12, 31, 121, 70, 7, 84, 194, 222, 187, 140,
      19, 148, 97, 215, 37, 209, 111, 77, 253, 51, 172, 67, 217, 77, 206, 125, 66, 65, 92, 6, 40,
      27,
    ])
  )
  console.log('code', accountFromSecret.publicKey.toBase58())
  console.log('code', accountFromSecret.secretKey)

  // const dataLayout = BufferLayout.struct([
  //   BufferLayout.u8('instruction'), // 0: CreateQuestion
  //   BufferLayout.cstr('name'),
  //   BufferLayout.ns64('deadline'),
  // ])
  // console.log('aaaaa', 'dataLayout', dataLayout)

  // const data = Buffer.alloc(dataLayout.span)
  // console.log('aaaaa', 'data', data)
  // dataLayout.encode(
  //   {
  //     instruction: 12,
  //     name: 'abcdef',
  //     deadline: 1700000000,
  //     //        amount: new u64(amount).toBuffer(),
  //   },
  //   data
  // )

  // const instruction = new TransactionInstruction({
  //   keys: [{ pubkey: greetedPubkey, isSigner: false, isWritable: true }],
  //   programId: new PublicKey('FDs2DrjNkgreJizEaHqN1WKm96VezXxEJ1NfiAdQggs3'),
  //   data,
  // })

  // program FDs2DrjNkgreJizEaHqN1WKm96VezXxEJ1NfiAdQggs3

  // CreateQuestion { name: &'a str, deadline: u64 },
  // title: &str,
  // deadline: u64,
  // const hello = borsh.serialize(instructionDataSchema, instructionData)

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
            <MintButton />
            <CreateQuestionButton />
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
