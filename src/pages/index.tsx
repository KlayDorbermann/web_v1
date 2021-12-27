import type { NextPage } from "next";
import Head from "next/head";
import { css } from "@emotion/react";

import { ErrorBoundary } from "@domains/Errors";
import { Intro, Story, Team, Roadmap, Bottom } from "@domains/Users/components";

const Home: NextPage = () => {
    return (
        <div css={defaultStyle}>
            <ErrorBoundary>
                <Head>
                    <link rel="header icon" href="/KlayDobermann_logo.png" />
                    <title>Klay Dobermann</title>
                </Head>
                <div css={sizingStyle}>
                    <Intro />
                    <Story />
                    <Roadmap />
                    <Team />
                    <Bottom />
                </div>
            </ErrorBoundary>
        </div>
    );
};

const defaultStyle = css`
    background-color: #000;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;
    /* width: 100vw; */
    /* height: 100vh; */
`;

const sizingStyle = css`
    width: 70vw;
`;

export default Home;
