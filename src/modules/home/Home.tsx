import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { ThemeProps, withTheme } from "styled-components";
import { mainNFT } from "../../blockchain/instance";
import { Button } from "../../shared/button";
import { FETCH_NFTS_URI, WHITE_LISTED_NFTS } from "../../shared/helpers/config";
import { web3 } from "../../wallet_helpers/useAuth";
import { Container, Main } from "./style";

export const Home: React.FC = withTheme((props: ThemeProps<any>) => {
    const { theme } = props
    const { account, active, library, chainId } = useWeb3React()

    const [canMint, setCanMint] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isMinting, setIsMinting] = useState<boolean>(false)
    const [whiteListedNFTAddr, setWhiteListedNFTAddr] = useState<string>('')

    useEffect(() => {
        if (library) validate()
        else {
            setCanMint(false)
        }
    }, [library, account])

    const validate = async () => {
        setIsLoading(true)
        setCanMint(false)
        console.log('123');
        try {
            await getNFTs()
            setIsLoading(false)
        } catch (error) {
            console.error(error);
            setIsLoading(false)
        }

        console.log('123456');

    }
    const getNFTs = async () => {
        const options = { method: 'GET', headers: { accept: 'application/json', 'X-API-Key': 'BXDDO9sEsXgEB6auSQidifutUkBtU3Exa3rwCtnfyxCMf7FFVGGh0SJR6E2mBjx9' } };
        let ch_id: any = web3.utils.toHex(`${chainId}`)
        const addressString = WHITE_LISTED_NFTS.join('&token_addresses=')
        const url = `${FETCH_NFTS_URI}/${account}/nft`
        const response = await fetch(`${url}?chain=${ch_id}&format=decimal&token_addresses=${addressString}&normalizeMetadata=false`, options)
        const { result } = await response.json()
        console.log('result', result)


        if (result && result.length > 0) {
            console.log('lllllllll');

            setCanMint(true)
            setWhiteListedNFTAddr(result[0]?.token_address)
            return true
        }
        setCanMint(false)
        return false
    }
    const handleMintBtnClick = async () => {
        try {
            setIsMinting(true)

            console.log('whiteListedNFTAddr', whiteListedNFTAddr);

            await mainNFT.methods
                .mint(whiteListedNFTAddr)
                .send({ from: account })
                .on('transactionHash', (hash: any) => {
                    console.info('txn hash', hash)
                })
                .on('receipt', (receipt: any) => {
                    setIsMinting(false)
                })
                .on('error', (error: any) => {
                    setIsMinting(false)
                    console.error('error in minting', error)
                })

        } catch (error) {
            setIsMinting(false)
            console.error(error)
        }
    }
    console.log('ll', !canMint, isLoading, isMinting);

    return (
        <Container>
            <Main>
                {
                    <Button
                        customWidth="170px"
                        isDisabled={!canMint || isLoading || isMinting}
                        onClick={handleMintBtnClick}
                        shadowColor={theme.black}
                        btnType="filledButton"
                    >
                        {isMinting ? 'Minting..' : isLoading ? 'Loading..' : 'MINT'}
                    </Button>
                }
            </Main>
        </Container>
    )
})