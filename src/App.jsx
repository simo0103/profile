import "./App.css";
import HeaderHome from "./components/header/HeaderHome";
import Header from "./components/header/Header";
import Footer from "./components/Footer";
import Home from "./components/home/Home";
import BookTable from "./components/booktable";
import Ourstory from "./components/Ourstory";
import Menu from "./components/Menu";
import Orderonline from "./components/OrderOnline";
import { Routes, Route, useLocation } from "react-router-dom";

function App() {
	let location = useLocation();
	let isHome = location.pathname == "/";
	const background = isHome ? " bg-black" : "";
	return (
		<>
			{isHome ? <HeaderHome /> : <Header />}
			<main className={`"${background} pb-16 "`}>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/booktable" element={<BookTable />}></Route>
					<Route path="/ourstory" element={<Ourstory />}></Route>
					<Route path="/menu" element={<Menu />}></Route>
					<Route path="/orderonline" element={<Orderonline />}></Route>
				</Routes>
			</main>
			<Footer />
		</>
	);
}

export default App;
