import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../../UI/Container/Container";
import { Input } from "../../UI/Input/Input";
import { ToastContainer, toast } from "react-toastify";
import validator from "validator";
import AuthContext from "../../Context/AuthContext";
import style from "./SignupForm.module.css";
import { useRef } from "react";
import LoadingImage from "../../assets/loading.svg";
import axios from "axios";

const SignupForm = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const authContext = useContext(AuthContext);

  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const submitHandler = async function (event) {
    event.preventDefault();
    setLoading((prev) => !prev);
    try {
      if (
        !firstnameRef.current.value ||
        !/^[a-zA-Z]{3,}$/gi.test(firstnameRef.current.value)
      ) {
        setLoading((prev) => !prev);
        return toast("Invalid Firstname !");
      }
      if (
        !lastnameRef.current.value ||
        !/^[a-zA-Z]{3,}$/gi.test(lastnameRef.current.value)
      ) {
        setLoading((prev) => !prev);
        return toast("Invalid Lastname !");
      }

      if (!validator.isEmail(emailRef.current.value)) {
        setLoading((prev) => !prev);
        return toast("Invalid Email Address !");
      }
      if (!passwordRef.current.value || passwordRef.current.value.length < 8) {
        setLoading((prev) => !prev);
        return toast("Password must be 8 characters long !");
      }

      if (confirmPasswordRef.current.value !== passwordRef.current.value) {
        setLoading((prev) => !prev);
        return toast("Password does not matched !");
      }

      const response = await axios({
        url: "http://localhost:3001/api/v1/user/signup",
        method: "post",
        headers: {},
        data: {
          firstname: firstnameRef.current.value,
          lastname: lastnameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          confirmPassword: confirmPasswordRef.current.value,
        },
      });
      const data = response.data;
      setLoading((prev) => !prev);
      authContext.login(data.token);
      navigate("/dashboard");
      return toast(data.message);
    } catch (error) {
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
          <div className={style["signup_form__form"]}>
            <h2 className={style["signup__title"]}>SIGN UP</h2>
            <form
              method="post"
              autoComplete="off"
              className={style["login_form"]}
              onSubmit={submitHandler}
            >
              <div className={style["inline"]}>
                <Input
                  type={"text"}
                  name="firstname"
                  className={style["input-controller"]}
                  label="First Name :"
                  ref={firstnameRef}
                />

                <Input
                  type={"text"}
                  name="lastname"
                  className={style["input-controller"]}
                  label="Last Name :"
                  ref={lastnameRef}
                />
              </div>

              <Input
                type={"text"}
                name="newemail"
                className={style["input-controller"]}
                label="Email address :"
                ref={emailRef}
              />

              <Input
                type={"password"}
                name="newpassword"
                className={style["input-controller"]}
                label="Enter Password :"
                ref={passwordRef}
              />

              <Input
                type={"password"}
                name="newconfirmpassword"
                className={style["input-controller"]}
                label="Confirm Password :"
                ref={confirmPasswordRef}
              />
              <button
                type="submit"
                name="loginbtn"
                id="loginbtn"
                className={style["btn-login"]}
              >
                Create account
              </button>
              <p className={style["or_txt"]}>OR</p>
              <Link to={"/login"} className={style["exists-user-link"]}>
                Login in
              </Link>
            </form>
          </div>
        ) : (
          <img src={LoadingImage} alt="" className={style["img_loading"]} />
        )}
        <div></div>
      </Container>
    </>
  );
};

export default SignupForm;
