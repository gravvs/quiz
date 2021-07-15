import React from "react";
import {Link} from 'react-router-dom';
import verification from '../../assets/picture/verification.svg';
import cofnij_x from '../../assets/picture/cofnij_x.svg';
import zamknij_x from '../../assets/picture/zamknij_x.svg';

interface iProgramquestion {
  showAnswer:boolean;
  currentIndex:number;
  handleAnswer:Function;
  nextQuestion:any;
  categorie:string;
  background:string;
  background2:string;
  answers_button:string;
  background3:string;
  color:string;
  question:string;
  correct_answer:string;
  answers:string;
  data: any;
}

const Programquestion = ({
  showAnswer,
  currentIndex,
  handleAnswer,
  nextQuestion,
  categorie,
  background,
  background2,
  background3,
  answers_button,
  color,
  data: { question, correct_answer, answers },
}:iProgramquestion) => {
  return (
    <div className={categorie}>
      <div className="normalquestion__letter">
        <p>Q</p>
      </div>
      <div className="normalquestion__feature">
        <div className="normalquestion__header-relative">
          <p>QUIZ</p>
          <Link to="/">
            <img src={cofnij_x} className="normalquestion__arrow" alt="cofnij"/>
          </Link>
          <Link to="/">
            <img src={zamknij_x} alt="zamknij"/>
          </Link>
        </div>
        <div className={background}>
          <p>SELECT THE CORRECT ANSWER</p>
          <p className={color}>
            {currentIndex + 1}/<span className="pink">10</span>
          </p>
        </div>
        <div className="normalquestion__question">
          <p dangerouslySetInnerHTML={{ __html: question }} />
        </div>
        <div className={background2}>
          {answers.map((answer:any, inx:any) => {
            const bgColor = showAnswer
              ? answer === correct_answer
                ? "green"
                : "red"
              : "bgcolor";
              const visible = showAnswer
              ? answer === correct_answer
                ? "visible"
                : "unvisible"
              : "unvisible";
            return (
              <div
                onClick={() => handleAnswer(answer)}
                key={inx}
                className={answers_button + " " + bgColor}
              >
                <p dangerouslySetInnerHTML={{ __html: answer }} />
                <img src={verification} className={visible} alt="correct_answer"/>
              </div>
            );
          })}
        </div>
        {showAnswer && <button onClick={nextQuestion} className={background3}>Next question</button>}
      </div>
    </div>
  );
};

export default Programquestion;
