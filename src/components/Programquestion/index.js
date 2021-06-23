import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";
import verification from '../../assets/picture/verification.svg';

const Programquestion = ({
  showAnswer,
  currentIndex,
  handleAnswer,
  nextQuestion,
  categorie,
  background,
  background2,
  background3,
  color,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div className={categorie}>
      <div className="normalquestion__letter">
        <p>Q</p>
      </div>
      <div className="normalquestion__feature">
        <div className="normalquestion__header-relative">
          <p>QUIZ</p>
          <Link to="/">
            <p className="normalquestion__arrow">&lt;</p>
          </Link>
          <Link to="/">
            <p>&Chi;</p>
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
          {answers.map((answer, inx) => {
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
                className={bgColor}
              >
                <p dangerouslySetInnerHTML={{ __html: answer }} />
                <img src={verification} className={visible}/>
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
