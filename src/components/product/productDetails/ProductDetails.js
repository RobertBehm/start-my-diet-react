import styles from "./ProductDetails.module.scss";
import styled from "styled-components";

import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import spinnerImg from "../../../assets/spinner.jpg";

import { useDispatch, useSelector } from "react-redux";
import {
  ADD_TO_CART,
  CALCULATE_TOTAL_QUANTITY,
  DECREASE_CART,
  selectCartItems,
} from "../../../redux/slice/cartSlice";
import { selectProducts } from "../../../redux/slice/productSlice";
import useFetchDocument from "../../../customHooks/useFetchDocument";
import useFetchCollection from "../../../customHooks/useFetchCollection";
import Card from "../../card/Card";
import StarsRating from "react-star-rate";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [flavor, setFlavor] = useState("");
  //const [size, setSize] = useState();

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const products = useSelector(selectProducts);

  const { document } = useFetchDocument("products", id);
  const { data } = useFetchCollection("reviews");
  const filteredReviews = data.filter((review) => review.productID === id);

  const cart = cartItems.find((cart) => cart.id === id);
  const isCartAdded = cartItems.findIndex((cart) => {
    return cart.id === id;
  });

  useEffect(() => {
    setProduct(document);
  }, [document]);

  const addToCart = (product) => {
    const _product = Object.assign({}, product);
    delete _product.flavor1;
    delete _product.flavor2;

    if (flavor === "") {
      /* if 'flavor' not selected */ dispatch(
        ADD_TO_CART({ ..._product, flavor: product.flavor1 })
      );
    } else {
      /* if 'flavor' not selected */
      dispatch(ADD_TO_CART({ ..._product, flavor: flavor }));
    }

    dispatch(CALCULATE_TOTAL_QUANTITY());
    console.log(_product);
  };

  const decreaseCart = (product) => {
    dispatch(DECREASE_CART(product));
    dispatch(CALCULATE_TOTAL_QUANTITY());
  };

  return (
    <section>
      <div className={`container ${styles.product}`}>
        <h2>Product Details</h2>
        <div>
          <Link to="/shop">&larr; Back To Products</Link>
        </div>
        {product === null ? (
          <img src={spinnerImg} alt="Loading" style={{ width: "50px" }} />
        ) : (
          <>
            <div className={styles.details}>
              <div className={styles.img}>
                <img src={product.imageURL} alt={product.name} />
              </div>
              <div className={styles.content}>
                <h1>{product.name}</h1>
                <p className={styles.price}>{`$${product.price}`}</p>
                <p>{product.desc}</p>

                {/* Product Dropdown */}
                <StyledRadio className="radio btn-group">
                  <p>
                    <b className="bold">Flavor</b>
                  </p>
                  <input
                    className="radio__input"
                    type="radio"
                    name="radio"
                    id="flavor-1"
                    value={product.flavor1}
                    onChange={(e) => {
                      setFlavor(e.target.value);
                    }}
                  />
                  <label className="radio__label btn-margin" htmlFor="flavor-1">
                    {product.flavor1}
                  </label>
                  {product.flavor2 !== "Empty" ? (
                    <>
                      <input
                        className="radio__input"
                        type="radio"
                        name="radio"
                        id="flavor-2"
                        value={product.flavor2}
                        onChange={(e) => {
                          setFlavor(e.target.value);
                        }}
                      />
                      <label className="radio__label" htmlFor="flavor-2">
                        {product.flavor2}
                      </label>
                    </>
                  ) : null}
                </StyledRadio>
                {/* End Of Product Dropdowns */}
                <p>
                  <b className="bold">SKU</b> {product.id}
                </p>
                <p>
                  <b className="bold">Brand</b> {product.brand}
                </p>

                <div className={styles.count}>
                  {isCartAdded < 0 ? null : (
                    <>
                      <button
                        className="--btn"
                        onClick={() => decreaseCart(product)}
                      >
                        -
                      </button>
                      <p>
                        <b>{cart.cartQuantity}</b>
                      </p>
                      <button
                        className="--btn"
                        onClick={() => addToCart(product)}
                      >
                        +
                      </button>
                    </>
                  )}
                </div>
                <button
                  className="--btn --btn-danger"
                  onClick={() => addToCart(product)}
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </>
        )}
        <Card cardClass={styles.card}>
          <h3>Product Reviews</h3>
          <div>
            {filteredReviews.length === 0 ? (
              <p>There are no reviews for this product yet.</p>
            ) : (
              <>
                {filteredReviews.map((item, index) => {
                  const { rate, review, reviewDate, userName } = item;
                  return (
                    <div key={index} className={styles.review}>
                      <StarsRating value={rate} />
                      <p>{review}</p>
                      <span>
                        <b>{reviewDate}</b>
                      </span>
                      <br />
                      <span>
                        <b>by: {userName}</b>
                      </span>
                    </div>
                  );
                })}
              </>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ProductDetails;

const StyledRadio = styled.div`
  display: flex;
  align-items: center;
  .radio__input {
    display: none;
  }

  p {
    margin-right: 15px;
  }

  .radio__label {
    display: block;
    text-align: center;
    border-radius: 6px;
    border-color: transparent;
    background-color: var(--light-grey);
    color: var(--med-blue);
    margin: 0px 10px;
    width: 25%;
    padding: 8px 0px;
    font-size: 16px;
    //font-family: Darwin Pro ExtraLight;
    cursor: pointer;
    transition: background 0.1s;
  }

  input[type="radio"]:checked + .radio__label {
    //background-color: var(--light-blue);
    border: 1.5px solid var(--med-blue);
    color: var(--med-blue);
  }
`;
