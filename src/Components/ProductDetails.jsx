import React, { useState } from "react";
import { useParams } from "react-router-dom";
import productsData from "../data.json";
import { useCart } from "../Context/CartContextProvider";

const ProductDetails = () => {
	const { id } = useParams();
	const product = productsData.find((p) => p.id === parseInt(id));
	const { handleAddToCart } = useCart();

	const [quantity, setQuantity] = useState(1);

	const handleIncrement = () => {
		setQuantity((prevQuantity) => prevQuantity + 1);
	};

	const handleDecrement = () => {
		if (quantity > 1) {
			setQuantity((prevQuantity) => prevQuantity - 1);
		}
	};

	const addToCart = () => {
		handleAddToCart(product);
	};

	if (!product) {
		return <div className="text-center mt-20 text-2xl">Product Not Found</div>;
	}

	return (
		<div className="text-white">
			<div className="container mx-auto my-10 flex flex-col lg:flex-row">
				<div className="lg:w-1/2 mb-8 lg:mb-0">
					<img
						src={product.image}
						className="h-96 lg:h-auto w-full object-cover lg:w-96 rounded-lg lg:ml-32"
						alt={product.name}
					/>
				</div>
				<div className="lg:w-1/2 lg:ml-32 mr-16 ">
					<h2 className="text-4xl font-bold mb-4">{product.name}</h2>
					<p className="text-xl font-semibold mb-4">${product.price}</p>
					<p className="text-gray-300 mb-4">{product.description}</p>

					<div className="flex mt-4">
						<button
							onClick={handleDecrement}
							className="bg-red-500 text-white px-3 py-2 rounded-l">
							-1
						</button>
						<span className="bg-gray-700 text-white px-4 py-2">{quantity}</span>
						<button
							onClick={handleIncrement}
							className="bg-green-500 text-white px-3 py-2 rounded-r">
							+1
						</button>
					</div>

					<button
						onClick={addToCart}
						className="mt-4 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600">
						Add to Cart
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
