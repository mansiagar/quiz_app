import "react";
import axios from "axios";
import { useContext, useState } from "react";
import { Auth } from "../Create";
import { useNavigate } from "react-router-dom";
import "../style/Home.css";
const Home = () => {
  // login form display state
  const [loginForm, setLoginForm] = useState(false);
  const [content, setContent] = useState(true);
  const [formdata, setFormdata] = useState({ username: "", password: "" });

  //error
  const [error, setError] = useState(null);
  const { login } = useContext(Auth);
  const handleClick = () => {
    setLoginForm(true);
    setContent(false);
  };
  // navigate
  const navigate = useNavigate();

  // handleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formdata, [name]: value });
  };

  //handleSubmit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      const response = await axios.post(
        `https://dull-groovy-grenadilla.glitch.me/login`,
        formdata
      );
      const token = response.data.token;
      login(token);
      if (!token) {
        navigate("/quiz");
      }
    } catch (error) {
      setError("Invalid crediential", error);
    }
  };

  return (
    <div className="home_container">
      {content && (
        <div>
          <h1>WelCome to the Quiz App!</h1>
          <h5>
            Test your knowledge and chellenge yourself with our quiz.Please
            <a onClick={handleClick}> Login </a>
            to get started
          </h5>
        </div>
      )}

      {loginForm && (
        <form className="form-container" onSubmit={handleSubmit}>
          <input
            className="login-container"
            type="text"
            name="username"
            value={formdata.username}
            onChange={handleChange}
            placeholder="Enter username"
          ></input>
          <input
            className="login-container"
            type="password"
            name="password"
            value={formdata.password}
            onChange={handleChange}
            placeholder="Enter Password"
          ></input>
          <button className="login-btn" type="submit">
            Login
          </button>
          {error && <h1>{error}</h1>}
        </form>
      )}
    </div>
  );
};

export default Home;
