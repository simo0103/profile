import { Component } from "react";

class SkeletonImage extends Component {
	render() {
		return (
			<>
				<div className="w-full absolute top-0 aspect-video bg-slate-200 animate-pulse"></div>
			</>
		);
	}
}

export default SkeletonImage;
