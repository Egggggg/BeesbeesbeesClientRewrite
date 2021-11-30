import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./app";
import Home from "./routes/home";
import "./styles/index.css";

ReactDom.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);
