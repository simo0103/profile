import Pizza1 from "./images/bestpizza.jpg";
import Pizza2 from "./images/bestpizza2.jpg";
import Pizza3 from "./images/bestpizza.jpg";
import { useRef, useEffect, useState } from "react";


import { InView } from "react-intersection-observer";
function BestSelling() {
	const image = useRef(null);

	const [loaded, setLoaded] = useState(false);

	const onImageLoaded = () => setLoaded(true);

	useEffect(() => {
		const imageCurrent = image.current;

		if (imageCurrent) {
		  imageCurrent.addEventListener('load', onImageLoaded);
		  return () => imageCurrent.removeEventListener('load', onImageLoaded);
		}

	}, [image]);
	return (
		<InView>
			{({ inView, ref }) => (
				<section id="bestselling" ref={ref} className="px-20 wide:px-80 text-white pb-20">
					<h2  style={{ visibility: loaded ? 'visible' : 'hidden' }} className="text-center text-mega wide:text-xl font-steelfishBold mb-10 font-bold">
						{/* {`Header inside viewport ${inView}.`} */}
						Our best selling pizzas
					</h2>
					<div className="grid grid-cols-3 gap-8">
						<div className="card rounded-lg bg-zinc-900 pb-8 text-center">
							{!loaded && 	
								<>
									<div role="status" className="skeleton mb-4 bg-gray-600 dark:bg-gray-800 rounded animate-pulse aspect-video"></div>
									<div className="h-[40px] w-3/4 mx-auto bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
								</>	
							}
							<img ref={image} style={{ display: loaded ? 'block' : 'none' }} className="mb-4 rounded-t-lg" width="100%" src={Pizza1}></img>
							<h3 style={{ display: loaded ? 'block' : 'none' }} className="uppercase font-steelfishBold text-xl font-bold mb-4">santa caterina</h3>
							<p className="mb-8 font-serif px-4 wide:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card rounded-lg bg-zinc-900 pb-8 text-center">
							{!loaded && 	
								<>
									<div role="status" className="skeleton mb-4 bg-gray-600 dark:bg-gray-800 rounded animate-pulse aspect-video"></div>
									<div className="h-[40px] w-3/4 mx-auto bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
								</>	
							}
							<img ref={image} style={{ display: loaded ? 'block' : 'none' }} className="mb-4 rounded-t-lg" width="100%" src={Pizza2}></img>
							<h3 style={{ display: loaded ? 'block' : 'none' }} className="uppercase font-steelfishBold text-xl font-bold mb-4">santa bufalina</h3>
							<p className="mb-8 font-serif px-4 wide:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card rounded-lg bg-zinc-900 pb-8 text-center">
							{!loaded && 	
								<>
									<div role="status" className="skeleton mb-4 bg-gray-600 dark:bg-gray-800 rounded animate-pulse aspect-video"></div>
									<div className="h-[40px] w-3/4 mx-auto bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
								</>	
							}
							<img ref={image} style={{ display: loaded ? 'block' : 'none' }} className="mb-4 rounded-t-lg" width="100%" src={Pizza3}></img>
							<h3 style={{ display: loaded ? 'block' : 'none' }} className="uppercase font-steelfishBold text-xl font-bold mb-4">santa caterina</h3>
							<p className="mb-8 font-serif px-4 wide:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card rounded-lg bg-zinc-900 pb-8 text-center">
							{!loaded && 	
								<>
									<div role="status" className="skeleton mb-4 bg-gray-600 dark:bg-gray-800 rounded animate-pulse aspect-video"></div>
									<div className="h-[40px] w-3/4 mx-auto bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
								</>	
							}
							<img ref={image} style={{ display: loaded ? 'block' : 'none' }} className="mb-4 rounded-t-lg" width="100%" src={Pizza1}></img>
							<h3 style={{ display: loaded ? 'block' : 'none' }} className="uppercase font-steelfishBold text-xl font-bold mb-4">santa caterina</h3>
							<p className="mb-8 font-serif px-4 wide:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card rounded-lg bg-zinc-900 pb-8 text-center">
							{!loaded && 	
								<>
									<div role="status" className="skeleton mb-4 bg-gray-600 dark:bg-gray-800 rounded animate-pulse aspect-video"></div>
									<div className="h-[40px] w-3/4 mx-auto bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
								</>	
							}
							<img ref={image} style={{ display: loaded ? 'block' : 'none' }} className="mb-4 rounded-t-lg" width="100%" src={Pizza2}></img>
							<h3 style={{ display: loaded ? 'block' : 'none' }} className="uppercase font-steelfishBold text-xl font-bold mb-4">santa bufalina</h3>
							<p className="mb-8 font-serif px-4 wide:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card rounded-lg bg-zinc-900 pb-8 text-center">
							{!loaded && 	
								<>
									<div role="status" className="skeleton mb-4 bg-gray-600 dark:bg-gray-800 rounded animate-pulse aspect-video"></div>
									<div className="h-[40px] w-3/4 mx-auto bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
								</>	
							}
							<img ref={image} style={{ display: loaded ? 'block' : 'none' }} className="mb-4 rounded-t-lg" width="100%" src={Pizza3}></img>
							<h3 style={{ display: loaded ? 'block' : 'none' }} className="uppercase font-steelfishBold text-xl font-bold mb-4">santa caterina</h3>
							<p className="mb-8 font-serif px-4 wide:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
					</div>
				</section>
			)}
		</InView>
	);
}

export default BestSelling;
