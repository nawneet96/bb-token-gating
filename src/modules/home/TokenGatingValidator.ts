import Web3 from "web3";

export default class TokenGatingValidator {
    web3:any = {};
    chainId: number =0;
    moralisAPIendpoint: string = "";
    moralisAPIkey: string = "";
    whiteListedNFTs: string[] | [] = [];
    rpc_uri: string = "";

    constructor(chainId: number, moralisAPIendpoint: string, moralisAPIkey: string, whiteListedNFTs: string[], rpc_uri: string) {
        this.chainId = chainId;
        this.moralisAPIendpoint = moralisAPIendpoint;
        this.moralisAPIkey = moralisAPIkey;
        this.whiteListedNFTs = whiteListedNFTs;
        this.rpc_uri = rpc_uri;
    }

    isUserWhitelisted = async (userWalletAddress: string): Promise<boolean> => {
        const result = await this.getUserNFTs(userWalletAddress);
        if (result && result.length > 0) {
            return true;
        }
        return false;
    }

    userWhitelistedNFTs = async (userWalletAddress: string): Promise<[]> => {
        const result = await this.getUserNFTs(userWalletAddress);
        if (result && result.length > 0) {
            return result;
        }
        return [];
    }

    private getUserNFTs = async (userWalletAddress: string) => {
        const web3 = new Web3(this.rpc_uri);
        const options = {
            method: "GET",
            headers: {
                accept: "application/json",
                "X-API-Key": this.moralisAPIkey,
            },
        };
        let ch_id: any = web3.utils.toHex(`${this.chainId}`);
        const addressString = this.whiteListedNFTs.join("&token_addresses=");
        const url = `${this.moralisAPIendpoint}/${userWalletAddress}/nft`;
        const response = await fetch(
            `${url}?chain=${ch_id}&format=decimal&token_addresses=${addressString}&normalizeMetadata=false`,
            options
        );
        const { result } = await response.json();
        return result;
    }

}
