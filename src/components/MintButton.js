import { WalletNotConnectedError } from '@solana/wallet-adapter-base'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js'
import Button from './Button'
import { useCallback } from 'react'
import * as SPLToken from '@solana/spl-token'
import { RPC_URL } from '../constants'

const MintButton = () => {
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()

  const onClick = useCallback(async () => {}, [publicKey, sendTransaction, connection])

  return (
    <Button width="300px" onClick={onClick} disabled={!publicKey}>
      Mint
    </Button>
  )
}
export default MintButton
