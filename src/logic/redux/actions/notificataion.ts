import { START_LOADER, STOP_LOADER, ERROR, SUCCESS, TX_HASH } from './constant'

export const startLoading = () => {
  return {
    type: START_LOADER,
  }
}

export const stopLoading = () => {
  return {
    type: STOP_LOADER,
  }
}

export const gotSuccessMsg = (data: any) => {
  return {
    type: SUCCESS,
    payload: data,
  }
}

export const gotErrorMsg = (data: any) => {
  return {
    type: ERROR,
    payload: data,
  }
}

export const setTxHash = (hash: string) => {
  return {
    type: TX_HASH,
    payload: hash,
  }
}
