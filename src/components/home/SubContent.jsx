import trancioPizza from "./images/trancioPizza.jpg";
import { useRef, useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

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
		<section id="subcontent" className="content p-20 flex items-center gap-6">

			<p className="text-white font-serif text-center text-lg">
			{!loaded ? (
                        <Skeleton count={5} />
                    ) : (
                        <>
                           The pizza served in Santa Maria is exactly the same as the pizza you can
							eat on the streets of Naples using the same ingredients and adopting the
							same cooking method
                        </>
                    )}
				
			</p>
			{!loaded && <Skeleton width="500px" height="300px" highlightColor="#000" baseColor="#18181b"/>}
			<img ref={image} src={trancioPizza} width="50%" style={{ display: loaded ? 'block' : 'none' }} />
		</section>
	);
}

export default SubContent;
