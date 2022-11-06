import React from "react";
import { HiMail, HiLocationMarker } from "react-icons/hi";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import Container from "../../UI/Container/Container";
import style from "./Header.module.css";

const Header = (props) => {
  return (
    <header className={style["header"]}>
      <Container className={style["container"]}>
        <div className={style["header__address"]}>
          <div className={style["addr"]}>
            <HiMail className={style["icons"]} />
            <p className={style["addr_mail"]}>xyz123@agric.com</p>
          </div>

          <div className={style["addr"]}>
            <HiLocationMarker className={style["icons"]} />
            <p className={style["addr_mail"]}>
              Rk Farm, Rk University , Bhavnagar Road, Rajkot - 360001
            </p>
          </div>
        </div>
        <div className={style["header__social_contacts"]}>
          <button type="button" className={style["btn"]}>
            <TiSocialFacebook className={style["icons"]} />
          </button>

          <button type="button" className={style["btn"]}>
            <TiSocialTwitter className={style["icons"]} />
          </button>

          <button type="button" className={style["btn"]}>
            <TiSocialLinkedin className={style["icons"]} />
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;
