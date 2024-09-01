import trancioPizza from "./images/trancioPizza.jpg";

function SubContent() {
	return (
		<section id="subcontent" className="content p-20 flex items-center gap-6">
			<p className="text-white font-serif text-center text-lg">
				The pizza served in Santa Maria is exactly the same as the pizza you can
				eat on the streets of Naples using the same ingredients and adopting the
				same cooking method
			</p>
			<img src={trancioPizza} width="50%" />
		</section>
	);
}

export default SubContent;
