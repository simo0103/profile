import Nav from './Nav';
import StMariaLogo from '/smariawhite.svg';
import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
    let isMobile =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
        );
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const logo = useRef(null);
    const [loaded, setLoad] = useState(false);
    const onLogoLoad = () => setLoad(true);
    useEffect(() => {
        const logoCurrent = logo.current;

        if (logoCurrent) {
            logoCurrent.addEventListener('load', onLogoLoad);
            return () => logoCurrent.removeEventListener('load', onLogoLoad);
        }
    }, [logo]);

    const controlNavbar = () => {
        const isBottomPage =
            window.innerHeight + Math.round(window.scrollY) >=
            document.body.offsetHeight;
        if (
            (window.scrollY > lastScrollY && lastScrollY >= 0) ||
            isBottomPage
        ) {
            setShow(false);
        } else {
            setShow(true);
        }
        setLastScrollY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', controlNavbar);
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    return (
        <>
            {!loaded && (
                <div
                    role="status"
                    className="skeleton bg-gray-600 dark:bg-gray-800 animate-pulse w-3/5 h-16 fixed center-translateX top-0 xl:hidden "
                ></div>
            )}
            <div
                className={`" h-[100px] bg-black ${loaded ? 'mobile:flex' : 'hidden'} logo z-50 flex justify-center w-full mobile:mb-8 items-center lg:hidden "`}
            >
                <h1 className="opacity-0 h-0 w-0 ">Santa Maria</h1>
                <img ref={logo} className="h-16" src={StMariaLogo} />
            </div>
            <header
                className={`"${show ? 'mobile:translate-bezier ' : ' mobile:invisible mobile:translate-y-full mobile:translate-bezier '} bg-black mobile:bottom-[-60px] mobile:pb-[60px] mp-safe lg:pb-inset left-0 right-0 lg:top-0  lg:mb-16 lg:bottom-auto width-full z-50 fixed lg:relative "`}
            >
                <Nav />
            </header>
        </>
    );
};

export default Header;
