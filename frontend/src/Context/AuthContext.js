import { createContext, useState } from "react";
const AuthContext = createContext({
  token: "",
  isLoggedIn: false,
  login: function (authToken) {},
  logout: function () {},
});

export const AuthContextProvider = function (props) {
  const [token, setToken] = useState("");
  const userIsLoggedIn = !!token;

  const LoginHandler = function (authToken) {
    setToken(() => authToken);
  };
  const LogoutHandler = function () {
    setToken("");
  };

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: LoginHandler,
    logout: LogoutHandler,
  };
  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
