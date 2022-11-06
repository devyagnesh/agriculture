import React from "react";
import Container from "../../UI/Container/Container";
import { Input } from "../../UI/Input/Input";
import style from "./Contact.module.css";
const Contact = () => {
  return (
    <Container className={style["container"]}>
      <div></div>
      <div className={style["contact_form"]}>
        <form
          className={style["contact_form_form"]}
          method="post"
          autoComplete="off"
        >
          <h1 className={style["contact_title"]}>Contact us</h1>
          <Input
            type="text"
            name="fullname"
            className={style["input"]}
            label="Full Name : *"
          />

          <Input
            type="text"
            name="subject"
            className={style["input"]}
            label="Subject : *"
          />
          <Input
            type="text"
            name="email"
            className={style["input"]}
            label="Email address : *"
          />
          <div className={style["query_field"]}>
            <label htmlFor="query" className={style["label"]}>
              Query : *
            </label>
            <textarea
              className={`${style["input"]} ${style["textarea"]}`}
              id="query"
            ></textarea>
          </div>
          <button
            type="submit"
            id="btnSignup"
            name="btnSignup"
            className={style["btnContact"]}
          >
            submit
          </button>
        </form>
      </div>
      <div></div>
    </Container>
  );
};

export default Contact;
