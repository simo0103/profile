// import { FaAngleDown } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Nav = () => {
	return (
		<nav className="nav flex items-center">
			<div className="flex flex-1 items-center gap-4">
				<NavLink
					to="/"
					className="logo p-2 rounded-full bg-slate-200 font-bold text-xl"
				>
					ST
				</NavLink>
				<h1>Simona Trotti</h1>
			</div>
			<ul className="flex flex-auto items-center gap-4">
				<li className="flex items-center">
					<NavLink
						to="/About"
						className={({ isActive }) =>
							isActive ? "text-black" : "text-slate-400 hover:text-black"
						}
					>
						About Me
					</NavLink>
					{/* <FaAngleDown /> */}
				</li>
				<li className="flex items-center">
					<NavLink
						to="/Contact"
						className={({ isActive }) =>
							isActive ? "text-black" : "text-slate-400 hover:text-black"
						}
					>
						Contact
					</NavLink>
					{/* <FaAngleDown /> */}
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
