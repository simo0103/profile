import Nav from "./Nav";
import StMariaLogo from "/smariawhite.svg";
import React, { useState, useEffect } from "react";

const Header = () => {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isOnTop, setTop] = useState(true);

	const controlNavbar = () => {
		window.scrollY <= 50 ? setTop(true) : setTop(false);
		const isBottomPage =
			window.innerHeight + Math.round(window.scrollY) >=
			document.body.offsetHeight;
		if ((window.scrollY > lastScrollY && lastScrollY >= 0) || isBottomPage) {
			// if scroll down hide the navbar
			setShow(false);
		} else {
			// if scroll up show the navbar
			setShow(true);
		}

		// remember current page location to use in the next move
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", controlNavbar);

		// cleanup function
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, [lastScrollY]);

	return (
		<>
			<div
				className={`"${isOnTop ? " h-[100px]" : " h-[50px] bg-black"} logo z-50 flex justify-center w-full  items-center lg:hidden fixed "`}
			>
				<h1 className="opacity-0 h-0 w-0 ">Santa Maria</h1>
				<img
					className={`"${isOnTop ? " h-16 " : " h-8 "} transition-height "`}
					src={StMariaLogo}
				/>
			</div>
			<header
				className={`"${show ? "mobile:translate-bezier " : " mobile:invisible mobile:translate-y-full mobile:translate-bezier "} mobile:bottom-[-60px] mobile:pb-[60px] mp-safe fixed lg:pb-inset left-0 right-0 lg:top-0 lg:bottom-auto width-full z-50 "`}
			>
				<Nav />
			</header>
		</>
	);
};

export default Header;
