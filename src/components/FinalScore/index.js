import web_programming from "../../assets/picture/web_programming.svg";
import button_strzałka from "../../assets/picture/button_strzałka.svg";
import quiz_tech from "../../assets/picture/quiz_tech.svg";
import hand_brain from "../../assets/picture/shakespeare.svg";
import service from "../../assets/picture/service.svg";
import historia from "../../assets/picture/history.svg";
import {Link} from 'react-router-dom';
import cofnij_x from '../../assets/picture/cofnij_x.svg';
import zamknij_x from '../../assets/picture/zamknij_x.svg';


const FinalScore = ({score, handleRepeat,background,background5, color,bg_score,photo,sign}) => {

const categories1 = sign === "PROGRAMOWANIE" ? "display" : "none";
const categories2 = sign === "TECHNOLOGIA" ? "display" : "none";
const categories3 = sign === "HISTORIA" ? "display" : "none";
const categories4 = sign === "KULTURA" ? "display" : "none";
const categories5 = sign === "MOTORYZACJA" ? "display" : "none";

  return (
    <div className={bg_score}>
      <div className="score__letter">
        <p>Q</p>
      </div>
      <div className="score__feature">
        <div className="score__header">
          <p>QUIZ</p>
            <Link to='/'>
          <img src={cofnij_x} className="score__arrow" alt="cofnij"/>
          </Link>
            <Link to='/'>
          <img src={zamknij_x} alt="zamknij"/>
          </Link>
        </div>
        <div className="score__program-hidden">
          <div>
            <img src={photo} alt="categorie_icon" />
          </div>
          <p>{sign}</p>
        </div>
        <div className="score__subheader">
            <div className={background}><p>TWÓJ WYNIK</p></div>
            <div className={color}><p>{score}/10</p></div>
        </div>
        <div className={background5} onClick={handleRepeat}>
          <p>POWTÓRZ QUIZ</p>
          <img src={button_strzałka} alt="button_strzalka" />
        </div>
      </div>
      <div className="score__categories">
        <div className="score__categories-sign">
          <p>WYBIERZ INNĄ KATEGORIĘ:</p>
          </div>
          <div className="score__categories-categorie">
          <Link to='/technologia'>
        <div className={`score__tech ${color} ${categories2}`}>
          <div>
            <img src={quiz_tech} alt="quiz_tech" />
          </div>
          <p>TECHNOLOGIA</p>
        </div></Link>
        <Link to='/kultura'>
        <div className={`score__culture ${color} ${categories4}`}>
          <div>
            <img src={hand_brain} alt="brain" />
          </div>
          <p>KULTURA</p>
        </div></Link>
        <Link to='/motoryzacja'>
        <div className={`score__moto ${color} ${categories5}`}>
          <div>
            <img src={service} alt="car" />
          </div>
          <p>MOTORYZACJA</p>
        </div></Link>
        <Link to='/programowanie'>
        <div className={`score__program ${color} ${categories1}`}>
          <div>
            <img src={web_programming} alt="computer" />
          </div>
          <p>PROGRAMOWANIE</p>
        </div></Link>
        <Link to='/historia'>
        <div className={`score__history ${color} ${categories3}`}>
          <div>
            <img src={historia} alt="book" />
          </div>
          <p>HISTORIA</p>
        </div></Link>
        </div>
      </div>
    </div>
  );
};

export default FinalScore;
