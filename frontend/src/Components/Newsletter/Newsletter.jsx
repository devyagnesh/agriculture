import React from "react";
import Container from "../../UI/Container/Container";
import style from "./Newsletter.module.css";
const Newsletter = () => {
  return (
    <section className={style["newsletter"]}>
      <Container className={style["container"]}>
        <div className={style["newsletter__body"]}>
          <h5 className={style["newsletter__small_heading"]}>Our Newsletter</h5>
          <h2 className={style["newsletter__heading"]}>GET THE UPDATED NEWS</h2>
        </div>
        <div className={style["newsletter__form"]}>
          <form
            method="post"
            autoComplete="off"
            className={style["newsletter__form_form"]}
          >
            <div className={style["form__group"]}>
              <input
                type={"text"}
                name="newsletter"
                id="newsletter"
                className={style["newsletter_controller"]}
                placeholder="Subscribe to our newsletter"
              />
              <button
                type={"submit"}
                name="subscribeNewsLetter"
                id="subscribeNewsLetter"
                className={style["btn-newsletter"]}
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default Newsletter;
