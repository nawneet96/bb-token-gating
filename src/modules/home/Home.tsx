import { useWeb3React } from "@web3-react/core";
import { useEffect, useState } from "react";
import { MORALIS_API_URI, MORALIS_API_KEY, PROVIDER_URL, WHITE_LISTED_NFTS } from "../../shared/helpers/config";
import { Heading3 } from "../../shared/Typography";
import { Container, Main } from "./style";
import TokenGatingValidator from "./TokenGatingValidator";

export const Home = () => {
    const { account, library, chainId } = useWeb3React()

    const [isUserWhitelisted, setIsUserWhitelisted] = useState<boolean>(false)

    useEffect(() => {
        if (library) validate()
        else {
            setIsUserWhitelisted(false)
        }
    }, [library, account])

    const validate = async () => {
        setIsUserWhitelisted(false)
        try {
            if (chainId && account) {
                const tokenGatingValidator = new TokenGatingValidator(chainId, MORALIS_API_URI, MORALIS_API_KEY, WHITE_LISTED_NFTS, PROVIDER_URL)
                const isUserWhitelisted: boolean = await tokenGatingValidator.isUserWhitelisted(account);
                const whitelistedNFTs: [] = await tokenGatingValidator.userWhitelistedNFTs(account);
                console.info('results...', isUserWhitelisted, whitelistedNFTs);
                if (isUserWhitelisted) {
                    setIsUserWhitelisted(true)
                    // do something -> token gated function 
                }
            }
        } catch (error) {
            console.error(error);
        }
    }


    return (

        <Container>
            <Main>
                {isUserWhitelisted
                    ? <Heading3 fColor="#fff">You are whitelisted</Heading3>
                    : <Heading3 fColor="#fff">You are not whitelisted</Heading3>
                }
            </Main>
        </Container>
    )
}
