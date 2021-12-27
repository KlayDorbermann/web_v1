export default function useV2Mint() {
    const onClick = async () => {
        const klaytn: any | undefined = (window as any).klaytn;
        if (klaytn !== undefined) {
            const result = await klaytn.enable()
            alert(`Connected ${result[0]}`)
        }
    }

    return {
        onClick
    }
}