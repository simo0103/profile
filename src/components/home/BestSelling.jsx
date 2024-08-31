import Pizza1 from "./images/pizza1.jpg";
import Pizza2 from "./images/pizza2.jpg";
import Pizza3 from "./images/pizza3.jpg";

import { InView } from "react-intersection-observer";
function BestSelling() {
	return (
		<InView>
			{({ inView, ref }) => (
				<section id="bestselling" ref={ref} className="px-8 mb-20">
					<h2 className="text-center text-lg uppercase mb-8 font-bold">
						{`Header inside viewport ${inView}.`}
						Our best selling pizzas
					</h2>
					<div className="flex gap-8">
						<div className="card p-4 text-center">
							<img className="mb-4" width="400px" src={Pizza1}></img>
							<h3 className="uppercase font-bold mb-4">santa caterina</h3>
							<p className="mb-4">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-sm width-full bg-red-800 text-white">
								add to cart
							</button>
						</div>
						<div className="card p-4 text-center">
							<img className="mb-4" width="400px" src={Pizza2}></img>
							<h3 className="uppercase font-bold mb-4">santa bufalina</h3>
							<p className="mb-4">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-sm width-full bg-red-800 text-white">
								add to cart
							</button>
						</div>
						<div className="card p-4 text-center">
							<img className="mb-4" width="400px" src={Pizza3}></img>
							<h3 className="uppercase font-bold mb-4">santa caterina</h3>
							<p className="mb-4">
								Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan
							</p>
							<button className="capitalize py-4 px-10 rounded-sm width-full bg-red-800 text-white">
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
