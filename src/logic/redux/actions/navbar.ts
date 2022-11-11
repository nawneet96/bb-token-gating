import {
  SET_CONNECT_WALLET,
  SET_DISCONNECT_WALLET,
  SET_IS_AUTOMATION,
  SET_SHOW_STATS,
  SET_USERADDRESS,
  SET_IS_CONNECTOR_ID,
  SET_IS_SYNCED_WITH_API,
  SET_IS_WRONG_NETWORK,
  SET_IS_MINT_OVER,
  SET_LAYER_CONTRACTS,
} from './constant'

interface IConnWallet {
  type: string
  payload: boolean
}
export const setConnectWallet = (status: boolean): IConnWallet => {
  return {
    type: SET_CONNECT_WALLET,
    payload: status,
  }
}

export const setDisConnectWallet = (status: boolean) => {
  return {
    type: SET_DISCONNECT_WALLET,
    payload: status,
  }
}

export const setUserContract = (address: string) => {
  return {
    type: SET_USERADDRESS,
    payload: address,
  }
}

export const setShowStats = (status: boolean) => {
  return {
    type: SET_SHOW_STATS,
    payload: status,
  }
}

export const setIsAutomation = (status: boolean) => {
  return {
    type: SET_IS_AUTOMATION,
    payload: status,
  }
}

export const setConnectorID = (status: number) => {
  return {
    type: SET_IS_CONNECTOR_ID,
    payload: status,
  }
}

export const setIsSyncedWithAPI = (status: boolean) => {
  return {
    type: SET_IS_SYNCED_WITH_API,
    payload: status,
  }
}

export const setIsWrongNetwork = (status: boolean) => {
  return {
    type: SET_IS_WRONG_NETWORK,
    payload: status,
  }
}

export const setIsMintingOver = (status: boolean) => {
  return {
    type: SET_IS_MINT_OVER,
    payload: status,
  }
}

export const setLayerContracts = (status: any) => {
  return {
    type: SET_LAYER_CONTRACTS,
    payload: status,
  }
}
