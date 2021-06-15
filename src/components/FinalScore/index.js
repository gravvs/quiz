import web_programming from "../../assets/picture/web_programming.svg";
import button_strzałka from "../../assets/picture/button_strzałka.svg";
import quiz_tech from "../../assets/picture/quiz_tech.svg";
import hand_brain from "../../assets/picture/shakespeare.svg";
import service from "../../assets/picture/service.svg";
import historia from "../../assets/picture/history.svg";

const FinalScore = ({score, handleRepeat}) => {
  return (
    <div className="score">
      <div className="score__letter">
        <p>Q</p>
      </div>
      <div className="score__feature">
        <div className="score__header">
          <p>QUIZ</p>
          <p className="score__arrow">&lt;</p>
          <p>&Chi;</p>
        </div>
        <div className="score__program-hidden">
          <div>
            <img src={web_programming} alt="computer_icon" />
          </div>
          <p>PROGRAMOWANIE</p>
        </div>
        <div className="score__subheader">
            <div className="score__subheader-p"><p>TWÓJ WYNIK</p></div>
            <div><p>{score}/10</p></div>
        </div>
        <div className="score__button" onClick={handleRepeat}>
          <p>POWTÓRZ QUIZ</p>{" "}
          <img src={button_strzałka} alt="button_strzalka" />
        </div>
      </div>
      <div className="score__categories">
          <p>WYBIERZ INNĄ KATEGORIĘ:</p>
        <div className="score__tech">
          <div>
            <img src={quiz_tech} alt="quiz_tech" />
          </div>
          <p>TECHNOLOGIA</p>
        </div>
        <div className="score__culture">
          <div>
            <img src={hand_brain} alt="brain" />
          </div>
          <p>KULTURA</p>
        </div>
        <div className="score__moto">
          <div>
            <img src={service} alt="car" />
          </div>
          <p>MOTORYZACJA</p>
        </div>
        <div className="score__history">
          <div>
            <img src={historia} alt="book" />
          </div>
          <p>HISTORIA</p>
        </div>
      </div>
    </div>
  );
};

export default FinalScore;
