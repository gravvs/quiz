import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

const Programquestion = ({
  showAnswer,
  currentIndex,
  handleAnswer,
  nextQuestion,
  data: { question, correct_answer, answers },
}) => {
  return (
    <div>
      <div className="normalquestion__letter">
        <p>Q</p>
      </div>
      <div className="normalquestion__feature">
        <div className="normalquestion__header-relative">
          <p>QUIZ</p>
          <Link to="/programowanie">
            <p className="normalquestion__arrow">&lt;</p>
          </Link>
          <Link to="/">
            <p>&Chi;</p>
          </Link>
        </div>
        <div className="normalquestion__subheader">
          <p>SELECT THE CORRECT ANSWER</p>
          <p>
            {currentIndex + 1}/<span>10</span>
          </p>
        </div>
        <div className="normalquestion__question">
          <p dangerouslySetInnerHTML={{ __html: question }} />
        </div>
        <div className="normalquestion__answers">
          {answers.map((answer, inx) => {
            const bgColor = showAnswer
              ? answer === correct_answer
                ? "green"
                : "red"
              : "bgcolor";
            return (
              <div
                onClick={() => handleAnswer(answer)}
                className={bgColor}
                key={inx}
              >
                <p dangerouslySetInnerHTML={{ __html: answer }} />
              </div>
            );
          })}
        </div>
        {showAnswer && <button onClick={nextQuestion}>Next question</button>}
      </div>
    </div>
  );
};

export default Programquestion;
