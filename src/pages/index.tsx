import type { NextPage } from "next";

import { ErrorBoundary } from "@domains/Errors";
import { DefaultBackground, Intro, Story, Team } from "@domains/Users/components";
import { css } from "@emotion/react";

const Home: NextPage = () => {
    return (
        <div css={defaultStyle}>
            <ErrorBoundary>
                {/* <DefaultBackground> */}
                <div css={sizingStyle}>
                    <Intro />
                    <Story />
                    <Team />
                </div>
                {/* </DefaultBackground> */}
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
`

const sizingStyle = css`
    width: 85vw;
`

export default Home;
