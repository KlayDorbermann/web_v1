import { css } from "@emotion/react"

const DefaultBackground: React.FC = () => {
    return <div css={backgroundStyle}></div>
}

const backgroundStyle = css`
    background-color: #000;
    display: flexbox;
    width: 100vw;
    height: 100vh;
`

export default DefaultBackground