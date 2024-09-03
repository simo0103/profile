import Nav from "./Nav";
import StMariaLogo from "/smariawhite.svg";

const Header = () => {
	return (
		<>
			<div className="logo translate-x-[-50%] top-[3%] left-1/2 z-10 flex lg:hidden fixed">
				<h1 className="opacity-0 h-0 w-0 ">Santa Maria</h1>
				<img className="h-16 wide:h-20" src={StMariaLogo} />
			</div>
			<header className="pb-safe fixed bottom-0 left-0 right-0 lg:top-0 lg:bottom-auto width-full z-50">
				<Nav />
			</header>
		</>
	);
};

export default Header;
