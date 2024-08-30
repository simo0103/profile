import Pizza from "./images/santacaterina.jpg";
import { InView } from "react-intersection-observer";
function BestSelling() {
	return (
		<InView>
			{({ inView, ref }) => (
				<section id="bestselling" ref={ref} className="px-8">
					<h2 className="text-center text-lg uppercase mb-8 font-bold">
						{`Header inside viewport ${inView}.`}
						Our best selling pizzas
					</h2>
					<div className="flex gap-8">
						<div className="card">
							<img src={Pizza}></img>
							<h3 className="uppercase mb-4">santa caterina</h3>
							<p>Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan</p>
						</div>
						<div className="card">
							<img src={Pizza}></img>
							<h3 className="uppercase mb-4">santa bufalina</h3>
							<p>Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan</p>
						</div>
						<div className="card">
							<img src={Pizza}></img>
							<h3 className="uppercase mb-4">santa caterina</h3>
							<p>Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan</p>
						</div>
					</div>
				</section>
			)}
		</InView>
	);
}

export default BestSelling;
