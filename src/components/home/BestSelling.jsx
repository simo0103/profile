import Pizza from "./images/santacaterina.jpg";
function BestSelling() {
	return (
		<div className="grid">
			<h2 className="text-center text-lg font-bold">Our best selling pizzas</h2>
			<div>
				<div>
					<img src={Pizza}></img>
					<h3>santa caterina</h3>
					<p>Tomato, Fiordilatte, Salame, Fresh Chili, Parmesan</p>
				</div>
			</div>
		</div>
	);
}

export default BestSelling;
