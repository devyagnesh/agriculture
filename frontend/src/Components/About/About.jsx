import React from "react";
import { Link } from "react-router-dom";
import Container from "../../UI/Container/Container";
import ImageTwo from "../../assets/Images/about2.jpg";
import style from "./About.module.css";
const About = () => {
  return (
    <section className={style["about"]}>
      <Container className={style["container"]}>
        <div className={style["about__image"]}>
          <img src={ImageTwo} alt="" className={style["image__img"]} />
        </div>
        <div className={style["about__body"]}>
          <h5 className={style["about__body_small_heading"]}>About Us</h5>
          <h2 className={style["about__body_heading"]}>
            HYGIENIC FARM & EXPERT FARMER
          </h2>
          <p className={style["about__body_p"]}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim.
          </p>

          <p className={`${style["about__body_p"]} ${style["margin-top"]}`}>
            Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
            Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras
            dapibus.
          </p>
          <Link to={"/contact"} className={style["contact_btn"]}>
            Contact us
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default About;
