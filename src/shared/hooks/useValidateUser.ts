import { useWeb3React } from '@web3-react/core'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { MORALIS_API_URI, WHITE_LISTED_NFTS } from '../helpers/config'

export const useValidateUser = () => {
  const { account, library, chainId } = useWeb3React()

  WHITE_LISTED_NFTS.map(async (addr: string) => {
    const url = `${MORALIS_API_URI}/${account}/nft?chain=0X${chainId}&format=decimal&token_addresses=${addr}`

    const { data } = await axios.get(url, {
      headers: {
        'X-API-Key': 'test',
        accept: 'application/json',
      },
    })
    console.log('data', data);
    
  })
}
