import trancioPizza from "./images/trancioPizza.jpg";
import { useRef, useEffect, useState } from "react";
import Skeleton from "./Skeleton";

function SubContent() {
	const image = useRef(null);
	const [loaded, setLoaded] = useState(false);
	const onImageLoaded = () => setLoaded(true);
	useEffect(() => {
		const imageCurrent = image.current;
	
		if (imageCurrent) {
		  imageCurrent.addEventListener('load', onImageLoaded);
		  return () => imageCurrent.removeEventListener('load', onImageLoaded);
		}
	}, [image]);
	return (
		<>
			{!loaded && 
				<div role="status" className="skeleton animate-pulse p-20 wide:px-80 flex justify-center items-center gap-8">
					<div className="flex-1">
						<div className="h-4 bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
						<div className="h-4 bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
						<div className="h-4 bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
						<div className="h-4 bg-gray-600 rounded-full dark:bg-gray-800 mb-4"></div>
					</div>
					<div className="flex-1 aspect-[4/3] bg-gray-600 rounded dark:bg-gray-800"></div>
				</div>
			}
			<section id="subcontent" className="content p-20 wide:px-80 flex items-center gap-8">
				<p className="text-white font-serif text-center text-lg leading-10 px-8 wide:text-xl">
			
					The pizza served in Santa Maria is exactly the same as the pizza you can
					eat on the streets of Naples using the same ingredients and adopting the
					same cooking method
					
				</p>
				<img ref={image} src={trancioPizza} width="50%" style={{ display: loaded ? 'block' : 'none' }} />
			</section>
		
		</>
	);
}

export default SubContent;
