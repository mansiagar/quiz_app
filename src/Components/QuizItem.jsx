import "react";

// eslint-disable-next-line react/prop-types
const QuizItem = ({ id, question, options, onAnswerSelected }) => {
  return (
    <div>
      <h1>Take th Quiz</h1>
      <h1>
        Q.no:{id} {question}
      </h1>
      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <button onClick={() => onAnswerSelected(option)}>{option}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizItem;
