import { CaverJsService } from "@/common/services/caverjs.service";
import axios from "axios";

export class UserService {
    async getTotalSupply() {
        const totalSupply = await new CaverJsService().getV2TotalSupply();
        return Number(totalSupply);
    }

    async mintV2(address: string, cost: string) {
        const totalSupply = await this.getTotalSupply();
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_V2_ENDPOINT}mint`,
                {
                    v2Number: totalSupply,
                    image: `https://v2image.s3.ap-northeast-2.amazonaws.com/test${totalSupply}.png`,
                }
            );
            const result = response.data;
            if (result === true) {
                try {
                    await new CaverJsService().mintV2(
                        address,
                        String(totalSupply),
                        cost
                    );
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
            }
            return true;
        } catch (error) {
            throw new Error(`${error}`);
        }
    }
}
