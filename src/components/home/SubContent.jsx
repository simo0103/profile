import trancioPizza from "./images/trancioPizza.jpg";
import { useRef, useEffect, useState } from "react";

function SubContent() {
	const image = useRef(null);
	const [loaded, setLoaded] = useState(false);
	const onImageLoaded = () => setLoaded(true);

	useEffect(() => {
		const imageCurrent = image.current;
		if (imageCurrent) {
			imageCurrent.addEventListener("load", onImageLoaded);
			return () => imageCurrent.removeEventListener("load", onImageLoaded);
		}
	}, [image]);
	return (
		<>
			{!loaded && (
				<div
					role="status"
					className="skeleton animate-pulse py-20 px-2 xl:px-80 xl:flex justify-center items-center gap-8"
				>
					<div className="flex-1">
						<div className="h-4 bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
						<div className="h-4 bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
						<div className="h-4 bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
						<div className="h-4 bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
					</div>
					<div className="flex-1 aspect-[4/3] bg-gray-600 rounded dark:bg-gray-800"></div>
				</div>
			)}
			<section
				id="subcontent"
				className="content py-20 px-2 xl:px-20 wide:px-80 xl:flex items-center gap-8"
			>
				<p className="text-white font-serif text-center mb-8 xl:mb-0 text-m wide:leading-10 wide:px-8 xl:text-xl">
					The pizza served in Santa Maria is exactly the same as the pizza you
					can eat on the streets of Naples using the same ingredients and
					adopting the same cooking method
				</p>
				<img
					ref={image}
					src={trancioPizza}
					className="w-full xl:w-2/4"
					width="50%"
					style={{ display: loaded ? "block" : "none" }}
				/>
			</section>
		</>
	);
}

export default SubContent;
