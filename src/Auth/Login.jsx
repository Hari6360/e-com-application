import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../Context/LoginContextProvider";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const { isLoggedIn, setIsLoggedIn } = useLogin();
	const handleLogin = () => {
		localStorage.setItem("userEmail", email);
		localStorage.setItem("userPassword", password);

		const storedEmail = localStorage.getItem("userEmail");
		const storedPassword = localStorage.getItem("userPassword");

		if (email === storedEmail && password === storedPassword) {
			setIsLoggedIn(true);
			navigate("/");
			alert("Login successful!");
		} else {
			alert("Invalid credentials. Please try again.");
		}
	};

	return (
		<div className="flex items-center justify-center h-screen">
			<div className="bg-gray-900 p-8 rounded shadow-md w-2/5">
				<h2 className="text-2xl font-bold mb-4 text-white">Log In</h2>
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
					onClick={handleLogin}
					className="bg-black text-white py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:shadow-outline w-4/5 mx-12"
					type="button">
					Log In
				</button>
				<div className="flex items-center mt-4">
					<div className="flex-1 border-b border-gray-500"></div>
					<Link to="/signup">
						<p className="mx-4 text-gray-500">
							Don't have an account? Create an account.
						</p>
					</Link>
					<div className="flex-1 border-b border-gray-500"></div>
				</div>
			</div>
		</div>
	);
};

export default Login;
