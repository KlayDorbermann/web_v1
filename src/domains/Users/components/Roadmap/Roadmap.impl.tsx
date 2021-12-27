import Image from "next/image";
import { css } from "@emotion/react";

import roadmapHeader from "@assets/images/Roadmap_header.jpg";
import roeadmapBackground from "@assets/images/Roadmap_back.jpg";

const Roadmap: React.FC = () => {
    return (
        <div css={roadmapContainer}>
            <Image src={roadmapHeader} alt="roadmapHeader" />
            <div css={roadmapContainer}>
                <Image src={roeadmapBackground} alt="roeadmapBackground" />
                <div css={roadmapContextContainer}>
                    <div css={roadmapBetweenContainer}>
                        <div css={roadmapElementContainer}>
                            <div css={roadmapTitleStyle}>
                                2021. 4Q
                            </div>
                            <div css={roadmapContextStyle}>
                                Klaydobermann V1 수작업 <br />
                                Klaydobermann V2 open
                            </div>
                        </div>
                        <div css={roadmapElementContainer}>
                            <div css={roadmapTitleStyle}>
                                2022. 1Q
                            </div>
                            <div css={roadmapContextStyle}>
                                V1 도베르만 교체 <br />
                                풀채굴 분배 (V1 & V2) <br />
                                DAO 시스템 구현
                            </div>
                        </div>
                    </div>
                    <div css={roadmapBetweenContainer}>
                        <div css={roadmapElementContainer}>
                            <div css={roadmapTitleStyle}>
                                2022. 2Q
                            </div>
                            <div css={roadmapContextStyle}>
                                KlayDobermann V2 이미지 레벨업 <br />
                                교배시스템 개발 <br />
                                토크노믹스 구현 (DAO 결정)
                            </div>
                        </div>
                        <div css={roadmapElementContainer}>
                            <div css={roadmapTitleStyle}>
                                2022. 3Q
                            </div>
                            <div css={roadmapContextStyle}>
                                KlayDobermann V3 민팅 <br />
                                브리딩 시스템
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const roadmapContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: 'Courier New', Courier, monospace;
`

const roadmapContextContainer = css`
    position: absolute;
    color: #000;
    z-index: 100;
    font-size: 2vw;
    width: 70vw;
`

const roadmapBetweenContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10%;
    margin-left: 15%;
    margin-right: 15%;
`

const roadmapElementContainer = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

const roadmapTitleStyle = css`
    display: flex;
    font-size: 2vw;
    font-weight: bold;
`

const roadmapContextStyle = css`
    display: flex;
    align-items: center;
    margin-top: 1.3vw;
    font-size: 1.5vw
`

export default Roadmap;
