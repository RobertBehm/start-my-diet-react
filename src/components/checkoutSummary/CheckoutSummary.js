import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotalAmount,
  selectCartTotalQuantity,
} from "../../redux/slice/cartSlice";
import Card from "../card/Card";
import styles from "./CheckoutSummary.module.scss";

const CheckoutSummary = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotalAmount = useSelector(selectCartTotalAmount);
  const cartTotalQuantity = useSelector(selectCartTotalQuantity);

  return (
    <div>
      <h3>Checkout Summary</h3>
      <div>
        {cartItems.length === 0 ? (
          <>
            <p>No item in your cart.</p>
            <button className="--btn">
              <Link to="/shop">Back To Shop</Link>
            </button>
          </>
        ) : (
          <div>
            <p>
              <b>{`Cart item(s): ${cartTotalQuantity}`}</b>
            </p>
            <div className={styles.text}>
              <h4>Subtotal:</h4>
              <h3>{cartTotalAmount.toFixed(2)}</h3>
            </div>
            {cartItems.map((item, index) => {
              const { id, name, price, cartQuantity, imageURL } = item;
              return (
                <Card key={id} cardClass={styles.card}>
                  <div style={{ display: "flex" }}>
                    <div>
                      <h4>Product: {name}</h4>
                      <p>Quantity: {cartQuantity}</p>
                      <p>Unit price: {price}</p>
                      <p>Total price: {price * cartQuantity}</p>
                    </div>
                    <div>
                      <img
                        src={imageURL}
                        alt="product"
                        style={{ width: "100px" }}
                      />
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default CheckoutSummary;
