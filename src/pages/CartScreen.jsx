import React from "react";
import CartCard from "../components/CartCard";

const CartScreen = ({ cartItems }) => {
  return (
    <div className="h-[95%] grid grid-cols-3 ">
      {cartItems.map((elem) => {
        return <CartCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default CartScreen;
