import { useRef, useEffect, useState } from "react";
import mainImage from "./images/shot2.jpeg";
import mainImageMobile from "./images/mainImage.smartphone.png";
import SubContent from "./SubContent";
import BestSelling from "./BestSelling";

function Home() {
	const [bannerIsVisible, updatebannerIsVisible] = useState();
	const myRef = useRef();
	useEffect(() => {
		const observer = new IntersectionObserver((entries, observer) => {
			const banner = entries[0];
			updatebannerIsVisible(banner.isIntersecting);
		});
		observer.observe(myRef.current);
	}, []);
	return (
		<>
			<div
				id="bannerImage"
				ref={myRef}
				className="relative after:content-['*'] after:absolute after:w-full after:h-full after:bg-black after:top-0 after:left-0 after:opacity-30"
			>
				<div className="absolute text-center translate-x-[-50%] top-[25%] left-1/2 z-10">
					<h2 className="text-white uppercase text-lg mb-8">
						autentica pizza napoletana
					</h2>
					<button className="capitalize py-4 px-10 rounded-md bg-red-800 text-white">
						book a table
					</button>
				</div>
				<img
					srcSet={`${mainImageMobile} 320px, ${mainImageMobile} 680px, ${mainImage} 1025w,  ${mainImage} 1440w`}
					src={mainImageMobile}
					alt="pizza"
				/>
			</div>
			<SubContent />
			<BestSelling />
		</>
	);
}

export default Home;
