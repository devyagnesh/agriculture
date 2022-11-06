import axios from "axios";
import React, { useEffect, useState } from "react";
import Container from "../../UI/Container/Container";
import style from "./Products.module.css";
const Products = () => {
  const [products, setProducts] = useState([]);
  const getProducts = async function () {
    const response = await axios({
      url: "http://localhost:3001/api/v1/product/all",
      method: "get",
      headers: {},
    });
    const data = response.data;
    setProducts(data);
  };

  useEffect((prev) => {
    if (!prev) {
      getProducts();
    }
  }, []);

  return (
    <Container className={style["container"]}>
      {products.map((product) => (
        <div key={product._id} className={style["product_card"]}>
          <img
            src={`${product.imgurl}`}
            alt=""
            className={style["product_card_img"]}
          />
          <h5 className={style["product_card_name"]}>{product.name}</h5>
          <p className={style["product_card_description"]}>
            {product.description}
          </p>
          <div className={style["priceaction"]}>
            <div className={style["pricequantity"]}>
              <p className={style["product_card_price"]}>₹{product.price}</p>
              <span className={style["product_card_quantity"]}>
                Qty. {product.quantity}
              </span>
            </div>
            <button type="button" className={style["product_card_buy_btn"]}>
              Buy now
            </button>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default Products;
