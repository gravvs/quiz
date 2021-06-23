import Generalquest from "../Generalquest";
import hand_brain from "../../assets/picture/shakespeare.svg";

const Kultura2 = () => {
  const API_URL =
  "https://opentdb.com/api.php?amount=10&category=9&type=multiple";
  const background = "kultura__subheader";
  const background2 = "kultura__answers";
  const background3 = "kultura__button2";
  const background4 = "kultura__button3";
  const background5 = "kultura__button";
  const color = "kultura__color";
  const categories="kultura__dragdrop";
  const categorie="kultura__normal";
  const bg_score="kultura__bg-score";
  const photo = hand_brain;
  const sign = "KULTURA";
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
  )}
export default Kultura2;
