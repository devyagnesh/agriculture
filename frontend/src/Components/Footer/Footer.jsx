import React from "react";
import { Link } from "react-router-dom";
import Container from "../../UI/Container/Container";
import Logo from "../../assets/logo/logo-white.svg";
import { TbMapPin, TbPhoneCall } from "react-icons/tb";
import { HiMail } from "react-icons/hi";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={style["footer"]}>
      <Container className={style["container"]}>
        <div className={style["footer__links_card"]}>
          <h2 className={style["links__card_heading"]}>Quick Links</h2>
          <ul className={style["card__links"]}>
            <li className={style["card__links_item"]}>
              <Link to={"/"} className={style["link_item_link"]}>
                Home
              </Link>
            </li>
            <li className={style["card__links_item"]}>
              <Link to={"/about"} className={style["link_item_link"]}>
                About Us
              </Link>
            </li>
            <li className={style["card__links_item"]}>
              <Link to={"/contact"} className={style["link_item_link"]}>
                Contact Us
              </Link>
            </li>
            <li className={style["card__links_item"]}>
              <Link to={"/products"} className={style["link_item_link"]}>
                Products
              </Link>
            </li>
            <li className={style["card__links_item"]}>
              <Link to={"/blog"} className={style["link_item_link"]}>
                Read Blog
              </Link>
            </li>
          </ul>
        </div>
        <div className={style["footer__links_card"]}>
          <h2 className={style["links__card_heading"]}>Other Pages</h2>
          <ul className={style["card__links"]}>
            <li className={style["card__links_item"]}>
              <Link to={"/privacy"} className={style["link_item_link"]}>
                Privacy & Policy
              </Link>
            </li>
            <li className={style["card__links_item"]}>
              <Link to={"/termuser"} className={style["link_item_link"]}>
                Term Of Use
              </Link>
            </li>
            <li className={style["card__links_item"]}>
              <Link to={"/disclaimer"} className={style["link_item_link"]}>
                Disclaimer
              </Link>
            </li>
            <li className={style["card__links_item"]}>
              <Link to={"/faq"} className={style["link_item_link"]}>
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className={style["footer__links_card"]}>
          <h2 className={style["links__card_heading"]}>Contact Info</h2>
          <ul className={style["card__links"]}>
            <li className={style["card__links_item"]}>
              <p className={style["addrs"]}>
                <TbMapPin className={style["icons"]} /> Rk Farm, Rk University ,
                Bhavnagar Road, Rajkot - 360001
              </p>
            </li>
            <li className={style["card__links_item"]}>
              <p className={style["addrs"]}>
                <TbPhoneCall className={style["icons"]} /> +91-2365458978
              </p>
            </li>
            <li className={style["card__links_item"]}>
              <p className={style["addrs"]}>
                <HiMail className={style["icons"]} /> xyz123@agric.com
              </p>
            </li>
          </ul>
        </div>
        <div
          className={`${style["footer__links_card"]} ${style["footer_consult"]}`}
        >
          <h2 className={style["links__card_heading"]}>Free Consultation</h2>
          <p className={style["consult_body"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
            nemo!
          </p>
          <Link to={"/contact"} className={style["footer__contact_btn"]}>
            Contact us
          </Link>
        </div>
      </Container>
      <Container
        className={`${style["container"]} ${style["no-border"]} ${style["footer_bottom"]}`}
      >
        <div className={style["footer_logo"]}>
          <img src={Logo} alt="" className={style["footer_bottom_img"]} />
        </div>
        <div className={style["footer_text"]}>
          <p className={style["who_developed"]}>Developed By Yagnesh Chavda</p>
        </div>

        <div className={style["copyright"]}>
          <p className={style["copyright_text"]}>
            Copyright &copy; 2021. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
