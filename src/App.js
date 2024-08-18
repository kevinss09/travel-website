import "assets/scss/style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import Example2 from "pages/Example2";
import DetailsPage from "pages/DetailsPage";
import Example3 from "pages/Example3";
import itemDetails from "json/itemDetails.json";
import Example4 from "pages/Example4";
import Example5 from "pages/Example5";
import Example6 from "pages/Example6";

function App() {
	console.log(itemDetails);
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/example" element={<Example />} />
					<Route path="/example2" element={<Example2 />} />
					<Route path="/example4" element={<Example4 />} />
					<Route path="/example5" element={<Example5 />} />
					<Route path="/example5" element={<Example5 />} />
					<Route
						path="/example6"
						element={<Example6 itemDetails={itemDetails} />}
					/>

					<Route path="/properties/:id" element={<DetailsPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
