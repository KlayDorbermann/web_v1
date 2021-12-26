import { css } from "@emotion/react";

const Story: React.FC = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <div css={titleStyle}>
                Story
            </div>
            <div css={contextStyle}>
                This is Context <br />
                Bla Bla BlaBla Bla Bla <br />
                Bla Bla BlaBla Bla Bla <br />
                Bla Bla BlaBla Bla Bla <br />
                Bla Bla BlaBla Bla Bla <br />
                Bla Bla BlaBla Bla Bla <br />
                Bla Bla BlaBla Bla Bla <br />
                Bla Bla BlaBla Bla Bla <br />
                Bla Bla BlaBla Bla Bla <br />
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
    margin: 1%;
    color: #fff;
    display: flex;
    font-size: 1.3vw;
    width: 100vw;
    text-align: left;
`

export default Story