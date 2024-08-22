// import { gsap } from "react-icons/fa6";
import { PiUserLight } from "react-icons/pi";
import StMariaLogo from "/smaria.svg";

const Nav = () => {
	return (
		<nav className="nav flex items-center h-20 px-6">
			<div className="flex flex-1 items-center gap-4">
				<h1 className="opacity-0 h-0 w-0 ">Santa Maria</h1>
				<img src={StMariaLogo} />
			</div>
			<ul className="flex flex-auto items-center gap-4">
				<li className="flex items-center flex-col">
					<a href="#Home" className="text-black hover:text-red uppercase">
						home
					</a>
				</li>
				<li className="flex items-center flex-col">
					<a href="#Menu" className="text-black hover:text-red uppercase">
						menu
					</a>
				</li>
				<li className="flex items-center flex-col">
					<a href="#Ourstory" className="text-black hover:text-red uppercase">
						our story
					</a>
				</li>
				<li className="flex items-center flex-col">
					<a href="#Order" className="text-black hover:text-red uppercase">
						order online
					</a>
				</li>
				<li className="flex items-center flex-col">
					<a href="#Booktable" className="text-black hover:text-red uppercase">
						book a table
					</a>
				</li>
			</ul>
			<ul className="flex items-center gap-4">
				<li>
					<PiUserLight className="text-black"></PiUserLight>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
