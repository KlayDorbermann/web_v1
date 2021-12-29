import { CaverJsService } from "@/common/services/caverjs.service";
import axios from "axios";

export class UserService {
    async mintV2() {
        // new CaverJsService().getV2TotalSupply();
        const supply = 1 - 1;
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_V2_ENDPOINT}info/${supply}`
            );
            const result = response.data;
            if (result === true) {
                const mintResult = await new CaverJsService().getV2TotalSupply();
                if (mintResult === false) {
                    const data = {
                        v2Number: supply,
                    };
                    let deleteResult = false;
                    while (deleteResult === false) {
                        const deleteReesponse = await axios.delete(
                            `${process.env.NEXT_PUBLIC_V2_ENDPOINT}info/number`,
                            { data }
                        );
                        deleteResult = deleteReesponse.data
                    }
                }
            }
            return true;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}
