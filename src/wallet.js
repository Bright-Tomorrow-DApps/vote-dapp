import { useState, useEffect } from 'react'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import { Connection, LAMPORTS_PER_SOL } from '@solana/web3.js'

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css')

const connection = new Connection('https://api.devnet.solana.com')

const Wallet = () => {
  const [solBalance, setSolBalance] = useState()
  const { publicKey } = useWallet()

  useEffect(() => {
    async function fetchSolBalance() {
      setSolBalance((await connection.getBalance(publicKey)) / LAMPORTS_PER_SOL)
    }

    if (publicKey) fetchSolBalance()
  }, [publicKey])

  return (
    <WalletModalProvider>
      <span>{solBalance && `${solBalance} SOL`}</span>
      <WalletMultiButton />
    </WalletModalProvider>
  )
}

export default Wallet
