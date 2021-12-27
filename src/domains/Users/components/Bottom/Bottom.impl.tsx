import { css } from "@emotion/react";

const Bottom: React.FC = () => {
    return (
        <div css={defaultContainer}>
            <div css={bottomContainer}>
                <div css={contentContinaer}>
                    copyrightⓒ 2021 All rights reserved by Klay Dobermann. <br />
                    Klay Dobermann NFT does not include a license. <br /> The Klay Dobermann license is entirely owned by the Klay Dobermann dev team (Artist, Team Leader). <br />
                    If you use a picture without permission, you can be legally punished.
                </div>
            </div>
        </div>
    )
}

const defaultContainer = css`
    margin-top: 15%;
    display: flex;
`
const bottomContainer = css`
    display: flex;
    background-color: #000;
    width: 70vw;
    height: 15vh;
`

const contentContinaer = css`
    width: 80vw;
    font-family: 'Courier New', Courier, monospace;
    color: #fff;
    font-size: 0.7vw;
    margin: 1%;
`

export default Bottom;
