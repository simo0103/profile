import Nav from "./Nav";
import StMariaLogo from "/smariawhite.svg";
import React, {useState, useEffect} from 'react'


const Header = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [isScrolled, setVisible] = useState(true)
	const [isOnTop, setTop] = useState(false)


	const handleScroll = () => {
		const currentScrollPos = window.scrollY

		currentScrollPos <= 50 ? setTop(true) : setTop(false);
 
		if(currentScrollPos > prevScrollPos){
			setVisible(false)
		}else{
			setVisible(true)
		}

		setPrevScrollPos(currentScrollPos)
	}
	useEffect( () => {
		window.addEventListener('scroll', handleScroll);
	
		return () => window.removeEventListener('scroll', handleScroll)
	})

	return (
		<>
			<div className={`"${isOnTop ? " h-[100px]" : " h-[50px] bg-black"} logo z-50 flex justify-center w-full  items-center lg:hidden fixed "`}>
				<h1 className="opacity-0 h-0 w-0 ">Santa Maria</h1>
				<img className={`"${isOnTop ? " h-16 " : " h-8 "} wide:h-20"`} src={StMariaLogo} />
			</div>
			<header className={`"${isScrolled ? "mobile:translate-bezier" : " mobile:invisible mobile:translate-y-full mobile:translate-bezier "} mobile:bottom-[-60px] mobile:pb-[60px] mp-safe fixed lg:pb-inset left-0 right-0 lg:top-0 lg:bottom-auto width-full z-50 "`}>
				<Nav />
			</header>
		</>
	);
};

export default Header;
