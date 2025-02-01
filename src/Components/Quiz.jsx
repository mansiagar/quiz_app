import axios from "axios";
import "react";
import { useEffect, useState } from "react";
import QuizItem from "./QuizItem";

const Quiz = () => {
  const [error, setError] = useState(null);
  const [Questions, setQuestion] = useState([]);
  const [result, setresult] = useState(false);
  //fetch quiz

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://dull-groovy-grenadilla.glitch.me/api/questions`
        );
        setQuestion(response.data.questions);
      } catch (error) {
        setError("something went wrong ,Please try again", error);
      }
    };
    fetchData();
  }, []);

  // handle answer
  const handleSelection = (questionid, selectedId) => {
    setresult(true);
    console.log(questionid, selectedId);
    setresult(selectedId);
  };
  //console.log(Questions);

  return (
    <div>
      This is Quiz page{error && <h1>{error}</h1>}
      <div className="question_container">
        <h1>Take th Quiz</h1>
        {Questions.map((ques) => (
          <div key={ques.id}>
            <QuizItem
              id={ques.id}
              question={ques.question}
              options={ques.options}
              correctAnswer={ques.answer}
              onAnswerSelected={(selectedOption) =>
                handleSelection(ques.id, selectedOption)
              }
            />
            {result === ques.answer && <h1>Correct{ques.answer}</h1>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
