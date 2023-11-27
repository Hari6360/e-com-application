import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../Context/LoginContextProvider";

const Navbar = () => {
	const navigate = useNavigate();
	const { isLoggedIn, setIsLoggedIn } = useLogin();
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleLogout = () => {
		setIsLoggedIn(false);
		navigate("/");
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<nav className="bg-gray-700 p-4 text-white">
			<div className="container mx-auto flex justify-between items-center">
				<div className="text-2xl font-bold">
					<Link to="/">Logo</Link>
				</div>

				{/* <div className="lg:hidden">
					<button
						onClick={toggleMobileMenu}
						className="text-white focus:outline-none focus:shadow-outline">
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</button>
				</div> */}

				<div className="md:hidden">
					<button
						onClick={toggleMobileMenu}
						className="text-white focus:outline-none focus:shadow-outline">
						<svg
							className="h-6 w-6"
							fill="none"
							stroke="currentColor"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h16m-7 6h7"
							/>
						</svg>
					</button>
				</div>

				<div
					className={`lg:flex items-center space-x-8 ${
						isMobileMenuOpen ? "flex" : "hidden md:flex"
					}`}>
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
		</nav>
	);
};

export default Navbar;
