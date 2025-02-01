import axios from "axios";
import "react";
import { useEffect, useState } from "react";
import QuizItem from "./QuizItem";

const Quiz = () => {
  const [error, setError] = useState(null);
  const [Questions, setQuestion] = useState([]);
  //const [result, setresult] = useState([]);
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
    console.log(questionid, selectedId);
    // setresult((prev)=>[...prev.filter(item)=> item.id !== questionid],)
  };
  //console.log(Questions);
  Questions.forEach((item) => console.log(item.options[0]));
  return (
    <div>
      This is Quiz page{error && <h1>{error}</h1>}
      <div className="question_container">
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
