import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleSignup = () => {
		navigate("/");
	};

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="bg-gray-900 p-8 rounded shadow-md w-2/5">
				<h2 className="text-2xl font-bold mb-4 text-white">SIGN UP</h2>
				<div className="mb-4">
					<label
						htmlFor="name"
						className="text-gray-700 text-sm font-bold mb-2">
						Name
					</label>
					<input
						type="name"
						id="name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="border rounded w-full py-2 px-3"
						placeholder="Enter your name"
					/>
				</div>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="text-gray-700 text-sm font-bold mb-2">
						Email:
					</label>
					<input
						type="email"
						id="email"
						name="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="border rounded w-full py-2 px-3"
						placeholder="Enter your email"
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="password"
						className="text-gray-700 text-sm font-bold mb-2">
						Password:
					</label>
					<input
						type="password"
						id="password"
						name="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="border rounded w-full py-2 px-3"
						placeholder="Enter your password"
					/>
				</div>
				<button
					onClick={handleSignup}
					className="bg-black text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline w-4/5 mx-12"
					type="button">
					Sign Up
				</button>
				<Link to="/login">
					<div className="flex items-center mt-4">
						<div className="flex-1 border-b border-gray-500"></div>
						<p className="mx-4 text-gray-500">
							Already have an account? Log in your account.
						</p>
						<div className="flex-1 border-b border-gray-500"></div>
					</div>
				</Link>
			</div>
		</div>
	);
};

export default Signup;
