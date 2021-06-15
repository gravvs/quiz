import React, { useEffect, useState } from "react";
import Dragdrop from "../Dragdrop";
import FinalScore from "../FinalScore";
import Programquestion from "../Programquestion";

const API_URL =
  "https://opentdb.com/api.php?amount=10&category=18&type=multiple";

const Programowanie2 = () => {
  const [questions, setquestions] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showAnswer, setshowAnswer] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const questions = data.results.map((question) => ({
          ...question,
          answers: [
            question.correct_answer,
            ...question.incorrect_answers,
          ].sort(() => Math.random() - 0.5),
        }));
        setquestions(questions);
      });
  }, []);

  const handleAnswer = (answer) => {
    if (!showAnswer) {
      if (answer === questions[currentIndex].correct_answer) {
        setScore(score + 1);
      }
    }
    setshowAnswer(true);
  };

  const handleRepeat = () => {
      setcurrentIndex(0);
      setScore(0);
  }

  const nextQuestion = () => {
    setshowAnswer(false);
    setcurrentIndex(currentIndex + 1);
  };

  const number = currentIndex === 4;

  return questions.length > 0 ? (
    <div className="normalquestion">
      {currentIndex >= questions.length ? (
        <FinalScore
        handleRepeat={handleRepeat}
        score={score}
        />
      ) : (number ? (
        <Dragdrop
        score={score}
        setScore={setScore}
        setshowAnswer={setshowAnswer}
          currentIndex={currentIndex}
          nextQuestion={nextQuestion}
          showAnswer={showAnswer}
          data={questions[currentIndex]}
          handleAnswer={handleAnswer}
        />
      ) : (<Programquestion
      currentIndex={currentIndex}
      nextQuestion={nextQuestion}
      showAnswer={showAnswer}
      data={questions[currentIndex]}
      handleAnswer={handleAnswer} 
      />
      ))}
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};
export default Programowanie2;
