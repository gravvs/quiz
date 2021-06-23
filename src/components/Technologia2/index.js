import Generalquest from "../Generalquest"
import quiz_tech from "../../assets/picture/quiz_tech.svg";

const Technologia2 = () => {
  const API_URL =
  "https://opentdb.com/api.php?amount=10&category=17&type=multiple";
  const background = "technologia__subheader";
  const background2 = "technologia__answers";
  const background3 = "technologia__button2";
  const background4 = "technologia__button3";
  const background5 = "technologia__button";
  const color = "technologia__color";
  const categories="technologia__dragdrop";
  const categorie="technologia__normal";
  const bg_score="technologia__bg-score";
  const photo = quiz_tech;
  const sign = "TECHNOLOGIA";
  return(
    <div>
        <Generalquest
         API_URL={API_URL}
         background={background}
         background2={background2}
         background3={background3}
         background4={background4}
         background5={background5}
         bg_score={bg_score}
         color={color}
         categories={categories}
         categorie={categorie}
         sign={sign}
         photo={photo}
        />
    </div>
  );
};
export default Technologia2;
