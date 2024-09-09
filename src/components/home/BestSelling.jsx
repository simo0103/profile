import Pizza1 from "./images/bestpizza.jpg";
import Pizza2 from "./images/bestpizza2.jpg";
import Pizza3 from "./images/bestpizza.jpg";
import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";

function BestSelling() {
	const image = useRef(null);
	const [loaded, setLoaded] = useState(false);
	const onImageLoaded = () => setLoaded(true);
	let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

	let delayAnimation = isMobile ? 0 : 0.5;

	useEffect(() => {
		const imageCurrent = image.current;

		if (imageCurrent) {
			imageCurrent.addEventListener("load", onImageLoaded);
			return () => imageCurrent.removeEventListener("load", onImageLoaded);
		}
	}, [image]);

	return (
		<InView>
			{({ inView, ref }) => (
				<section
					id="bestselling"
					ref={ref}
					className="px-4 xl:px-20 wide:px-80 text-white xl:pb-20"
				>
					{" "}
					{!loaded && (
						<>
							<div className="h-[50px] w-full mx-auto bg-gray-600 rounded-full dark:bg-gray-800 mb-10"></div>
						</>
					)}
					<h2
						style={{ visibility: loaded ? "visible" : "hidden" }}
						className="text-center text-xxl xl:text-mega wide:text-xxl font-steelfishBold mb-10 font-bold"
					>
						{/* {`Header inside viewport ${inView}.`} */}
						Our best selling pizzas
					</h2>
					<div className="grid grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-8">
						<motion.div   
							initial={{y: 60, opacity: 0 }}
							viewport={{ once: true }}
							whileInView={{ y: 0, opacity: 1, transition:{delay: 0.5, duration: 1}}}
							className="card rounded-lg bg-zinc-900 pb-4 xl:pb-8 text-center">
							{!loaded && (
								<>
									<div
										role="status"
										className="skeleton mb-4 bg-gray-600 dark:bg-gray-800 rounded animate-pulse aspect-video"
									></div>
									<div className="h-[40px] w-3/4 mx-auto bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
								</>
							)}
							<img
								ref={image}
								style={{ display: loaded ? "opacity: '1'; transition: 'opacity 2s'" : "opacity: '0'" }}
								className="mb-4 rounded-t-lg"
								width="100%"
								src={Pizza1}
							></img>
							<h3
								style={{ display: loaded ? "block" : "none" }}
								className="uppercase font-steelfishBold text-xl font-bold mb-4"
							>
								santa caterina
							</h3>
							<p className="mb-8 font-serif px-4 text-s xl:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-2 xl:py-4 px-4 text-s xl:text-m xl:px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
					</motion.div>
						<motion.div 
								initial={{y: 60, opacity: 0, transition:{duration: 1} }}
								viewport={{ once: true }}
								whileInView={{ y: 0, opacity: 1, transition:{delay: 0.5, duration: 1}}} 
							className="card rounded-lg bg-zinc-900 pb-4 xl:pb-8 text-center">
							{!loaded && (
								<>
									<div
										role="status"
										className="skeleton mb-4 bg-gray-600 dark:bg-gray-800 rounded animate-pulse aspect-video"
									></div>
									<div className="h-[40px] w-3/4 mx-auto bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
								</>
							)}
							<img
								ref={image}
								style={{ display: loaded ? "opacity: '1'; transition: 'opacity 2s'" : "opacity: '0'" }}
								className="mb-4 rounded-t-lg"
								width="100%"
								src={Pizza2}
							></img>
							<h3
								style={{ display: loaded ? "block" : "none" }}
								className="uppercase font-steelfishBold text-xl font-bold mb-4"
							>
								santa bufalina
							</h3>
							<p className="mb-8 font-serif px-4 text-s xl:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-2 xl:py-4 px-4 text-s xl:text-m xl:px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</motion.div>
						<motion.div   
							initial={{y: 60, opacity: 0 , transition:{duration: 1}}}
							whileInView={{ y: 0, opacity: 1, transition:{delay: delayAnimation, duration: 1}}}
							viewport={{ once: true }}
							className="card rounded-lg bg-zinc-900 pb-4 xl:pb-8 text-center">
							{!loaded && (
								<>
									<div
										role="status"
										className="skeleton mb-4 bg-gray-600 dark:bg-gray-800 rounded animate-pulse aspect-video"
									></div>
									<div className="h-[40px] w-3/4 mx-auto bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
								</>
							)}
							<img
								ref={image}
								style={{ display: loaded ? "opacity: '1'; transition: 'opacity 2s'" : "opacity: '0'" }}
								className="mb-4 rounded-t-lg"
								width="100%"
								src={Pizza3}
							></img>
							<h3
								style={{ display: loaded ? "block" : "none" }}
								className="uppercase font-steelfishBold text-xl font-bold mb-4"
							>
								santa caterina
							</h3>
							<p className="mb-8 font-serif px-4 text-s xl:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-2 xl:py-4 px-4 text-s xl:text-m xl:px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</motion.div>
						<motion.div   
							initial={{y: 60, opacity: 0 , transition:{duration: 1}}}
							whileInView={{ y: 0, opacity: 1, transition:{duration: 1}}}
							viewport={{ once: true }}
							className="card rounded-lg bg-zinc-900 pb-4 xl:pb-8 text-center">
							{!loaded && (
								<>
									<div
										role="status"
										className="skeleton mb-4 bg-gray-600 dark:bg-gray-800 rounded animate-pulse aspect-video"
									></div>
									<div className="h-[40px] w-3/4 mx-auto bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
								</>
							)}
							<img
								ref={image}
								style={{ display: loaded ? "block" : "none" }}
								className="mb-4 rounded-t-lg"
								width="100%"
								src={Pizza1}
							></img>
							<h3
								style={{ display: loaded ? "block" : "none" }}
								className="uppercase font-steelfishBold text-xl font-bold mb-4"
							>
								santa caterina
							</h3>
							<p className="mb-8 font-serif px-4 text-s xl:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-2 xl:py-4 px-4 text-s xl:text-m xl:px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</motion.div>
						<motion.div   
							initial={{y: 60, opacity: 0 , transition:{duration: 1}}}
							whileInView={{ y: 0, opacity: 1, transition:{duration: 1}}}
							viewport={{ once: true }}
							className="card rounded-lg bg-zinc-900 pb-4 xl:pb-8 text-center">
							{!loaded && (
								<>
									<div
										role="status"
										className="skeleton mb-4 bg-gray-600 dark:bg-gray-800 rounded animate-pulse aspect-video"
									></div>
									<div className="h-[40px] w-3/4 mx-auto bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
								</>
							)}
							<img
								ref={image}
								style={{ display: loaded ? "block" : "none" }}
								className="mb-4 rounded-t-lg"
								width="100%"
								src={Pizza2}
							></img>
							<h3
								style={{ display: loaded ? "block" : "none" }}
								className="uppercase font-steelfishBold text-xl font-bold mb-4"
							>
								santa bufalina
							</h3>
							<p className="mb-8 font-serif px-4 text-s xl:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-2 xl:py-4 px-4 text-s xl:text-m xl:px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</motion.div>
						<motion.div   
							initial={{y: 60, opacity: 0 , transition:{duration: 1}}}
							whileInView={{ y: 0, opacity: 1, transition:{duration: 1}}}
							viewport={{ once: true }}
							className="card rounded-lg bg-zinc-900 pb-4 xl:pb-8 text-center">
							{!loaded && (
								<>
									<div
										role="status"
										className="skeleton mb-4 bg-gray-600 dark:bg-gray-800 rounded animate-pulse aspect-video"
									></div>
									<div className="h-[40px] w-3/4 mx-auto bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
								</>
							)}
							<img
								ref={image}
								style={{ display: loaded ? "block" : "none" }}
								className="mb-4 rounded-t-lg"
								width="100%"
								src={Pizza3}
							></img>
							<h3
								style={{ display: loaded ? "block" : "none" }}
								className="uppercase font-steelfishBold text-xl font-bold mb-4"
							>
								santa caterina
							</h3>
							<p className="mb-8 font-serif px-4 text-s xl:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-2 xl:py-4 px-4 text-s xl:text-m xl:px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</motion.div>
					</div>
				</section>
			)}
		</InView>
	);
}

export default BestSelling;
