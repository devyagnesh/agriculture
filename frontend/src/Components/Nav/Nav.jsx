import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import Container from "../../UI/Container/Container";
import Logo from "../../assets/logo/logo.svg";
import style from "./Nav.module.css";
import AuthContext from "../../Context/AuthContext";

const Nav = () => {
  const authContext = useContext(AuthContext);

  const logoutHandler = function () {
    authContext.logout();
  };
  return (
    <nav className={style["nav"]}>
      <Container className={style["container"]}>
        <div className={style["nav__logo"]}>
          <img src={Logo} alt={""} />
        </div>
        {authContext.isLoggedIn ? (
          <ul className={style["nav__items"]}>
            <li className={style["items__item"]}>
              <button className={style["btn-logout"]} onClick={logoutHandler}>
                Logout
              </button>
            </li>
          </ul>
        ) : (
          <ul className={style["nav__items"]}>
            <li className={style["items__item"]}>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? `${style["item__NavLink"]} ${style["active"]}`
                    : style["item__NavLink"]
                }
              >
                Home
              </NavLink>
            </li>
            <li className={style["items__item"]}>
              <NavLink
                to={"/about"}
                className={({ isActive }) =>
                  isActive
                    ? `${style["item__NavLink"]} ${style["active"]}`
                    : style["item__NavLink"]
                }
              >
                About Us
              </NavLink>
            </li>
            <li className={style["items__item"]}>
              <NavLink
                to={"/contact"}
                className={({ isActive }) =>
                  isActive
                    ? `${style["item__NavLink"]} ${style["active"]}`
                    : style["item__NavLink"]
                }
              >
                Contact Us
              </NavLink>
            </li>
            <li className={style["items__item"]}>
              <NavLink
                to={"/products"}
                className={({ isActive }) =>
                  isActive
                    ? `${style["item__NavLink"]} ${style["active"]}`
                    : style["item__NavLink"]
                }
              >
                Products
              </NavLink>
            </li>
            <li className={style["items__item"]}>
              <NavLink
                to={"/blogs"}
                className={({ isActive }) =>
                  isActive
                    ? `${style["item__NavLink"]} ${style["active"]}`
                    : style["item__NavLink"]
                }
              >
                Read Blog
              </NavLink>
            </li>
          </ul>
        )}
      </Container>
    </nav>
  );
};

export default Nav;
