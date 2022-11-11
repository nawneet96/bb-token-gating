import { UrlPath, Uuid } from '../shared/helpers/util'

export interface UserProps {
  user: string
}
export interface UserUrlProps extends UserProps {
  organization: Uuid
}

// Basic
export const rootPath: UrlPath<{}> = '/'
export const homePath: UrlPath<{}> = '/home'
export const privacyPolicyPath: UrlPath<{}> = '/policy'
export const termsPath: UrlPath<{}> = '/terms'
export const nftsPath: UrlPath<{}> = '/nfts'
export const nftPath: UrlPath<{}> = '/nfts/:id'
export const editLayerPath: UrlPath<{}> = '/nfts/:id/:layer'
export const userPath: UrlPath<UserUrlProps> = `${homePath}/user/:user`
