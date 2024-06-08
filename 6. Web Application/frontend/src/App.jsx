import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";


const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/people/create" element={} />
			<Route path="/people/details/:id" element={} />
			<Route path="/people/edit/:id" element={} />
			<Route path="/people/delete/:id" element={} />
		</Routes>
	);
};

export default App;
