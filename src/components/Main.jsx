import Home from "./Home";
import BookTable from "./BookTable";
import Ourstory from "./Ourstory";
import Menu from "./Menu";
import OrderOnline from "./OrderOnline";

import { Routes, Route } from "react-router-dom";

function Main() {
	return (
		<div className="content">
			<Routes>
				<Route path="/home" component={<Home />} />
				<Route path="/menu" component={<Menu />} />
				<Route path="/booktable" component={<BookTable />} />
				<Route path="/ourstory" component={<Ourstory />} />
				<Route path="/orderonline" component={<OrderOnline />} />
			</Routes>
		</div>
	);
}

export default Main;
