import React, { useState, useEffect } from "react";
import productsData from "../data.json";

const Products = () => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		setProducts(productsData);
	}, []);

	const truncateDescription = (description, maxLength) => {
		if (description.length <= maxLength) return description;
		return description.substring(0, maxLength) + "...";
	};
	const addtoCart = (product) => {
		console.log("Adding to cart: ", product);
	};
	return (
		<>
			<div className="relative">
				<div className="flex my-16 h-[450px] ">
					<div className="absolute top-0 left-0 z-10 text-white text-3xl font-extrabold ml-56">
						CATEGORIES
					</div>
					<div className="w-1/2 h-[500px] mt-12 relative">
						<h3 className="absolute  z-20 text-black text-4xl font-bold ml-64  mt-10">
							WOMEN
						</h3>
						<img
							className="ml-56 h-[350px]"
							src="https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582274091%2Fezgif.com-webp-to-jpg_l9flc0.jpg&w=1920&q=75"
							alt=""
						/>
					</div>
					<div className="ml-6 w-1/2 h-[500px] mt-12 relative">
						<h3 className="absolute  z-20 text-black text-4xl font-bold  ml-10 mt-10">
							MEN
						</h3>
						<img
							className="h-[350px]"
							src="https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582274252%2Fcateg-02_pqpnm7.jpg&w=1920&q=75"
							alt=""
						/>
					</div>
				</div>
			</div>
			<div className="container mx-auto grid grid-cols-4 gap-4 p-1">
				{products.map((product) => (
					<div
						key={product.id}
						className=" rounded-lg shadow-lg p-4 flex  flex-wrap flex-col text-white text-sm ">
						<div className="flex justify-center items-center">
							<img
								className="align-center max-h-48 w-150"
								src={product.image}
								alt={product.name}
							/>
						</div>
						<div className=" p-3 mx-auto mt-6 text-center flex-grow-0">
							<h1 className="text-2xl font-semibold">{product.name}</h1>
							<p className="text-gray-500  mt-3">
								{truncateDescription(product.description, 150)}
							</p>
							<p className="mt-4">${product.price}</p>
							<div className="mt-auto">
								<button
									className="bg-blue-500 hover:bg-black text-white px-4 py-2 mt-5 bottom-0 rounded-md  "
									onClick={() => addtoCart(product)}>
									Add to Cart
								</button>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Products;
