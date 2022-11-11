import {
  SET_CONNECT_WALLET,
  SET_DISCONNECT_WALLET,
  SET_IS_AUTOMATION,
  SET_IS_CONNECTOR_ID,
  SET_IS_MINT_OVER,
  SET_IS_SYNCED_WITH_API,
  SET_IS_WRONG_NETWORK,
  SET_LAYER_CONTRACTS,
  SET_SHOW_STATS,
  SET_USERADDRESS,
} from '../actions/constant'

const initialState = {
  connected: false,
  connectWallet: false,
  disconnectWallet: false,
  userContractAddress: '',
  isShowStats: false,
  isAutomation: false,
  connectorID: -1,
  isContractSyncedWithAPI: false,
  isWrongNetwork: false,
  isMintingOver: false,
  layerContracts: {},
}

export const navbarReducer = (state = initialState, action: any) => {
  const { type, payload } = action
  switch (type) {
    case SET_CONNECT_WALLET:
      return {
        ...state,
        connectWallet: payload,
      }
    case SET_DISCONNECT_WALLET:
      return {
        ...state,
        disconnectWallet: payload,
      }
    case SET_USERADDRESS:
      return {
        ...state,
        userContractAddress: payload,
      }
    case SET_SHOW_STATS:
      return {
        ...state,
        isShowStats: payload,
      }
    case SET_IS_AUTOMATION:
      return {
        ...state,
        isAutomation: payload,
      }
    case SET_IS_CONNECTOR_ID:
      return {
        ...state,
        connectorID: payload,
      }
    case SET_IS_SYNCED_WITH_API:
      return {
        ...state,
        isContractSyncedWithAPI: payload,
      }
    case SET_IS_WRONG_NETWORK:
      return {
        ...state,
        isWrongNetwork: payload,
      }
    case SET_IS_MINT_OVER:
      return {
        ...state,
        isMintingOver: payload,
      }
    case SET_LAYER_CONTRACTS:
      return {
        ...state,
        layerContracts: payload,
      }
    default:
      return state
  }
}
