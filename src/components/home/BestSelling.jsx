import Pizza1 from "./images/bestpizza.jpg";
import Pizza2 from "./images/bestpizza2.jpg";
import Pizza3 from "./images/bestpizza.jpg";

import { InView } from "react-intersection-observer";
function BestSelling() {
	return (
		<InView>
			{({ inView, ref }) => (
				<section id="bestselling" ref={ref} className="px-20 text-white pb-20">
					<h2 className="text-center text-lg font-latoBlack mb-8 font-bold">
						{/* {`Header inside viewport ${inView}.`} */}
						Our best selling pizzas
					</h2>
					<div className="grid grid-cols-3 gap-8">
						<div className="card bg-zinc-900 pb-8 text-center">
							<img className="mb-4" width="400px" src={Pizza1}></img>
							<h3 className="uppercase font-steelfishBold text-lg font-bold mb-4">santa caterina</h3>
							<p className="mb-8 font-serif px-4">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card bg-zinc-900 pb-8 text-center">
							<img className="mb-4" width="400px" src={Pizza2}></img>
							<h3 className="uppercase font-steelfishBold text-lg font-bold mb-4">santa bufalina</h3>
							<p className="mb-8 font-serif px-4">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card bg-zinc-900 pb-8 text-center">
							<img className="mb-4" width="400px" src={Pizza3}></img>
							<h3 className="uppercase font-steelfishBold text-lg font-bold mb-4">santa caterina</h3>
							<p className="mb-8 font-serif px-4">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card bg-zinc-900 pb-8 text-center">
							<img className="mb-4" width="400px" src={Pizza1}></img>
							<h3 className="uppercase font-steelfishBold text-lg font-bold mb-4">santa caterina</h3>
							<p className="mb-8 font-serif px-4">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card bg-zinc-900 pb-8 text-center">
							<img className="mb-4" width="400px" src={Pizza2}></img>
							<h3 className="uppercase font-steelfishBold text-lg font-bold mb-4">santa bufalina</h3>
							<p className="mb-8 font-serif px-4">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card bg-zinc-900 pb-8 text-center">
							<img className="mb-4" width="400px" src={Pizza3}></img>
							<h3 className="uppercase font-steelfishBold text-lg font-bold mb-4">santa caterina</h3>
							<p className="mb-8 font-serif px-4">
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
