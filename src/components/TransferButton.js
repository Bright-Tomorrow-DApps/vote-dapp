import { WalletNotConnectedError } from '@solana/wallet-adapter-base'
import { useConnection, useWallet } from '@solana/wallet-adapter-react'
import { Keypair, SystemProgram, Transaction } from '@solana/web3.js'
import { useCallback } from 'react'

const RPC_URL = 'https://api.devnet.solana.com'

const TransferButton = () => {
  const { connection } = useConnection()
  const { publicKey, sendTransaction } = useWallet()

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError()

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: publicKey,
        toPubkey: Keypair.generate().publicKey, // random wallet
        lamports: 1e5, // 1 SOL
      })
    )

    const signature = await sendTransaction(transaction, connection)
    console.log('aaaaaaa', 'signature', signature)
    await connection.confirmTransaction(signature, 'processed')
  }, [publicKey, sendTransaction, connection])

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Transfer
    </button>
  )
}
export default TransferButton
