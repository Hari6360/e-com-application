import React, { useState } from "react";
import { useCart } from "../Context/CartContextProvider";

const Cart = () => {
	const { cart, removeFromCart } = useCart();

	const calculateTotal = () => {
		return cart.reduce((total, item) => {
			const itemTotal = item.quantity ? item.quantity * item.price : item.price;
			return total + itemTotal;
		}, 0);
	};

	return (
		<div className="bg-gray-900 text-white">
			<div className="container mx-auto my-10">
				<h2 className="text-4xl font-bold mb-8">Shopping Cart</h2>

				{cart.length === 0 ? (
					<p className="text-xl">Your cart is empty.</p>
				) : (
					<div>
						{cart.map((item) => (
							<div key={item.id} className="flex items-center mb-4">
								<img
									src={item.image}
									alt={item.name}
									className="h-16 w-16 object-cover rounded mr-4"
								/>
								<div className="flex-grow">
									<h3 className="text-xl font-bold">{item.name}</h3>
									<p className="text-gray-300">${item.price}</p>
									<p className="text-gray-300">Quantity: {item.quantity}</p>
									<button
										onClick={() => removeFromCart}
										className="bg-red-500 text-white px-4 py-2 mt-2 rounded">
										Remove
									</button>
								</div>
							</div>
						))}

						<div className="mt-8">
							<h3 className="text-2xl font-bold">Total: ${calculateTotal()}</h3>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Cart;
