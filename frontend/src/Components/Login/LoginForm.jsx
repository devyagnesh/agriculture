import React, { useRef, useContext } from "react";
import { Input } from "../../UI/Input/Input";
import Container from "../../UI/Container/Container";
import style from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import validator from "validator";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthContext from "../../Context/AuthContext";
import { useState } from "react";
import LoadingImage from "../../assets/loading.svg";

const LoginForm = () => {
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const loginEmailRef = useRef();
  const loginPasswordRef = useRef();

  const loginFormHandler = async function (event) {
    event.preventDefault();
    setLoading((prev) => !prev);

    try {
      const email = loginEmailRef.current.value;
      const password = loginPasswordRef.current.value;
      if (!email || email === "" || !validator.isEmail(email)) {
        setLoading((prev) => !prev);
        return toast("Invalid email address !");
      }

      if (!password || password === "") {
        setLoading((prev) => !prev);
        return toast("Please enter password !");
      }

      const response = await axios({
        url: "http://localhost:3001/api/v1/user/login",
        method: "post",
        headers: {},
        data: {
          email: email,
          password: password,
        },
      });

      const data = response.data;

      authContext.login(data.token);
      setLoading((prev) => !prev);
      navigate("/dashboard");
      return toast(data.message);
    } catch (error) {
      console.log(error);
      setLoading((prev) => !prev);
      return toast(error.response.data.message);
    }
  };

  return (
    <>
      <ToastContainer
        toastStyle={{
          backgroundColor: "#232323",
          color: "#FFFFFF",
          fontSize: "1.4rem",
        }}
        position="bottom-left"
        autoClose={2000}
        closeButton={false}
        hideProgressBar={true}
      />
      <Container className={style["container"]}>
        <div></div>
        {!loading ? (
          <div className={style["login_form__form"]}>
            <h2 className={style["login__title"]}>LOGIN IN</h2>
            <form
              method="post"
              autoComplete="off"
              className={style["login_form"]}
              onSubmit={loginFormHandler}
            >
              <Input
                type={"text"}
                name="loginemail"
                className={style["input-controller"]}
                label="Email address :"
                ref={loginEmailRef}
              />

              <Input
                type={"password"}
                name="loginpassword"
                className={style["input-controller"]}
                label="Enter Password :"
                ref={loginPasswordRef}
              />
              <Link to={"/frgtpwd"} className={style["user-forget-pwd"]}>
                Forget Password?
              </Link>
              <button
                type="submit"
                name="loginbtn"
                id="loginbtn"
                className={style["btn-login"]}
              >
                Login In
              </button>
              <p className={style["or_txt"]}>OR</p>
              <Link to={"/signup"} className={style["new-user-link"]}>
                Create new account
              </Link>
            </form>
          </div>
        ) : (
          <img src={LoadingImage} alt="" className={style["loading_img"]} />
        )}
        <div></div>
      </Container>
    </>
  );
};

export default LoginForm;
