export class CaverJsService {
    async getV2TotalSupply() {
        const Caver: any | undefined = (window as any).caver;
        // console.log(new Caver.klay.Contract(abi, process.env.NEXT_PUBLIC_V2_ADDRESS).method.totalSupply())
        const abi = [
            {
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
            },
        ];
        const contract = new Caver.klay.Contract(
            abi,
            process.env.NEXT_PUBLIC_V2_ADDRESS
        );
        const totlaSupply = await contract.methods.totalSupply().call();
        return totlaSupply;
    }

    async mintV2(address: string, tokenId: string, pay: string) {
        const Caver: any | undefined = (window as any).caver;
        const abi = [
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
                ],
                name: "mintWithTokenURI",
                outputs: [
                    {
                        name: "",
                        type: "bool",
                    },
                ],
                payable: true,
                stateMutability: "payable",
                type: "function",
            },
        ];
        const contract = new Caver.klay.Contract(
            abi,
            process.env.NEXT_PUBLIC_V2_ADDRESS
        );
        const mintResult = await contract.methods
            .mintWithTokenURI(address, Number(tokenId))
            .send({
                from: address,
                to: process.env.NEXT_PUBLIC_V2_ADDRESS,
                gas: "800000",
                value: Caver.utils.toPeb(pay, "KLAY"),
            });
        if (mintResult.status === true) return true;
        return false;
    }
}
