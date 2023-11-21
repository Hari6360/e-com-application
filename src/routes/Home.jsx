import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Products from "../Components/Products";
import Women from "../Components/Women";
import Men from "../Components/Men";
import Carousel from "../Components/Carousel";

const Home = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path="/" element={<Products />} />
				<Route path="/women" element={<Women />} />
				<Route path="/men" element={<Men />} />
			</Routes>
		</Router>
	);
};

export default Home;
