import React from "react";

const Navbar = () => {
	return (
		<div>
			<div className="flex justify-between bg-gray-500 p-4 text-white">
				<div>Logo</div>
				<div className="flex items-center space-x-8 ">
					<input
						type="search"
						name="search"
						className="rounded-md p-2 focus:outline-none border border-gray-400"
					/>
					<ul className="flex items-center space-x-4">
						<li>
							<a href="" className="text-white ">
								Signup
							</a>
						</li>
						<span>|</span>
						<li>
							<a href="" className="text-white ">
								Login
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
