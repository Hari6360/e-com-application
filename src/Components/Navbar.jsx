import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../Context/LoginContextProvider";

const Navbar = () => {
	const navigate = useNavigate();

	const { isLoggedIn, setIsLoggedIn } = useLogin();

	const handleLogout = () => {
		setIsLoggedIn(false);

		navigate("/");
	};

	return (
		<div>
			<div className="flex justify-between bg-gray-700 p-4 text-white">
				<div className="text-2xl font-bold">
					<Link to="/">Logo</Link>
				</div>
				<div className="flex items-center space-x-8">
					<input
						type="search"
						name="search"
						className="rounded-md p-2 focus:outline-none border text-black border-gray-400"
						placeholder="Search..."
					/>

					{isLoggedIn ? (
						<button
							onClick={handleLogout}
							className="text-white hover:underline">
							Logout
						</button>
					) : (
						<>
							<Link to="/login" className="text-white hover:underline">
								Login
							</Link>
							<Link to="/signup" className="text-white hover:underline">
								Signup
							</Link>
						</>
					)}

					<ul className="flex items-center space-x-4">
						<li>
							<Link to="/cart" className="text-white hover:underline">
								Cart
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
