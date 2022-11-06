import React from "react";
import { Link } from "react-router-dom";
import Container from "../../UI/Container/Container";
import FarmerImage from "../../assets/Images/cta_farmer.jpg";
import style from "./Cta.module.css";
const Cta = (props) => {
  return (
    <section className={style["cta"]}>
      <Container className={style["container"]}>
        <div className={style["cta__wrapper"]}>
          <div className={style["cta__call_to_action"]}>
            <h5 className={style["cta_who_we_are"]}>we are agric</h5>
            <h1 className={style["cta_sub_title"]}>
              THE QUALIFIED ORGANIC FARM
            </h1>
            <p className={style["get_started"]}>Get Started With . . .</p>
            <div className={style["cta__actions"]}>
              <Link
                to={"/login"}
                className={`${style["cta__link_btn"]} ${style["login"]}`}
              >
                Login In
              </Link>
              <Link
                to={"/signup"}
                className={`${style["cta__link_btn"]} ${style["signup"]}`}
              >
                Sign Up
              </Link>
            </div>
          </div>
          <div className={style["cta_image"]}>
            <img src={FarmerImage} alt="" className={style["cta_image__img"]} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Cta;
