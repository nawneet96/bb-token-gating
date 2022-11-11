import { useCallback } from 'react'
import { useWeb3React, UnsupportedChainIdError } from '@web3-react/core'
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from '@web3-react/injected-connector'
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from '@web3-react/walletconnect-connector'
import { InjectedConnector } from '@web3-react/injected-connector'
import { WalletLinkConnector } from '@web3-react/walletlink-connector'
import Web3 from 'web3'
import { clearLocalStorage } from '../shared/helpers/util'
import {
  blockExplorerUrl,
  PROVIDER_URL,
  supportedChainCurrency,
  supportedChainId,
  supportedChainName,
} from '../shared/helpers/config'

const POLLING_INTERVAL = 12000

export const injected = new InjectedConnector({
  supportedChainIds: [supportedChainId],
})

export const web3 = new Web3(Web3.givenProvider || PROVIDER_URL)

export const walletlink = new WalletLinkConnector({
  url: PROVIDER_URL,
  appName: 'ghostball',
  supportedChainIds: [supportedChainId],
})

const selectRpc = (type: number): any => {
  switch (type) {
    case 1:
      return {
        1: PROVIDER_URL,
      }
  }
}
export function activateInjectedProvider(providerName: 8 | 1) {
  const { ethereum }: any = window

  if (!ethereum?.providers) {
    return undefined
  }

  let provider
  switch (providerName) {
    case 8:
      provider = ethereum.providers.find(({ isCoinbaseWallet }: any) => isCoinbaseWallet)
      break
    case 1:
      provider = ethereum.providers.find(({ isMetaMask, isBraveWallet }: any) => isMetaMask && !isBraveWallet)
      break
  }

  if (provider) {
    ethereum.setSelectedProvider(provider)
  }
}

const useAuth = () => {
  const { activate, deactivate, library, chainId, account } = useWeb3React()
  const { ethereum }: any = window
  const switchEthereum = async (connector: any, connectorID: any) => {
    let ch_id: any = web3.utils.toHex(supportedChainId)
    try {
      activateInjectedProvider(connectorID)
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: ch_id }],
      })
      await activate(selectInjector(connectorID))
    } catch (err: any) {
      if (err.code === 4902) {
        ethereum
          .request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: ch_id,
                chainName: supportedChainName,
                nativeCurrency: {
                  name: supportedChainCurrency,
                  symbol: supportedChainCurrency,
                  decimals: 18,
                },
                rpcUrls: [PROVIDER_URL],
                blockExplorerUrls: [blockExplorerUrl],
              },
            ],
          })
          .then(() => {
            activate(selectInjector(connectorID))
          })
          .catch((error: any) => {
            console.error(error)
          })
      }
      if (err.code === 4001) {
        clearLocalStorage()
      }
    }
  }
  const selectInjector = (type: number): any => {
    switch (type) {
      case 1:
        return injected
      case 2:
        return walletconnect
      case 8:
        return walletlink
    }
  }
  let walletconnect: any
  const login = useCallback(
    (connectorID: any) => {
      //@ts-ignore
      walletconnect = new WalletConnectConnector({
        rpc: selectRpc(1),
        qrcode: true,
        pollingInterval: POLLING_INTERVAL,
        bridge: 'https://bridge.walletconnect.org',
      })

      if (true) {
        if (connectorID == 8 || connectorID == 1) {
          activateInjectedProvider(connectorID)
        }
        activate(selectInjector(connectorID), async (error) => {
          if (error instanceof UnsupportedChainIdError) {
            await switchEthereum(injected, connectorID)
          } else {
            if (error instanceof NoEthereumProviderError) {
              console.warn('NoEthereumProviderError', error)
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              walletconnect.walletConnectProvider = null
            } else {
              console.warn(error.name, error.message, connectorID, error)
            }
          }
        })
      }
    },
    [activate, library]
  )

  const logout = useCallback(() => {
    clearLocalStorage()
    deactivate()
    //@ts-ignore
    const walletType = JSON.parse(localStorage.getItem('connectorId'))
    if (walletType === 2) {
      walletconnect.walletConnectProvider = null
    }
  }, [deactivate])

  return { login, logout }
}

export default useAuth
