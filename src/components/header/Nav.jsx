// import { gsap } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { PiUserLight } from "react-icons/pi";
import { LuDot } from "react-icons/lu";
import { FaCircle } from "react-icons/fa";

const Nav = () => {
	return (
		<nav className="nav flex items-center h-20 px-6">
			<div className="flex flex-1 items-center gap-4">
				<h1>CINEDAILY</h1>
			</div>
			<ul className="flex flex-auto items-center gap-4">
				<li className="flex items-center flex-col">
					<a href="#Topcasts" className="text-white hover:text-red uppercase">
						top casts
					</a>
					<FaCircle className="text-red-700 w-2"></FaCircle>
				</li>
				<LuDot className="text-white mb-[5px]"></LuDot>
				<li className="flex items-center flex-col">
					<a href="#Production" className="text-white hover:text-red uppercase">
						production
					</a>
					<FaCircle className="text-red-700 w-2"></FaCircle>
				</li>
				<LuDot className="text-white mb-[5px]"></LuDot>
				<li className="flex items-center flex-col">
					<a href="#Boxoffice" className="text-white hover:text-red uppercase">
						box office
					</a>
					<FaCircle className="text-red-700 w-2"></FaCircle>
				</li>
				<LuDot className="text-white mb-[5px]"></LuDot>
				<li className="flex items-center flex-col">
					<a href="#Imax6" className="text-white hover:text-red uppercase">
						imax 6
					</a>
					<FaCircle className="text-red-700 w-2"></FaCircle>
				</li>
			</ul>
			<ul className="flex items-center gap-4">
				<li>
					<CiSearch className="text-white"></CiSearch>
				</li>
				<li>
					<PiUserLight className="text-white"></PiUserLight>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
