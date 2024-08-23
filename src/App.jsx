import "./App.css";
import Header from "./components/header";
import Home from "./components/Home";
import BookTable from "./components/BookTable";
import Ourstory from "./components/Ourstory";
import Menu from "./components/Menu";
import Orderonline from "./components/OrderOnline";

import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Header />
			<div className="content">
				<Routes>
					<Route path="/home" element={<Home />}></Route>
					<Route path="/booktable" element={<BookTable />}></Route>
					<Route path="/ourstory" element={<Ourstory />}></Route>
					<Route path="/menu" element={<Menu />}></Route>
					<Route path="/orderonline" element={<Orderonline />}></Route>
				</Routes>
			</div>
		</>
	);
}

export default App;
