import "react";
import "../style/Home.css";
const Home = () => {
  return (
    <div className="home_container">
      <div>
        <h1>WelCome to the Quiz App!</h1>
        <h5>
          Test your knowledge and chellenge yourself with our quiz.Please
          <a href="/login"> Login </a> to get started
        </h5>
      </div>
    </div>
  );
};

export default Home;
