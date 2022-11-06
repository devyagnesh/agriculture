import React from "react";
import { forwardRef } from "react";
import style from "./Input.module.css";

export const Input = forwardRef((props, ref) => {
  return (
    <div className={style["input_wrapper"]}>
      <label htmlFor={props.name} className={style["label"]}>
        {props.label}
      </label>
      <input
        ref={ref}
        type={props.type}
        name={props.name}
        id={props.name}
        className={`${style["input"]} ${props.className}`}
      />
    </div>
  );
});
