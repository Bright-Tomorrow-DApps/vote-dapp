import { useCallback } from 'react'

import { useConnection, useWallet } from '@solana/wallet-adapter-react'
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
import { Buffer } from 'buffer'
import { struct, u8, ns64 } from '@solana/buffer-layout'

import Button from './Button'

const CreateQuestionButton = () => {
  const { connection } = useConnection()
  // let mint_key = Pubkey::from_str("4RYkyVRpMSyZSr72KXCLRLmm85wq2ZaGkovDBVo1xJT8").unwrap();
  //const mintKey = Keypair.fromSeed('4RYkyVRpMSyZSr72KXCLRLmm85wq2ZaGkovDBVo1xJT8')

  const onClick = useCallback(async () => {
    console.log('aaaaaa', 'CreateQuestionButton', 'onClick')

    const mintKey = new PublicKey('4RYkyVRpMSyZSr72KXCLRLmm85wq2ZaGkovDBVo1xJT8')
    console.log('aaaaa', 'mintKey', mintKey)

    let accountFromSecret = Keypair.fromSecretKey(
      Uint8Array.from([
        149, 60, 15, 69, 250, 136, 150, 132, 63, 132, 180, 80, 144, 60, 22, 44, 105, 201, 192, 41,
        82, 250, 4, 141, 202, 13, 105, 117, 101, 48, 169, 204, 12, 31, 121, 70, 7, 84, 194, 222,
        187, 140, 19, 148, 97, 215, 37, 209, 111, 77, 253, 51, 172, 67, 217, 77, 206, 125, 66, 65,
        92, 6, 40, 27,
      ])
    )
    console.log('aaaaa', accountFromSecret.publicKey.toBase58())
    console.log('aaaaa', accountFromSecret.secretKey)
    const { publicKey, secretKey } = accountFromSecret

    let allocateTransaction = new Transaction({
      feePayer: accountFromSecret.publicKey,
    })
    let keys = [{ pubkey: accountFromSecret.publicKey, isSigner: true, isWritable: true }]
    let params = { action: 0, name: 'abcdef', deadline: 1700000000 } // here

    let allocateStruct = {
      index: 3,
      layout: struct([u8('instruction'), u8('action'), u8('name'), ns64('deadline')]),
    }
    // 0,1,2 +     // name [u8; 256] , deadline u64

    console.log('aaaaaa', 'allocateStruct', allocateStruct)
    let data = Buffer.alloc(allocateStruct.layout.span)
    let layoutFields = Object.assign({ instruction: allocateStruct.index }, params)
    allocateStruct.layout.encode(layoutFields, data)

    console.log('aaaaaa', 'allocateStruct', allocateStruct)
    allocateTransaction.add(
      new TransactionInstruction({
        keys,
        programId: new PublicKey('FDs2DrjNkgreJizEaHqN1WKm96VezXxEJ1NfiAdQggs3'),
        data,
      })
    )

    const result = await sendAndConfirmTransaction(connection, allocateTransaction, [
      accountFromSecret,
      accountFromSecret,
    ])

    console.log('aaaaaa', 'result', result)
  }, [connection])

  return (
    <Button width="300px" onClick={onClick}>
      Create Question
    </Button>
  )
}
export default CreateQuestionButton
