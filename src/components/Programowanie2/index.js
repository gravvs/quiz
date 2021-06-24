import Generalquest from "../Generalquest";
import web_programming from "../../assets/picture/web_programming.svg";

const Programowanie2 = () => {
  const API_URL =
  "https://opentdb.com/api.php?amount=10&category=18&type=multiple";
  const background = "programowanie__subheader";
  const background2 = "programowanie__answers";
  const background3 = "programowanie__button2";
  const background4 = "programowanie__button3";
  const background5 = "programowanie__button";
  const color = "programowanie__color";
  const categories="programowanie__dragdrop";
  const categorie="programowanie__normal";
  const bg_score="programowanie__bg-score";
  const photo = web_programming;
  const sign = "PROGRAMOWANIE";
  return(
    <div className="programowanie">
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
export default Programowanie2;
