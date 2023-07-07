import React, { useState } from "react";
import "./App.css"; // Import the CSS file for styling

import dudleyDursley from "./dudley-dursley.webp";
import rubeusHagrid from "./rubeus-hagrid.jpg";
import ronWeasley from "./ron-weasley.jpg";
import harryPotter from "./harry-potter.jpg";
import hermioneGranger from "./hermione-granger.webp";
import minervaMcgonagall from "./minerva-mcgonagall.jpg"
// Import more images here...

export default function App() {
  const questions = [
    {
      difficulty: "Dudley Dursley",
      questionText: "What is the name of Harry Potter's owl?",
      answerOptions: [
        { answerText: "Hedwig", isCorrect: true },
        { answerText: "Crookshanks", isCorrect: false },
        { answerText: "Errol", isCorrect: false },
        { answerText: "Pigwidgeon", isCorrect: false }
      ],
      imageSrc: dudleyDursley
    },
    {
      difficulty: "Rubeus Hagrid",
      questionText: "Which Hogwarts house does Luna Lovegood belong to?",
      answerOptions: [
        { answerText: "Gryffindor", isCorrect: false },
        { answerText: "Ravenclaw", isCorrect: true },
        { answerText: "Hufflepuff", isCorrect: false },
        { answerText: "Slytherin", isCorrect: false }
      ],
      imageSrc: rubeusHagrid
    },
    {
      difficulty: "Ron Weasley",
      questionText: "What is the name of Ron Weasley's pet rat?",
      answerOptions: [
        { answerText: "Hedwig", isCorrect: false },
        { answerText: "Scabbers", isCorrect: true },
        { answerText: "Crookshanks", isCorrect: false },
        { answerText: "Pigwidgeon", isCorrect: false }
      ],
      imageSrc: ronWeasley // Add the image source for this question
    },
    {
      difficulty: "Harry Potter",
      questionText: "What is the name of the main antagonist in the Harry Potter series?",
      answerOptions: [
        { answerText: "Draco Malfoy", isCorrect: false },
        { answerText: "Voldemort", isCorrect: true },
        { answerText: "Lucius Malfoy", isCorrect: false },
        { answerText: "Severus Snape", isCorrect: false }
      ],
      imageSrc: harryPotter // Add the image source for this question
    },
    {
      difficulty: "Hermione Granger",
      questionText: "Which spell is used to disarm an opponent?",
      answerOptions: [
        { answerText: "Expelliarmus", isCorrect: true },
        { answerText: "Avada Kedavra", isCorrect: false },
        { answerText: "Stupefy", isCorrect: false },
        { answerText: "Crucio", isCorrect: false }
      ],
      imageSrc: hermioneGranger // Add the image source for this question
    },
    {
      difficulty: "Minerva McGonagall",
      questionText: "Who is the head of Gryffindor house in Harry Potter?",
      answerOptions: [
        { answerText: "Rubeus Hagrid", isCorrect: false },
        { answerText: "Severus Snape", isCorrect: false },
        { answerText: "Minerva McGonagall", isCorrect: true },
        { answerText: "Albus Dumbledore", isCorrect: false }
      ],
      imageSrc: minervaMcgonagall // Add the image source for this question
    },
    // Add more questions here...
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerButtonClick = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const reset = () => {
    setCurrentQuestion(0);
    setShowScore(false);
    setScore(0);
  };

  

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          <h1>Your Result</h1>
          <h2>Score: {score} out of {questions.length}</h2>
          <button onClick={reset}>Play Again</button>
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="difficulty-level">
              Difficulty: {questions[currentQuestion].difficulty}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
            <div className="question-image">
              <img
                src={questions[currentQuestion].imageSrc}
                alt="Question"
                className="question-image__img" // Added CSS class for image styling
              />
            </div>
          </div>
          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                onClick={() => handleAnswerButtonClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
