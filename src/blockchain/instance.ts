import { web3 } from '../wallet_helpers/useAuth'
import { mainContactAddress, mainContactABI } from './abi/MainContact'

export const mainNFT: any = new web3.eth.Contract(mainContactABI, mainContactAddress)


