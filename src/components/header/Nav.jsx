// import { gsap } from "react-icons/fa6";
import { PiBasketLight } from "react-icons/pi";
import StMariaLogo from "/smariawhite.svg";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const Nav = () => {
	const [navClass, setNavClass] = useState("");

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY >= 10) {
				setNavClass("bg-black");
			} else {
				setNavClass("bg-transparent");
			}
		});
	}, [navClass]);
	return (
		<nav className={`${navClass} nav flex items-center h-18 py-6 px-8 wide:px-20`}>
			<div className="logo hidden lg:flex">
				<h1 className="opacity-0 h-0 w-0 ">Santa Maria</h1>
				<img className="h-16 wide:h-20" src={StMariaLogo} />
			</div>
			<ul className="flex flex-1 justify-center items-center gap-8 font-sans text-m">
				<li>
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive
								? "text-white wide:text-lg uppercase py-2 border-b-2 border-solid border-white"
								: "wide:text-lg text-white uppercase py-2 border-b-2 border-solid border-transparent hover:border-white"
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
								? "text-white wide:text-lg uppercase py-2 border-b-2 border-solid border-white"
								: "wide:text-lg text-white uppercase py-2 border-b-2 border-solid border-transparent hover:border-white"
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
								? "text-white wide:text-lg uppercase py-2 border-b-2 border-solid border-white"
								: "wide:text-lg text-white uppercase py-2 border-b-2 border-solid border-transparent hover:border-white"
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
								? "text-white wide:text-lg uppercase py-2 border-b-2 border-solid border-white"
								: "wide:text-lg text-white uppercase py-2 border-b-2 border-solid border-transparent hover:border-white"
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
								? "text-white wide:text-lg uppercase py-2 border-b-2 border-solid border-white"
								: "wide:text-lg text-white uppercase py-2 border-b-2 border-solid border-transparent hover:border-white"
						}
					>
						book a table
					</NavLink>
				</li>
			</ul>
			<ul className="hidden lg:flex font-sans text-m items-center gap-8">
				<li>
					<PiBasketLight className="text-white text-lg wide:text-xl"></PiBasketLight>
				</li>
				<li className="text-white wide:text-lg">
					<span>Sign Up</span>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
