import { css } from "@emotion/react";
import Image from "next/image";

import leaderImage from "@assets/images/Leader.jpeg";
import artistImage from "@assets/images/Artist.jpeg";
import tokImage from "@assets/images/Tok.jpeg";
import devImage from "@assets/images/Dev.jpeg";

const Team: React.FC = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div css={titleStyle}>
                Our Team
            </div>
            <div css={contextStyle}>
                <div css={imageContainer}>
                    <div css={imageStyle}>
                        <Image src={leaderImage} />
                        Leader / KDM
                    </div>
                    <div css={imageStyle}>
                        <Image src={artistImage} />
                        Artist / Doguro
                    </div>
                    <div css={imageStyle}>
                        <Image src={tokImage} />
                        Director / Tok Tok
                    </div>
                    <div css={imageStyle}>
                        <Image src={devImage} />
                        Developer / Foo
                    </div>
                </div>
            </div>
        </div>
    )
}

const titleStyle = css`
    width: 100vw;
    font-family: 'Courier New', Courier, monospace;
    font-size: 3.5vw;
    display: flex;
    color: #fff;
    margin: 1%;
`

const contextStyle = css`
    font-family: 'Courier New', Courier, monospace;
    color: #fff;
    display: flex;
    font-size: 1.3vw;
    width: 70vw;
    text-align: left;
    display: flex;
`

const imageContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
`

const imageStyle = css`
    margin: 1%
`

export default Team