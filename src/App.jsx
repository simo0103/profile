import "./App.css";
import Header from "./components/header";
import Home from "./components/home/Home";
import BookTable from "./components/BookTable";
import Ourstory from "./components/Ourstory";
import Menu from "./components/Menu";
import Orderonline from "./components/OrderOnline";
import { Routes, Route } from "react-router-dom";

function App() {
	return (
		<>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/booktable" element={<BookTable />}></Route>
					<Route path="/ourstory" element={<Ourstory />}></Route>
					<Route path="/menu" element={<Menu />}></Route>
					<Route path="/orderonline" element={<Orderonline />}></Route>
				</Routes>
			</main>
		</>
	);
}

export default App;
