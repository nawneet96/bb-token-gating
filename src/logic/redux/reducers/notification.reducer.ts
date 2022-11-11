import { ERROR, START_LOADER, STOP_LOADER, SUCCESS, TX_HASH } from '../actions/constant'

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  successMsg: '',
  errorMsg: '',
  txHash: '',
}

export const notificationReducer = (state = initialState, action: any) => {
  const { type, payload } = action

  switch (type) {
    case START_LOADER:
      return {
        ...state,
        isLoading: true,
      }
    case STOP_LOADER:
      return {
        ...state,
        isLoading: false,
      }
    case SUCCESS:
      return {
        ...state,
        isError: false,
        errorMsg: '',
        isSuccess: true,
        successMsg: payload,
      }
    case ERROR:
      return {
        ...state,
        isSuccessMsg: false,
        successMsg: '',
        isError: true,
        errorMsg: payload,
      }
    case TX_HASH:
      return {
        ...state,
        txHash: payload,
      }
    default:
      return state
  }
}
