import Nav from "./Nav";
import StMariaLogo from "/smariawhite.svg";
import React, { useState, useEffect, useRef } from "react";

const HeaderHome = () => {
	const [show, setShow] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [isOnTop, setTop] = useState(true);
	const logo = useRef(null);
	const [loaded, setLoad] = useState(false);
	const onLogoLoad = () => setLoad(true);
	useEffect(() => {
		const logoCurrent = logo.current;

		if (logoCurrent) {
			logoCurrent.addEventListener("load", onLogoLoad);
			return () => logoCurrent.removeEventListener("load", onLogoLoad);
		}
	}, [logo]);

	const controlNavbar = () => {
		window.scrollY <= 50 ? setTop(true) : setTop(false);
		const isBottomPage =
			window.innerHeight + Math.round(window.scrollY) >=
			document.body.offsetHeight;
		if ((window.scrollY > lastScrollY && lastScrollY >= 0) || isBottomPage) {
			setShow(false);
		} else {
			setShow(true);
		}
		setLastScrollY(window.scrollY);
	};

	useEffect(() => {
		window.addEventListener("scroll", controlNavbar);
		return () => {
			window.removeEventListener("scroll", controlNavbar);
		};
	}, [lastScrollY]);

	return (
		<>
			{!loaded && (
				<div
					role="status"
					className="skeleton bg-gray-600 dark:bg-gray-800 animate-pulse w-3/5 h-16 fixed center-translateX top-0 xl:hidden"
				></div>
			)}
			<div
				className={`"${isOnTop ? " h-[100px]" : " h-[50px] bg-black"} ${loaded ? "mobile:flex" : "hidden"} logo z-50 flex justify-center w-full  items-center lg:hidden fixed "`}
			>
				<h1 className="opacity-0 h-0 w-0 ">Santa Maria</h1>
				<img
				 	ref={logo} 
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

export default HeaderHome;
