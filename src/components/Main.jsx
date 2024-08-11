import Boxoffice from "./Boxoffice";
import Topcasts from "./Topcasts";
import Production from "./Production";

function Main() {
	return (
		<main className="px-6">
			<Topcasts />
			<Production />
			<Boxoffice />
		</main>
	);
}

export default Main;
