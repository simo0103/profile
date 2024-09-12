import { PiBasketLight } from 'react-icons/pi';
import StMariaLogo from '/smariawhite.svg';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { RiFunctionLine } from 'react-icons/ri';

const Nav = () => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.scrollY >= 20) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };
    return (
        <nav
            aria-hidden="false"
            className={`${scrolling ? 'xl:bg-black' : 'xl:bg-transparent'} bg-black flex items-center h-18 py-2 xl:py-6 px-8 wide:px-20`}
        >
            <div className="logo hidden lg:flex">
                <h1 className="opacity-0 h-0 w-0 ">Santa Maria</h1>
                <img className="h-16 wide:h-20" src={StMariaLogo} />
            </div>
            <ul className="flex flex-1 justify-center items-center center mobile:justify-around xl:gap-8 font-sans text-m">
                <li className="flex mobile:flex-col items-center mobile:w-[60px] text-center">
                    <RiFunctionLine className="text-white lg:hidden text-[30px]" />
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-white wide:text-lg uppercase xl:py-2 xl:border-b-2 xl:border-solid border-white'
                                : 'wide:text-lg text-white uppercase xl:py-2 xl:border-b-2 xl:border-solid border-transparent hover:border-white'
                        }
                    >
                        home
                    </NavLink>
                </li>
                <li className="flex mobile:flex-col items-center mobile:w-[60px] text-center">
                    <NavLink
                        to="/Menu"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-white wide:text-lg uppercase xl:py-2 xl:border-b-2 xl:border-solid border-white'
                                : 'wide:text-lg text-white uppercase xl:py-2 xl:border-b-2 xl:border-solid border-transparent hover:border-white'
                        }
                    >
                        our menu
                    </NavLink>
                </li>
                <li className="hidden lg:block items-center">
                    <NavLink
                        to="/Ourstory"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-white wide:text-lg uppercase xl:py-2 xl:border-b-2 xl:border-solid border-white'
                                : 'wide:text-lg text-white uppercase xl:py-2 xl:border-b-2 xl:border-solid border-transparent hover:border-white'
                        }
                    >
                        our story
                    </NavLink>
                </li>
                <li className="flex mobile:flex-col items-center mobile:w-[60px] text-center">
                    <NavLink
                        to="/Orderonline"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-white wide:text-lg uppercase xl:py-2 xl:border-b-2 xl:border-solid border-white'
                                : 'wide:text-lg text-white uppercase xl:py-2 xl:border-b-2 xl:border-solid border-transparent hover:border-white'
                        }
                    >
                        order online
                    </NavLink>
                </li>
                <li className="flex mobile:flex-col items-center mobile:w-[60px] text-center">
                    <NavLink
                        to="/Booktable"
                        className={({ isActive }) =>
                            isActive
                                ? 'text-white wide:text-lg uppercase xl:py-2 xl:border-b-2 xl:border-solid border-white'
                                : 'wide:text-lg text-white uppercase xl:py-2 xl:border-b-2 xl:border-solid border-transparent hover:border-white'
                        }
                    >
                        book a table
                    </NavLink>
                </li>
            </ul>
            <ul className="hidden lg:flex font-sans text-m items-center gap-8">
                <li className="flex align-center">
                    <PiBasketLight className="text-white text-lg wide:text-xl"></PiBasketLight>
                </li>
                <li className="text-white xl:text-m">
                    <span>Sign Up</span>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
