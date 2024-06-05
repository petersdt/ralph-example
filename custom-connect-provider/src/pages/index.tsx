import React, { useEffect } from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import { TokenDapp } from '@/components/TokenDapp'
import { useWallet } from '@alephium/web3-react'
import { tokenFaucetConfig } from '@/services/utils'
import { web3 } from '@alephium/web3'

export default function Home() {
  const { connectionStatus, nodeProvider, explorerProvider } = useWallet()

  console.log(`>>>>>>>>>>>>>> `, connectionStatus)
  
  useEffect(() => {
    if (nodeProvider) {
      web3.setCurrentNodeProvider(nodeProvider)
    }
    if (explorerProvider) {
      web3.setCurrentExplorerProvider(explorerProvider)
    }
  }, [nodeProvider, explorerProvider])

  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Token Faucet</title>
          <meta name="description" content="Generated by @alephium/cli init" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {connectionStatus === 'connected' && (
          <TokenDapp config={tokenFaucetConfig} />
        )}
      </div>
    </>
  )
}