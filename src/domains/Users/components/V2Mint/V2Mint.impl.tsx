import { css } from "@emotion/react";
import Link from "next/link";
import Image from "next/image";

import mintImage from "@assets/images/V2MintImage.png";
import { useV2Mint } from "../../hooks";

const V2Mint: React.FC = () => {
    const { onClick, totalSupply, address } = useV2Mint();

    return (
        <div css={defaultContainer}>
            <div css={bannerContainer}>
                <Link href={'/'}>
                    <div css={titleStyle}>
                        Klay Dobermann
                    </div>
                </Link>
                <Link href={'/'}>
                    <div css={contentContinaer}>
                        Home
                    </div>
                </Link>
                {/* <div css={contentContinaer}>
                    The Story
                </div>
                <div css={contentContinaer}>
                    Road map
                </div>
                <div css={contentContinaer}>
                    Team
                </div> */}
                <Link href={'/mint/V2'}>
                    <div css={contentContinaer}>
                        Mint
                    </div>
                </Link>
            </div>
            <div css={remainingDobermanStyle}>
                Remaining Dobermann : {totalSupply}
            </div>
            <div css={addressStyle}>
                Connect Wallet : {address}
            </div>
            <div css={mintImageStyle} onClick={onClick}>
                <Image src={mintImage} />
            </div>
        </div>
    )
}

const defaultContainer = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const bannerContainer = css`
    display: flex;
    background-color: #000;
    width: 70vw;
    height: 15vh;
`

const titleStyle = css`
    width: 100vw;
    font-family: 'Courier New', Courier, monospace;
    font-size: 2.9vw;
    display: flex;
    color: #fff;
    margin: 1%;
    cursor: pointer;
`

const contentContinaer = css`
    width: 30vw;
    flex-direction: column;
    justify-content: end;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.2vw;
    display: flex;
    color: #fff;
    margin: 1%;
    cursor: pointer;
`

const remainingDobermanStyle = css`
    display: flex;
    justify-content: center;
    width: 100vw;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.5vw;
    display: flex;
    color: #fff;
    margin: 1%;
    cursor: pointer;
`;

const addressStyle = css`
    display: flex;
    justify-content: center;
    width: 100vw;
    font-family: 'Courier New', Courier, monospace;
    font-size: 0.8vw;
    display: flex;
    color: #fff;
    margin: 1%;
    cursor: pointer;
`

const mintImageStyle = css`
    width: 50vw;
    cursor: pointer;
`

export default V2Mint