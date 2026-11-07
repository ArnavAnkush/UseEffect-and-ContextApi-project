import React, { useContext } from "react";
import CartCard from "../components/CartCard";
import { MyStore } from "../contexts/MyContext";

const CartScreen = () => {
  let { cartItems } = useContext(MyStore);
  return (
    <div className="h-[95%] grid gap-6 grid-cols-3 ">
      {cartItems.map((elem) => {
        return <CartCard key={elem.id} product={elem} />;
      })}
    </div>
  );
};

export default CartScreen;
