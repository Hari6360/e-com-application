import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Women from "../Components/Women";
import Men from "../Components/Men";
import Carousel from "../Components/Carousel";
import ProductDetails from "../Components/ProductDetails";
import "../index.css";
import Cart from "../Components/Cart";
import { CartContextProvider } from "../Context/CartContextProvider";

const Home = () => {
	return (
		<Router>
			<CartContextProvider>
				<Navbar />
				<Routes>
					<Route path="/" element={<Products />} />
					<Route path="/women" element={<Women />} />
					<Route path="/men" element={<Men />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/products/:id" element={<ProductDetails />} />
				</Routes>
			</CartContextProvider>
		</Router>
	);
};

export default Home;
