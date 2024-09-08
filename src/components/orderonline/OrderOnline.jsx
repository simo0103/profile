
import outside1 from "./images/outside1.jpg";
import outside2 from "./images/outside2.jpg";
import { FaAngleRight } from "react-icons/fa6";

const OrderOnline = () => {
	return (
		<section id="orderOnline" className="mx-8">
			<h3 className="text-xl capitalize font-bold">collect at</h3>
			<ul className="flex mt-8 gap-8">
				<li className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 cursor-pointer">
					<img class="rounded-t-lg" src={outside1} alt="pizzeria outside" />
					<div className="p-5">
						<h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Greenwitch</h4>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">111 address, london N5</p>
						<button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-900 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            				Select location
							<FaAngleRight className="ml-4" />
        				</button>
					</div>							
				</li>
				<li className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<img class="rounded-t-lg" src={outside2} alt="pizzeria outside" />
					<div className="p-5">
						<h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Notting Hill</h4>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">111 address, london N5</p>
						<button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-900 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            				Select location
							<FaAngleRight className="ml-4" />
        				</button>
					</div>							
				</li>
				<li className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<img class="rounded-t-lg" src={outside1} alt="pizzeria outside" />
					<div className="p-5">
						<h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Canary Wharf</h4>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">111 address, london N5</p>
						<button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-900 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            				Select location
							<FaAngleRight className="ml-4" />
        				</button>
					</div>							
				</li>
				<li className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<img class="rounded-t-lg" src={outside2} alt="pizzeria outside" />
					<div className="p-5">
						<h4 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">Primrose Hill</h4>
						<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">111 address, london N5</p>
						<button class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-slate-900 rounded-lg hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            				Select location
							<FaAngleRight className="ml-4" />
        				</button>
					</div>							
				</li>
			</ul>
		</section>
	)
}

export default OrderOnline;
