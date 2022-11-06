import React from "react";
import Container from "../Container/Container";
import style from "./Loader.module.css";
import LoaderImage from "../../assets/loading.svg";
const Loader = () => {
  return (
    <Container className={style["container"]}>
      <img src={LoaderImage} alt="" className={style["img"]} />
    </Container>
  );
};

export default Loader;
