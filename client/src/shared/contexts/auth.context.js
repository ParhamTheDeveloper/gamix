import { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    const url = process.env.REACT_APP_SERVER_URL + "/login";
    if (
      !localStorage.getItem("user_email") ||
      !localStorage.getItem("user_password")
    ) {
      const result = await axios.post(url, {
        email,
        password,
      });
      const error = result.data?.error;
      if (error) {
        throw {
          email: error.invalidParams?.email,
          password: error.invalidParams?.password,
        };
      } else {
        setUser(result.data);
        localStorage.setItem("user_email", email);
        localStorage.setItem("user_password", password);
      }
    } else {
      const result = await axios.post(url, {
        email: localStorage.getItem("user_email"),
        password: localStorage.getItem("user_password"),
      });
      setUser(result.data);
    }
  };

  const handleSignup = async (username, email, password) => {
    const url = process.env.REACT_APP_SERVER_URL + "/signup";
    const result = await axios.post(url, {
      username,
      email,
      password,
    });
    const error = result.data?.error;
    if (error) {
      throw {
        username: error.invalidParams?.username,
        email: error.invalidParams?.email,
        password: error.invalidParams?.password,
      };
    } else {
      setUser(result.data);
    }
  };

  const handleLogout = async () => {
    setUser(null);
    localStorage.setItem("user_email", null);
    localStorage.setItem("user_password", null);
  };

  const value = {
    user,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onSignup: handleSignup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
