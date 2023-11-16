import React, { useState } from "react";

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);

	const slidesData = [
		{
			id: 1,
			imageUrl:
				"https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582518206%2Fbanner-3_mczlxb.jpg&w=1920&q=75",
		},
		{
			id: 2,
			imageUrl:
				"https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582518195%2Fbanner-2_htripb.jpg&w=1920&q=75",
		},
		{
			id: 3,
			imageUrl:
				"https://dress-shop.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdjlbfjouc%2Fimage%2Fupload%2Fv1582518190%2Fbanner-1_sysmlz.jpg&w=1920&q=75",
		},
	];

	console.log("Current Slide:", currentSlide);
	return (
		<div className="flex items-center justify-center h-[550px] relative">
			<div className="relative overflow-hidden w-full h-[550px]">
				{slidesData.map((slide, index) => (
					<div
						key={slide.id}
						className={`absolute top-0 left-0 w-full h-full transition-transform duration-1000  scroll-smooth  ${
							index === currentSlide ? "translate-x-0" : "translate-x-full"
						}`}>
						<img
							src={slide.imageUrl}
							alt={`Slide ${slide.id}`}
							className="w-full h-full object-cover"
						/>
					</div>
				))}
			</div>
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{slidesData.map((_, index) => (
					<button
						key={index}
						className={`w-4 h-4 rounded-full ${
							index === currentSlide ? "bg-white" : "bg-gray-500"
						}`}
						onClick={() => setCurrentSlide(index)}></button>
				))}
			</div>
		</div>
	);
};

export default Carousel;
