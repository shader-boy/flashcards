import { useState } from "react";
import "./index.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "Javascript",
  },
  {
    id: 3458,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 3459,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 3460,
    question: "What language is React based on?",
    answer: "Javascript",
  },
  {
    id: 3461,
    question: "What language is React based on?",
    answer: "Javascript",
  },
  {
    id: 3462,
    question: "What language is React based on?",
    answer: "Javascript",
  },
];

function FlashCards() {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
    console.log(id);
  }

  return (
    <div className="flashcards">
      {questions.map((question) => (
        <div
          key={question.id}
          className={question.id === selectedId ? "selected" : ""}
          onClick={() => handleClick(question.id)}
        >
          <p>
            {question.id === selectedId ? question.answer : question.question}
          </p>
        </div>
      ))}
    </div>
  );
}
