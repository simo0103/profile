import { Component } from "react";
import mainImage from "./main2.png";
import mainImageMobile from "./mainImage.smartphone.png";
import SkeletonImage from "./SkeletonImage";

class Home extends Component {
	constructor(props) {
		super(props);

		this.state = {
			loaded: false,
		};
	}
	handleImageLoaded() {
		this.setState({ loaded: true });
	}
	render() {
		return (
			<>
				<div className="relative after:content-['*'] after:absolute after:w-full after:h-full after:bg-black after:top-0 after:left-0 after:opacity-30">
					<div className="absolute top-1/2 left-10 z-10">
						<h2 className="text-white uppercase text-lg">
							autentica pizza napoletana
						</h2>
						<button className="text-white uppercase text-m">
							book a table
						</button>
					</div>
					{!this.state.loaded && <SkeletonImage />}
					<img
						className={this.state.loaded ? "visible" : "invisible"}
						srcSet={`${mainImageMobile} 320px, ${mainImageMobile} 680px, ${mainImage} 1025w,  ${mainImage} 1440w`}
						src={mainImageMobile}
						alt="pizza"
						onLoad={this.handleImageLoaded.bind(this)}
					/>
				</div>
				<div className="content text-black text-center text-lg p-20">
					The pizza served in Santa Maria is exactly the same as the pizza you
					can eat on the streets of Naples using the same ingredients and
					adopting the same cooking method
				</div>
			</>
		);
	}
}

export default Home;
