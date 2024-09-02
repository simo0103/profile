import { useRef, useEffect, useState } from "react";
import mainImage from "./images/shot2.jpeg";
import mainImageMobile from "./images/shot.jpg";
import SubContent from "./SubContent";
import BestSelling from "./BestSelling";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Socials from "./Socials";

import { LuClipboardList } from "react-icons/lu";
import { LuVegan } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";



function Home() {
	const banner = useRef(null);
	const [loaded, setLoad] = useState(false);
	const onImageLoad = () => setLoad(true);
	useEffect(() => {
		const bannerCurrent = banner.current;
	
		if (bannerCurrent) {
		  bannerCurrent.addEventListener('load', onImageLoad);
		  return () => bannerCurrent.removeEventListener('load', onImageLoad);
		}
	}, [banner]);

	return (
		<div id="home" className="bg-black">
			<div
				id="bannerImage"
				className="relative after:content-['*'] after:absolute after:w-full after:h-full after:bg-black after:top-0 after:left-0 after:opacity-30"
			>	
			{loaded &&
				<div className="absolute text-center translate-x-[-50%] top-[25%] left-1/2 z-10">
				
					<h2 className="text-white uppercase font-steelfishBold text-[80px] mb-8">	
						real napoletan <span className="text-[78px] uppercase font-steelfishOut">pizza</span>
					</h2>
					
					<button className="capitalize py-4 px-10 rounded-md bg-red-800 text-white">
						book a table
					</button>
					<Socials />
				</div>
			}
				{!loaded && <Skeleton height="1000px" highlightColor="#000" baseColor="#18181b"/>}
				<img
					ref={banner}
					srcSet={`${mainImageMobile} 320px, ${mainImageMobile} 680px, ${mainImage} 1025w,  ${mainImage} 1440w`}
					src={mainImageMobile}
					alt="pizza"
					style={{ display: loaded ? 'block' : 'none' }}
				/>
			</div>
			<section>
				<ul className="flex gap-4 justify-center text-center w-2/4 mx-auto my-20">
					<li>
						<LuClipboardList className="text-red-800 text-xl mb-8"/>
						<p className="text-white mb-4 font-latoBlack">Order</p>
						<span className="text-white text-s">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
					</li>
					<li>
						<LuVegan className="text-red-800 text-xl mb-8"/>
						<p className="text-white mb-4 font-latoBlack">Vegan</p>
						<span className="text-white text-s">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
					</li>
					<li>
						<TbTruckDelivery className="text-red-800 text-xl mb-8"/>
						<p className="text-white mb-4 font-latoBlack">Delivery</p>
						<span className="text-white text-s">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
					</li>
				</ul>
			</section>
			<SubContent />
			<BestSelling />
		</div>
	);
}

export default Home;
