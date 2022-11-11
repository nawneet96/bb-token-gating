import web3 from 'web3'
import { provider } from 'web3-core'

export default function getLibrary(provider: any) {
  const library = new web3(provider)
  return library
}
