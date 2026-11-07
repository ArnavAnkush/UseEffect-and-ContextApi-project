import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ProductCards from "./components/ProductCards";
import CartScreen from "./pages/CartScreen";

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [productsData, setProductsData] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const getProductsData = async () => {
    try {
      let res = await axios.get("https://fakestoreapi.com/products");
      setProductsData(res.data);
    } catch (error) {
      console.log("error in api", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white flex flex-col gap-8">
      <Navbar setIsCartOpen={setIsCartOpen} />

      {isCartOpen ? (
        <div>
          <CartScreen cartItems={cartItems} />
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-5">
          {productsData.map((elem) => {
            return (
              <ProductCards
                key={elem.id}
                product={elem}
                setCartItems={setCartItems}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default App;
