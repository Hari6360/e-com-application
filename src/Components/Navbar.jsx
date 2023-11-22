import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<div className="flex justify-between bg-gray-700 p-4 text-white">
				<div className="text-2xl font-bold">Logo</div>
				<div className="flex items-center space-x-8 ">
					<input
						type="search"
						name="search"
						className="rounded-md p-2 focus:outline-none border border-gray-400"
						placeholder="Search..."
					/>

					<ul className="flex items-center space-x-4">
						<li>
							<Link to="/cart" className="text-white hover:underline">
								Cart
							</Link>
						</li>
						<li>
							<Link to="/signup" className="text-white hover:underline">
								Signup
							</Link>
						</li>
						<li>
							<span className="text-gray-300">|</span>
						</li>
						<li>
							<Link to="/login" className="text-white hover:underline">
								Login
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
