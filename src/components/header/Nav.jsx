// import { gsap } from "react-icons/fa6";
import { PiBasketLight } from "react-icons/pi";
import StMariaLogo from "/smaria.svg";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="nav flex items-center h-18 m-6">
			<div className="flex">
				<h1 className="opacity-0 h-0 w-0 ">Santa Maria</h1>
				<img className="h-16" src={StMariaLogo} />
			</div>
			<ul className="flex  flex-1 justify-center items-center gap-8">
				<li className="flex items-center flex-col">
					<NavLink
						to="/Home"
						className="text-black hover:text-red uppercase py-2 border-b-2 border-solid border-white hover:border-black"
					>
						home
					</NavLink>
				</li>
				<li className="flex items-center flex-col">
					<NavLink
						to="/Menu"
						className="text-black hover:text-red uppercase py-2 border-b-2 border-solid border-white hover:border-black"
					>
						menu
					</NavLink>
				</li>
				<li className="flex items-center flex-col">
					<NavLink
						to="/Ourstory"
						className="text-black hover:text-red uppercase py-2 border-b-2 border-solid border-white hover:border-black"
					>
						our story
					</NavLink>
				</li>
				<li className="flex items-center flex-col">
					<NavLink
						to="/Orderonline"
						className="text-black hover:text-red uppercase py-2 border-b-2 border-solid border-white hover:border-black"
					>
						order online
					</NavLink>
				</li>
				<li className="flex items-center flex-col">
					<NavLink
						to="/Booktable"
						className="text-black hover:text-red uppercase py-2 border-b-2 border-solid border-white hover:border-black"
					>
						book a table
					</NavLink>
				</li>
			</ul>
			<ul className="flex items-center gap-8">
				<li>
					<PiBasketLight className="text-black w-6 h-6"></PiBasketLight>
				</li>
				<li className="text-white bg-black py-4 px-10 rounded-full">
					<span>Sign Up</span>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
