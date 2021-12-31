import { CaverJsService } from "@/common/services/caverjs.service";
import axios from "axios";

export class UserService {
    async mintV2(address: string) {
        const totalSupply = await new CaverJsService().getV2TotalSupply();
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_V2_ENDPOINT}mint`,
                {
                    v2Number: Number(totalSupply),
                    image: totalSupply,
                }
            );
            const result = response.data;
            if (result === true) {
                try {
                    await new CaverJsService().mintV2(address, totalSupply);
                } catch (error) {
                    const data = {
                        v2Number: Number(totalSupply),
                    };
                    await axios.delete(
                        `${process.env.NEXT_PUBLIC_V2_ENDPOINT}number`,
                        { data: { v2Number: Number(totalSupply) } }
                    );
                    alert(error);
                    return error;
                }
                // if (mintResult !== true) {
                //     const data = {
                //         v2Number: tokenId,
                //     };
                //     // let deleteResult = false;
                //     await axios.delete(
                //         `${process.env.NEXT_PUBLIC_V2_ENDPOINT}info/number`,
                //         { data }
                //     );
                // while (deleteResult === false) {
                //     const deleteReesponse = await axios.delete(
                //         `${process.env.NEXT_PUBLIC_V2_ENDPOINT}info/number`,
                //         { data }
                //     );
                //     deleteResult = deleteReesponse.data
                // }
                // }
            }
            return true;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}
