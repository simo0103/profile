import Nav from "./Nav";
import StMariaLogo from "/smariawhite.svg";
import React, {useState, useEffect} from 'react'


const Header = () => {
	const [prevScrollPos, setPrevScrollPos] = useState(0);
	const [visible, setVisible] = useState(true)

	const handleScroll = () => {
		const currentScrollPos = window.scrollY

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
			<div className="logo translate-x-[-50%] top-[3%] left-1/2 z-10 flex lg:hidden fixed">
				<h1 className="opacity-0 h-0 w-0 ">Santa Maria</h1>
				<img className="h-16 wide:h-20" src={StMariaLogo} />
			</div>
			<header className={`"${visible ? "mobile:translate-bezier" : " mobile:invisible mobile:translate-y-full mobile:translate-bezier "} mobile:bottom-[-60px] mobile:pb-[60px] mp-safe fixed lg:pb-inset left-0 right-0 lg:top-0 lg:bottom-auto width-full z-50 "`}>
				<Nav />
			</header>
		</>
	);
};

export default Header;
