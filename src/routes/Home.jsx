import React from "react";
import Navbar from "../Components/Navbar";
import Carousel from "../Components/Carousel";
import Products from "../Components/Products";

const Home = () => {
	return (
		<div className="bg-slate-950">
			<Navbar />
			<Carousel />
			<Products />
		</div>
	);
};

export default Home;
