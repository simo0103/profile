import Home from "./Home";
import Contact from "./Contact";
import About from "./About";
import { Routes, Route } from "react-router-dom";

function Main() {
	return (
		<div className="content">
			<Routes>
				<Route path="/" component={<Home />} />
				<Route path="/contact" component={<Contact />} />
				<Route path="/about" component={<About />} />
			</Routes>
		</div>
	);
}

export default Main;
