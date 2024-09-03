import { useRef, useEffect, useState } from "react";
import mainImage from "./images/shotDesktop.png";
import mainImageMobile from "./images/shotmobile.png";
import SubContent from "./SubContent";
import BestSelling from "./BestSelling";
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
			
				{!loaded && 
				
					<div role="status" className="skeleton  bg-gray-600 dark:bg-gray-800 animate-pulse w-full aspect-video"></div>
					
				}
				<img
					ref={banner}
					srcSet={`${mainImageMobile} 320px, ${mainImageMobile} 680px, ${mainImageMobile} 1025w,  ${mainImage} 1440w`}
					src={mainImageMobile}
					alt="pizza"
					style={{ display: loaded ? 'block' : 'none' }}
				/>
				{loaded &&
					<div className="xl:absolute text-center xl:translate-x-[-50%] xl:top-[20%] left-1/2 z-10">
					
						<h2 className="text-white uppercase font-steelfishBold text-[80px] wide:text-[100px] mb-8">	
							real napoletan <span className="text-[78px] wide:text-[96px] uppercase font-steelfishOut">pizza</span>
						</h2>
						
						<button className="py-4 px-10 rounded-md bg-red-800 text-white wide:text-lg">
							Book a table
						</button>
						<Socials />
					</div>
				}
			</div>
			<section>
				<ul className="flex gap-6 justify-center text-center w-2/4 mx-auto my-20">
					<li className="px-4">
						<LuClipboardList className="text-red-800 text-xl wide:text-xxl mb-8"/>
						<p className="text-white mb-4 font-latoBlack">Order</p>
						<span className="text-white text-m">Lorem ipsum dolor sit amet</span>
					</li>
					<li className="px-4">
						<LuVegan className="text-red-800 text-xl wide:text-xxl mb-8"/>
						<p className="text-white mb-4 font-latoBlack">Vegan</p>
						<span className="text-white text-m">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
					</li>
					<li className="px-4">
						<TbTruckDelivery className="text-red-800 text-xl wide:text-xxl mb-8"/>
						<p className="text-white mb-4 font-latoBlack">Delivery</p>
						<span className="text-white text-m">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
					</li>
				</ul>
			</section>
			<SubContent />
			<BestSelling />
		</div>
	);
}

export default Home;
