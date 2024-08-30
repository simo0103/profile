// import { gsap } from "react-icons/fa6";
import { PiBasketLight } from "react-icons/pi";
import StMariaLogo from "/smariawhite.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = () => {
	const [navClass, setNavClass] = useState("");

	useEffect(() => {
		const banner = document.getElementById("bannerImage");
		const bannerHeight = banner.offsetHeight;
		window.addEventListener("scroll", () => {
			if (window.scrollY >= bannerHeight) setNavClass("bg-black");
		});
	}, [navClass]);
	return (
		<nav className={`${navClass} nav flex items-center h-18 p-6`}>
			<div className="hidden lg:flex">
				<h1 className="opacity-0 h-0 w-0 ">Santa Maria</h1>
				<img className="h-16" src={StMariaLogo} />
			</div>
			<ul className="flex flex-1 justify-center items-center gap-8">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "text-white uppercase py-2 border-b-2 border-solid border-white"
								: "text-white uppercase py-2 border-b-2 border-solid border-transparent hover:border-white"
						}
					>
						home
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Menu"
						className={({ isActive }) =>
							isActive
								? "text-white uppercase py-2 border-b-2 border-solid border-white"
								: "text-white uppercase py-2 border-b-2 border-solid border-transparent hover:border-white"
						}
					>
						menu
					</NavLink>
				</li>
				<li className="hidden lg:block items-center">
					<NavLink
						to="/Ourstory"
						className={({ isActive }) =>
							isActive
								? "text-white uppercase py-2 border-b-2 border-solid border-white"
								: "text-white uppercase py-2 border-b-2 border-solid border-transparent hover:border-white"
						}
					>
						our story
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Orderonline"
						className={({ isActive }) =>
							isActive
								? "text-white uppercase py-2 border-b-2 border-solid border-white"
								: "text-white uppercase py-2 border-b-2 border-solid border-transparent hover:border-white"
						}
					>
						order online
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/Booktable"
						className={({ isActive }) =>
							isActive
								? "text-white uppercase py-2 border-b-2 border-solid border-white"
								: "text-white uppercase py-2 border-b-2 border-solid border-transparent hover:border-white"
						}
					>
						book a table
					</NavLink>
				</li>
			</ul>
			<ul className="hidden lg:flex items-center gap-8">
				<li>
					<PiBasketLight className="text-white w-6 h-6"></PiBasketLight>
				</li>
				<li className="text-white bg-black py-4 px-10 rounded-full">
					<span>Sign Up</span>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
