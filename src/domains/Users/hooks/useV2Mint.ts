import { useEffect, useState } from "react";
import { UserService } from "../services/user.service";

export default function useV2Mint() {
    const [totalSupply, setTotalSupply] = useState(0);
    const [address, setAddress] = useState("");

    const connectKaikas = async () => {
        const klaytn: any | undefined = (window as any).klaytn;
        if (klaytn === undefined) {
            alert("Please install kaikas first");
        }
        const result = await klaytn.enable();
        setAddress(result[0]);
    };

    const getTotalSupply = async () => {
        const total = await new UserService().getTotalSupply();
        const mintCount = 4000;
        setTotalSupply(mintCount - total);
    };

    const timeValidate = async () => {
        const curr = new Date();
        const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
        const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
        const kr_curr = new Date(utc + KR_TIME_DIFF);
        const totalSupply = await new UserService().getTotalSupply();

        const firstMit = new Date(2022, 1, 3, 14);
        const firstMintTimeUtc =
            firstMit.getTime() + firstMit.getTimezoneOffset() * 60 * 1000;
        const firstMintKrCurr = new Date(firstMintTimeUtc + KR_TIME_DIFF);
        const firstMintDate = kr_curr.getDate() - firstMintKrCurr.getDate();
        const firstMintTime = kr_curr.getHours() - firstMintKrCurr.getHours();

        const secoundMint = new Date(2022, 1, 4, 21);
        const secoundMintTimeUtc =
            secoundMint.getTime() + secoundMint.getTimezoneOffset() * 60 * 1000;
        const secoundMintKrCurr = new Date(secoundMintTimeUtc + KR_TIME_DIFF);
        const secoundMintDate = kr_curr.getDate() - secoundMintKrCurr.getDate();
        const secoundMintTime =
            kr_curr.getHours() - secoundMintKrCurr.getHours();

        // first day mint
        if (firstMintDate === 0 && totalSupply <= 4000 && firstMintTime > 0) {
            return { validate: true, cost: "50" };
        }

        // secound day mint
        if (secoundMintDate === 0 && totalSupply <= 4000) {
            return { validate: true, cost: "50" };
        } else if (
            secoundMintDate === 0 &&
            totalSupply <= 8500 &&
            secoundMintTime > 0
        ) {
            return { validate: true, cost: "50" };
        }

        return { validate: false, cost: "0" };
    };

    const onClick = async () => {
        const isMintTime = await timeValidate();
        // const isMintTime = { validate: true, cost: "0.1" }
        if (isMintTime.validate === true) {
            const klaytn: any | undefined = (window as any).klaytn;
            if (klaytn === undefined) {
                alert("Please install kaikas first");
            }
            const result = await klaytn.enable();
            try {
                const mintResult = await new UserService().mintV2(
                    result[0],
                    isMintTime.cost
                );
                if (mintResult === true) {
                    alert("V2 minting success!!!");
                }
                window.location.reload();
            } catch (error) {
                alert(error);
            }
        } else {
            alert("It's not yet time to do mint.");
        }
    };

    useEffect(() => {
        getTotalSupply();
        connectKaikas();
    }, []);

    return {
        onClick,
        totalSupply,
        address,
    };
}
