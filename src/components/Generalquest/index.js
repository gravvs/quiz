import React, { useEffect, useState } from "react";
import Dragdrop from "../Dragdrop";
import FinalScore from "../FinalScore";
import Programquestion from "../Programquestion";
import Loader from "react-loader-spinner";


const Generalquest = ({API_URL, background, background2,background3,background4,background5,color,categorie,categories,bg_score,photo,sign,answer_button,answers_button}) => {

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
  }, [API_URL]);

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
  const number3 = currentIndex === 3;
  const number6 = currentIndex === 6;
  return questions.length > 0 ? (
    <div>
      {currentIndex >= questions.length ? (
        <FinalScore
        handleRepeat={handleRepeat}
        score={score}
        background={background}
        background5={background5}
        color={color}
        bg_score={bg_score}
        photo={photo}
        sign={sign}
        />
      ) : (number3 || number6 ? (
        <Dragdrop
        score={score}
        setScore={setScore}
        setshowAnswer={setshowAnswer}
          currentIndex={currentIndex}
          nextQuestion={nextQuestion}
          showAnswer={showAnswer}
          data={questions[currentIndex]}
          handleAnswer={handleAnswer}
          categories={categories}
          background={background}
          background2={background2}
          answer_button={answer_button}
          background4={background4}
          color={color}
        />
      ) : (<Programquestion
      currentIndex={currentIndex}
      nextQuestion={nextQuestion}
      showAnswer={showAnswer}
      data={questions[currentIndex]}
      handleAnswer={handleAnswer} 
      categorie={categorie}
      background={background}
      background2={background2}
      background3={background3}
      answers_button={answers_button}
      color={color}
      />
      ))}
    </div>
  ) : (
    <div className="loader">
    <Loader
    type="BallTriangle"
    color="#00BFFF"
    height={450}
    width={450}
    timeout={3000} />
    </div>
  );
};
export default Generalquest;
