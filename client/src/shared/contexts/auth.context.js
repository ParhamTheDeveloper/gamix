import { createContext, useState } from "react";
import CryptoJs from "crypto-js";
import axios from "axios";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = async (email, password) => {
    const url = process.env.REACT_APP_SERVER_URL + "/login";
    if (
      localStorage.getItem("user_email") == "null" &&
      localStorage.getItem("user_password") == "null"
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
        localStorage.setItem(
          "user_email",
          CryptoJs.AES.encrypt(email, "user_secret_email").toString()
        );
        localStorage.setItem(
          "user_password",
          CryptoJs.AES.encrypt(password, "user_secret_password").toString()
        );
      }
    } else {
      const email = CryptoJs.AES.decrypt(
        localStorage.getItem("user_email"),
        "user_secret_email"
      );
      const decryptedEmail = email.toString(CryptoJs.enc.Utf8);
      const password = CryptoJs.AES.decrypt(
        localStorage.getItem("user_password"),
        "user_secret_password"
      );
      const decryptedPassword = password.toString(CryptoJs.enc.Utf8);
      const result = await axios.post(url, {
        email: decryptedEmail,
        password: decryptedPassword,
      });
      setUser(result.data);
    }
  };

  const handleSignup = async (username, email, password) => {
    const url = process.env.REACT_APP_SERVER_URL + "/signup";
    if (
      localStorage.getItem("user_email") == "null" &&
      localStorage.getItem("user_password") == "null"
    ) {
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
        localStorage.setItem(
          "user_email",
          CryptoJs.AES.encrypt(email, "user_secret_email").toString()
        );
        localStorage.setItem(
          "user_password",
          CryptoJs.AES.encrypt(password, "user_secret_password").toString()
        );
      }
    } else {
      const email = CryptoJs.AES.decrypt(
        localStorage.getItem("user_email"),
        "user_secret_email"
      );
      const decryptedEmail = email.toString(CryptoJs.enc.Utf8);
      const password = CryptoJs.AES.decrypt(
        localStorage.getItem("user_password"),
        "user_secret_password"
      );
      const decryptedPassword = password.toString(CryptoJs.enc.Utf8);
      const result = await axios.post(url, {
        email: decryptedEmail,
        password: decryptedPassword,
      });
      setUser(result.data);
    }
  };

  const handleLogout = async () => {
    setUser(null);
    localStorage.setItem("user_email", "null");
    localStorage.setItem("user_password", "null");
  };

  const value = {
    user,
    onLogin: handleLogin,
    onLogout: handleLogout,
    onSignup: handleSignup,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
