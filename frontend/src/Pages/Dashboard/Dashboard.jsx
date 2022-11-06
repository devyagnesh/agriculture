import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Nav from "../../Components/Nav/Nav";
import AuthContext from "../../Context/AuthContext";
const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(authContext.isLoggedIn);
  if (!authContext.isLoggedIn) {
    return navigate("/");
  }
  return (
    <>
      <Header />
      <Nav />
    </>
  );
};

export default Dashboard;
