import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
	const [cart, setCart] = useState([]);

	const handleAddToCart = (product) => {
		setCart((prevCart) => [...prevCart, product]);
	};

	const handleRemove = (productId) => {
		setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
	};

	return (
		<CartContext.Provider value={{ cart, handleAddToCart, handleRemove }}>
			{children}
		</CartContext.Provider>
	);
};
export const useCart = () => {
	return useContext(CartContext);
};
