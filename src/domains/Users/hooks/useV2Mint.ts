import { UserService } from "../services/user.service";

export default function useV2Mint() {
    const timeValidate = async () => {
        const curr = new Date();
        const utc = curr.getTime() + curr.getTimezoneOffset() * 60 * 1000;
        const KR_TIME_DIFF = 9 * 60 * 60 * 1000;
        const kr_curr = new Date(utc + KR_TIME_DIFF);
        const totalSupply = await new UserService().getTotalSupply();

        const firstMit = new Date(2021, 12, 30, 20);
        const firstMintTimeUtc =
            firstMit.getTime() + firstMit.getTimezoneOffset() * 60 * 1000;
        const firstMintKrCurr = new Date(firstMintTimeUtc + KR_TIME_DIFF);
        const firstMintDate = kr_curr.getDate() - firstMintKrCurr.getDate();
        const firstMintTime = kr_curr.getHours() - firstMintKrCurr.getHours();

        const secoundMint = new Date(2022, 1, 1, 20);
        const secoundMintTimeUtc =
            secoundMint.getTime() + secoundMint.getTimezoneOffset() * 60 * 1000;
        const secoundMintKrCurr = new Date(secoundMintTimeUtc + KR_TIME_DIFF);
        const secoundMintDate = kr_curr.getDate() - secoundMintKrCurr.getDate();
        const secoundMintTime =
            kr_curr.getHours() - secoundMintKrCurr.getHours();

        const thirdMint = new Date(2022, 1, 2, 20);
        const thirdMintTimeUtc =
            thirdMint.getTime() + thirdMint.getTimezoneOffset() * 60 * 1000;
        const thirdMintKrCurr = new Date(thirdMintTimeUtc + KR_TIME_DIFF);
        const thirdMintDate = kr_curr.getDate() - thirdMintKrCurr.getDate();
        const thirdMintTime = kr_curr.getHours() - thirdMintKrCurr.getHours();

        const forthMint = new Date(2022, 1, 3, 20);
        const forthMintTimeUtc =
            forthMint.getTime() + forthMint.getTimezoneOffset() * 60 * 1000;
        const forthMintKrCurr = new Date(forthMintTimeUtc + KR_TIME_DIFF);
        const forthMintDate = kr_curr.getDate() - forthMintKrCurr.getDate();
        const forthMintTime = kr_curr.getHours() - forthMintKrCurr.getHours();

        // first day mint
        if (firstMintDate === 0 && totalSupply <= 2000 && firstMintTime > 0) {
            return { validate: true, cost: "50" };
        }

        // secound day mint
        if (secoundMintDate === 0 && totalSupply <= 2000) {
            return { validate: true, cost: "50" };
        } else if (
            secoundMintDate === 0 &&
            totalSupply <= 4000 &&
            secoundMintTime > 0
        ) {
            return { validate: true, cost: "50" };
        }

        // thrid day mint
        if (thirdMintDate === 0 && totalSupply <= 4000) {
            return { validate: true, cost: "50" };
        } else if (
            thirdMintDate === 0 &&
            totalSupply <= 6000 &&
            thirdMintTime > 0
        ) {
            return { validate: true, cost: "50" };
        }

        // forth day mint
        if (forthMintDate === 0 && totalSupply <= 6000) {
            return { validate: true, cost: "50" };
        } else if (
            forthMintDate === 0 &&
            totalSupply <= 8500 &&
            forthMintTime > 0
        ) {
            return { validate: true, cost: "50" };
        }

        return { validate: false, cost: "0" };
    };

    const onClick = async () => {
        // const isMintTime = await timeValidate();
        const isMintTime = { validate: true, cost: "0.1" }
        if (isMintTime.validate === true) {
            const klaytn: any | undefined = (window as any).klaytn;
            if (klaytn === undefined) {
                alert("Please install kaikas first");
            }
            const result = await klaytn.enable();
            alert(`Connected ${result[0]}`);
            try {
                const mintResult = await new UserService().mintV2(
                    result[0],
                    isMintTime.cost
                );
                if (mintResult === true) {
                    alert("V2 minting success!!!");
                }
            } catch (error) {
                alert(error);
            }
        } else {
            alert("It's not yet time to do mint.");
        }
    };

    return {
        onClick,
    };
}
