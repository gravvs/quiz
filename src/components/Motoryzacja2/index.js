import Generalquest from "../Generalquest";
import service from "../../assets/picture/service.svg";

const Motoryzacja2 = () => {
  const API_URL =
  "https://opentdb.com/api.php?amount=10&category=28&type=multiple";
  const background = "motoryzacja__subheader";
  const background2 = "motoryzacja__answers";
  const background3 = "motoryzacja__button2";
  const background4 = "motoryzacja__button3";
  const background5 = "motoryzacja__button";
  const color = "motoryzacja__color";
  const categories="motoryzacja__dragdrop";
  const categorie="motoryzacja__normal";
  const bg_score="motoryzacja__bg-score";
  const photo = service;
  const sign = "MOTORYZACJA";
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
export default Motoryzacja2;
