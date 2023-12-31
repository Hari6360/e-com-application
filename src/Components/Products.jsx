import React, { useState, useEffect } from "react";
import productsData from "../data.json";
import Carousel from "./Carousel";
import { Link } from "react-router-dom";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(productsData);
	}, []);

	return (
		<>
			<Carousel />

			<div className="relative bg-gray-900">
				<div className="flex flex-col sm:flex-row my-16 h-auto sm:h-[450px]">
					<div className="absolute left-0 z-10 text-white text-3xl font-extrabold ml-8 sm:ml-56">
						CATEGORIES
					</div>
					<Link to="/Women">
						<div className="h-[500px] mt-12 relative">
							<h3 className="absolute z-20 text-black text-4xl font-bold ml-8 sm:ml-64 mt-10">
								WOMEN
							</h3>
							<img
								className="ml-8 sm:ml-56 h-[350px]"
								src="https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582274091%2Fezgif.com-webp-to-jpg_l9flc0.jpg&w=1920&q=75"
								alt=""
							/>
						</div>
					</Link>
					<Link to="/Men">
						<div className="ml-6 h-[500px] mt-12 relative">
							<h3 className="absolute z-20 text-black text-4xl font-bold ml-8 sm:ml-10 mt-10">
								MEN
							</h3>
							<img
								className="h-[350px]"
								src="https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582274252%2Fcateg-02_pqpnm7.jpg&w=1920&q=75"
								alt=""
							/>
						</div>
					</Link>
				</div>
			</div>

			<div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 bg-gray-900 justify-items-center">
				{products.map((product) => (
					<Link to={`/products/${product.id}`} key={product.id}>
						<div className="rounded-lg shadow-lg p-4 flex flex-col text-white text-sm bg-gray-800">
							<div className="flex justify-center items-center h-[340px] w">
								<img
									className="w-[300px] h-full rounded"
									src={product.image}
									alt={product.name}
								/>
							</div>
							<div className="mt-2 flex-grow-0">
								<h1 className="text-xl text-start font-semibold">
									{product.name}
								</h1>
								<p className="mt-2">${product.price}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</>
	);
};

export default Products;
