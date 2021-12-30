import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";

import { IIntroView } from "./intro.interface";

const IntroView: React.FC<IIntroView.IProps> = ({ introImage, onClick }) => {
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
                    {/* <div css={contentContinaer} onClick={onClick}> */}
                    <div css={contentContinaer}>
                        Mint
                    </div>
                </Link>
            </div>
            <div css={introImageContainer}>
                <Image
                    src={introImage}
                    alt="KlayDobermann_Intro"
                />
            </div>
        </div>
    )
}

const defaultContainer = css`
    display: flex;
    flex-direction: column;
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

const introImageContainer = css`
    width: 70vw;
`

export default IntroView;
