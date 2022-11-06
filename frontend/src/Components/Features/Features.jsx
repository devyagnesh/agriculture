import React from "react";
import { TbTruckDelivery, TbThumbUp } from "react-icons/tb";
import { TiThumbsOk } from "react-icons/ti";
import Container from "../../UI/Container/Container";
import style from "./Features.module.css";
const Features = () => {
  return (
    <section className={style["features"]}>
      <Container className={style["container"]}>
        <div className={style["features__card"]}>
          <div className={style["card__icon"]}>
            <TbTruckDelivery className={style["icon__icon"]} />
          </div>
          <div>
            <h2 className={style["features__title"]}>Fast Delivery</h2>
            <p className={style["features__description"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate repudiandae praesentium impedit quaerat quisquam
              exercitationem?
            </p>
          </div>
        </div>

        <div className={style["features__card"]}>
          <div className={style["card__icon"]}>
            <TiThumbsOk className={style["icon__icon"]} />
          </div>
          <div>
            <h2 className={style["features__title"]}>Quality Standard</h2>
            <p className={style["features__description"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate repudiandae praesentium impedit quaerat quisquam
              exercitationem?
            </p>
          </div>
        </div>

        <div className={style["features__card"]}>
          <div className={style["card__icon"]}>
            <TbThumbUp className={style["icon__icon"]} />
          </div>
          <div>
            <h2 className={style["features__title"]}>100% Organic</h2>
            <p className={style["features__description"]}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptate repudiandae praesentium impedit quaerat quisquam
              exercitationem?
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Features;
