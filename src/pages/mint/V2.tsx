import type { NextPage } from "next";
import { css } from "@emotion/react";
import Head from "next/head";

import { V2Mint, Bottom } from "@domains/Users/components";

const V2MintPage: NextPage = () => {
    return (
        <>
            <Head>
                <link rel="header icon" href="/KlayDobermann_logo.png" />
                <title>Klay Dobermann</title>
            </Head>
            <div css={defaultStyle}>
                <div css={sizingStyle}>
                    <V2Mint />
                    <Bottom />
                </div>
            </div>
        </>
    )
}

const defaultStyle = css`
    background-color: #000;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const sizingStyle = css`
    width: 70vw;
`

export default V2MintPage