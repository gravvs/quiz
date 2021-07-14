import Generalquest from "../Generalquest"
import historia from "../../assets/picture/history.svg";

const Historia2 = () => {
    const API_URL =
    "https://opentdb.com/api.php?amount=10&category=23&type=multiple";
    const background = "historia__subheader";
    const background2 = "historia__answers";
    const background3 = "historia__button2";
    const background4 = "historia__button3";
    const background5 = "historia__button";
    const answer_button = "historia__answer-button"
    const answers_button = "historia__answers-button";
    const color = "historia__color";
    const categories="historia__dragdrop";
    const categorie="historia__normal";
    const bg_score="historia__bg-score";
    const photo = historia;
    const sign = "HISTORIA";
    return(
        <div className="historia">
            <Generalquest
             API_URL={API_URL}
             background={background}
             background2={background2}
             background3={background3}
             background4={background4}
             background5={background5}
             answer_button={answer_button}
             answers_button={answers_button}
             bg_score={bg_score}
             color={color}
             categories={categories}
             categorie={categorie}
             sign={sign}
             photo={photo}
            />
        </div>
    )
}
export default Historia2;