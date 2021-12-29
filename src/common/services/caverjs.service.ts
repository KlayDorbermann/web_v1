export class CaverJsService {
    async getV2TotalSupply() {
        const Caver: any | undefined = (window as any).caver;

        // const data = Caver.klay.abi.encodeFunctionCall(
        //     {
        //         "constant": true,
        //         "inputs": [],
        //         "name": "totalSupply",
        //         "outputs": [
        //             {
        //                 "name": "",
        //                 "type": "uint256"
        //             }
        //         ],
        //         "payable": false,
        //         "stateMutability": "view",
        //         "type": "function"
        //     },
        // )
        // const result = await Caver.klay.sendTransaction
        return true;
    }
}