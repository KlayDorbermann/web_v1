import introImage from "@assets/images/KlayDobermann_Intro.png";
import { IntroView } from "@domains/Users/view";

const Intro: React.FC = () => {
    const readyMintOnClick = () => {
        alert('Comming soon');
    }

    return <IntroView introImage={introImage} onClick={readyMintOnClick} />
}

export default Intro;
