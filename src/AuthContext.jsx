import "react";
import { Auth } from "./Create";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [isAuthenticate, setAuthenticate] = useState(false);
  const [token, setToken] = useState(null);

  useEffect(() => {
    console.log(token, "token in context");
  }, [token]);

  const navigate = useNavigate();
  const login = (authToken) => {
    setToken(authToken);
    setAuthenticate(true);
    localStorage.setItem("token", authToken);
    navigate("/quiz");
  };
  const logout = () => {
    setToken(null);
    setAuthenticate(false);
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <Auth.Provider value={{ login, isAuthenticate, token, logout }}>
      {children}
    </Auth.Provider>
  );
};

export default AuthContext;
