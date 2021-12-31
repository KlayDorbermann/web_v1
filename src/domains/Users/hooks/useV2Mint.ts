import { UserService } from "../services/user.service";

export default function useV2Mint() {
    const onClick = async () => {
        const klaytn: any | undefined = (window as any).klaytn;
        if (klaytn === undefined) {
            alert("Please install kaikas first");
        }
        const result = await klaytn.enable();
        alert(`Connected ${result[0]}`);
        try {
            const mintResult = await new UserService().mintV2(result[0]);
            if (mintResult === true) {
                alert("V2 minting success!!!");
            }
        } catch (error) {
            alert(error);
        }
    };

    return {
        onClick,
    };
}


