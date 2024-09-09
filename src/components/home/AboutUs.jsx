import chefImage from "./images/aboutus.jpg";
import { useRef, useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion"

function AboutUs() {
	const image = useRef(null);
	const [loaded, setLoaded] = useState(false);
	const onImageLoaded = () => setLoaded(true);
    const { scrollYProgress } = useScroll();
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
					</div>
					<div className="flex-1 aspect-[4/3] bg-gray-600 rounded dark:bg-gray-800"></div>
				</div>
			)}
			<motion.section 
				style={{ scaleX: scrollYProgress }}
				viewport={{ once: true }}
				id="AboutUs"
				className="text-center content pt-2 xl:pt-20 px-2 items-center gap-8 xl:px-20 wide:px-80"
			>
				<h2
					style={{ display: loaded ? "block" : "none" }}
					className="text-white capitalize text-center mb-8 text-xxl font-bold font-steelfishBold"
				>
                    the story of our dream
				</h2>
                <div className="xl:flex flex-column justify-center align-center">
                    <img
                        ref={image}
                        src={chefImage}
                        className="w-full xl:w-2/4"
                        width="50%"
                        style={{ display: loaded ? "block" : "none" }}
                    />
                    <div>
                        <h3 className="text-white uppercase text-xl my-5 font-oswald xl:text-xxl">pizza born in naples</h3>
                        <p className="text-white px-2">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce elementum velit augue, in pulvinar purus pellentesque facilisis. Cras placerat neque porta est aliquet convallis.
                        </p>
                        <button className="uppercase text-lg font-oswald mt-5 border-b-2 border-solid border-white text-white">read more</button>
                    </div>
                </div>
				
			</motion.section>
		</>
	);
}

export default AboutUs;
