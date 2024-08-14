import Deadpool from "/deadpool.png";
function Topcasts() {
	return (
		<section id="Topcasts">
			<div className="flex mb-[20px]">
				<ul className="flex flex-auto items-center gap-0.5">
					<li className="uppercase text-s px-2 py-0.5 rounded-lg border border-white text-white font-oswald">
						action
					</li>
					<li className="uppercase text-s px-2 py-0.5 rounded-lg border border-white text-white font-oswald">
						comedy
					</li>
					<li className="uppercase text-s px-2 py-0.5 rounded-lg border border-white text-white font-oswald">
						sci-fi
					</li>
				</ul>
				<p className="uppercase text-s text-white font-oswald">
					release [may 3, 2024]
				</p>
			</div>
			<ul className="cast flex justify-between py-[20px]">
				<li className="uppercase text-white font-oswald text-xl">
					ryan reynolds
				</li>
				<li className="uppercase text-white font-oswald text-xl">karan soni</li>
				<li className="uppercase text-white font-oswald text-xl">
					emma corrin
				</li>
				<li className="uppercase text-white font-oswald text-xl">
					hugh jackman
				</li>
			</ul>
			<div className="overflow-hidden">
				<span className="leading-[1] uppercase text-white text-mega font-bold tracking-[12.5px] font-oswald">
					deadpool
				</span>
			</div>
			<img src={Deadpool}></img>
		</section>
	);
}

export default Topcasts;
