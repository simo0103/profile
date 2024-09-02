import Pizza1 from "./images/bestpizza.jpg";
import Pizza2 from "./images/bestpizza2.jpg";
import Pizza3 from "./images/bestpizza.jpg";

import { InView } from "react-intersection-observer";
function BestSelling() {
	return (
		<InView>
			{({ inView, ref }) => (
				<section id="bestselling" ref={ref} className="px-20 wide:px-80 text-white pb-20">
					<h2 className="text-center text-mega wide:text-xl font-steelfishBold mb-10 font-bold">
						{/* {`Header inside viewport ${inView}.`} */}
						Our best selling pizzas
					</h2>
					<div className="grid grid-cols-3 gap-8">
						<div className="card rounded-lg bg-zinc-900 pb-8 text-center">
							<img className="mb-4 rounded-t-lg" width="100%" src={Pizza1}></img>
							<h3 className="uppercase font-steelfishBold text-xl font-bold mb-4">santa caterina</h3>
							<p className="mb-8 font-serif px-4 wide:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card rounded-lg bg-zinc-900 pb-8 text-center">
							<img className="mb-4 rounded-t-lg" width="100%" src={Pizza2}></img>
							<h3 className="uppercase font-steelfishBold text-xl font-bold mb-4">santa bufalina</h3>
							<p className="mb-8 font-serif px-4 wide:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card rounded-lg bg-zinc-900 pb-8 text-center">
							<img className="mb-4 rounded-t-lg" width="100%" src={Pizza3}></img>
							<h3 className="uppercase font-steelfishBold text-xl font-bold mb-4">santa caterina</h3>
							<p className="mb-8 font-serif px-4 wide:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card rounded-lg bg-zinc-900 pb-8 text-center">
							<img className="mb-4 rounded-t-lg" width="100%" src={Pizza1}></img>
							<h3 className="uppercase font-steelfishBold text-xl font-bold mb-4">santa caterina</h3>
							<p className="mb-8 font-serif px-4 wide:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card rounded-lg bg-zinc-900 pb-8 text-center">
							<img className="mb-4 rounded-t-lg" width="100%" src={Pizza2}></img>
							<h3 className="uppercase font-steelfishBold text-xl font-bold mb-4">santa bufalina</h3>
							<p className="mb-8 font-serif px-4 wide:text-lg">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-md width-full bg-red-800">
								add to cart
							</button>
						</div>
						<div className="card rounded-lg bg-zinc-900 pb-8 text-center">
							<img className="mb-4 rounded-t-lg" width="100%" src={Pizza3}></img>
							<h3 className="uppercase font-steelfishBold text-xl font-bold mb-4">santa caterina</h3>
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
