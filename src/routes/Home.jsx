import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Women from "../Components/Women";
import Men from "../Components/Men";
import ProductDetails from "../Components/ProductDetails";
import "../index.css";
import Cart from "../Components/Cart";
import { CartContextProvider } from "../Context/CartContextProvider";
import Login from "../Auth/Login";
import Signup from "../Auth/Signup";
import LoginProvider from "../Context/LoginContextProvider";

const Home = () => {
	return (
		<Router>
			<LoginProvider>
				<CartContextProvider>
					<Navbar />
					<Routes>
						<Route path="/" element={<Products />} />
						<Route path="/women" element={<Women />} />
						<Route path="/men" element={<Men />} />
						<Route path="/cart" element={<Cart />} />
						<Route path="/products/:id" element={<ProductDetails />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
					</Routes>
				</CartContextProvider>
			</LoginProvider>
		</Router>
	);
};

export default Home;
