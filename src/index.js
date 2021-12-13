import React from "react";
import ReactDom from "react-dom";

import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import App from "./app";
import config from "./config.json";
import Home from "./routes/home";
import Settings from "./routes/settings";

import "./styles/root.css";

ReactDom.render(
	<Auth0Provider
		domain={config.domain}
		clientId={config.clientId}
		redirectUri={window.location.origin}
	>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Home />} />
					<Route path="settings" element={<Settings />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</Auth0Provider>,
	document.getElementById("root")
);
