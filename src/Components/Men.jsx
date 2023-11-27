import React, { useEffect, useState } from "react";
import productsData from "../data.json";
import { Link } from "react-router-dom";

const Men = () => {
	const [products, setProducts] = useState([]);
	const [activeButton, setActiveButton] = useState("Men");
	const [sorted, setSorted] = useState("price");

	useEffect(() => {
		const mensProducts = productsData.filter(
			(product) => product.category === activeButton
		);
		let sortedProducts = [...mensProducts];

		switch (sorted) {
			case "lowToHigh":
				sortedProducts.sort((a, b) => a.price - b.price);
				break;
			case "highToLow":
				sortedProducts.sort((a, b) => b.price - a.price);
				break;
			default:
				sortedProducts.sort((a, b) => a.price - b.price);
				break;
		}
		setProducts(sortedProducts);
	}, [activeButton, sorted]);

	const handleButtonClick = (category) => {
		setActiveButton(category);
	};

	const handleSortChange = (selectedSort) => {
		setSorted(selectedSort);
	};

	return (
		<div className="bg-gray-900">
			<div className="container mx-auto ">
				<div className="flex flex-col sm:flex-row items-center justify-between">
					<div className="flex flex-wrap gap-2 sm:gap-10 p-2">
						<button
							className={`rounded-md p-2 w-full sm:w-auto ${
								activeButton === "Men" ? "bg-red-500" : "bg-gray-300"
							}`}
							onClick={() => handleButtonClick("Men")}>
							Men
						</button>
						<button
							className={`rounded-md p-2 w-full sm:w-auto ${
								activeButton === "Women" ? "bg-red-500" : "bg-gray-300"
							}`}
							onClick={() => handleButtonClick("Women")}>
							Women
						</button>
					</div>
					<div className="text-white p-4">
						<label className="mr-2" htmlFor="sortSelect">
							Sort By:
						</label>
						<select
							className="bg-gray-500 border-white border-l p-2"
							name="SortBy"
							id="sortSelect"
							onChange={(e) => handleSortChange(e.target.value)}>
							<option value="price">Price</option>
							<option value="lowToHigh">Low to High</option>
							<option value="highToLow">High to Low</option>
						</select>
					</div>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 mt-8">
					{products.map((product) => (
						<div
							key={product.id}
							className="rounded-lg shadow-lg p-4 flex flex-col gap-1 text-white text-sm bg-gray-800">
							<Link to={`/products/${product.id}`}>
								<div className="flex justify-center items-center">
									<img
										className="object-cover object-center w-full h-[340px]"
										src={product.image}
										alt={product.name}
									/>
								</div>
							</Link>
							<div className="mt-2">
								<h1 className="text-xl text-start font-semibold">
									{product.name}
								</h1>
								<p className="mt-2">${product.price}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Men;
