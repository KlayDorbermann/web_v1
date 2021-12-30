export class CaverJsService {
    async getV2TotalSupply() {
        const Caver: any | undefined = (window as any).caver;
        // console.log(new Caver.klay.Contract(abi, process.env.NEXT_PUBLIC_V2_ADDRESS).method.totalSupply())
        const abi = [{
            constant: true,
            inputs: [],
            name: "totalSupply",
            outputs: [
                {
                    name: "",
                    type: "uint256",
                },
            ],
            payable: false,
            stateMutability: "view",
            type: "function",
        }];
        const contract = new Caver.klay.Contract(
            abi,
            process.env.NEXT_PUBLIC_V2_ADDRESS
        );
        const totlaSupply = await contract.methods.totalSupply().call();
        return totlaSupply;
    }

    async mintV2(address: string, tokenId: string) {
        const Caver: any | undefined = (window as any).caver;
        const data = Caver.klay.abi.encodeFunctionCall(
            {
                constant: false,
                inputs: [
                    {
                        name: "to",
                        type: "address",
                    },
                    {
                        name: "tokenId",
                        type: "uint256",
                    },
                    {
                        name: "imageUrl",
                        type: "string",
                    },
                ],
                name: "mint",
                outputs: [
                    {
                        name: "",
                        type: "bool",
                    },
                ],
                payable: false,
                stateMutability: "nonpayable",
                type: "function",
            },
            [address, String(tokenId), String(tokenId)]
        );
        const result = await Caver.klay.sendTransaction({
            type: "SMART_CONTRACT_EXECUTION",
            from: address,
            to: process.env.NEXT_PUBLIC_V2_ADDRESS,
            gas: "8000000",
            value: Caver.utils.toPeb('1', 'KLAY'),
            data,
        });
        const trxResult = await Caver.klay.getTransactionReceipt(
            result.senderTxHash
        );
        if (trxResult.status === true) return true;
        return false;
    }
}
