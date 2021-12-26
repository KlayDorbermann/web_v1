import { css } from "@emotion/react";
import Image from "next/image";

import introImage from "@assets/images/KlayDobermann_Intro.png";

const Intro: React.FC = () => {
    return (
        <div css={defaultContainer}>
            <div css={bannerContainer}>
                <div css={titleStyle}>
                    Klay Dobermann
                </div>
                <div css={contentContinaer}>
                    Home
                </div>
                <div css={contentContinaer}>
                    The Story
                </div>
                <div css={contentContinaer}>
                    Road map
                </div>
                <div css={contentContinaer}>
                    Team
                </div>
                <div css={contentContinaer}>
                    Mint
                </div>
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
    width: 85vw;
    height: 15vh;
`

const titleStyle = css`
    width: 100vw;
    font-family: 'Courier New', Courier, monospace;
    font-size: 3.5vw;
    display: flex;
    color: #fff;
    margin: 1%;
`

const contentContinaer = css`
    width: 20vw;
    flex-direction: column;
    justify-content: end;
    font-family: 'Courier New', Courier, monospace;
    font-size: 1.3vw;
    display: flex;
    color: #fff;
    margin: 1%;
    cursor: pointer;
`

const introImageContainer = css`
    width: 85vw;
    /* height: 50vh; */
`

export default Intro;
