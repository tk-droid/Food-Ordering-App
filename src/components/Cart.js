import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearItem } from "../utils/cartSlice";
import React from "react";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearItem());
        console.log("Clear cart clicked");
    };

    return (
        <div className="flex flex-col items-center p-6 m-4 bg-white shadow-lg rounded-lg">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Cart</h1>
            <div className="w-full max-w-md mb-4">
                <button
                    className="w-full p-3 bg-red-600 text-white font-semibold rounded-lg transition duration-300 ease-in-out transform hover:bg-red-500 hover:scale-105"
                    onClick={handleClearCart}
                >
                    Clear Cart
                </button>
            </div>
            <div className="w-5/12">
                <ItemList items={cartItems} />
            </div>
        </div>
    );
};

export default Cart;
