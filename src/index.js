/**
  * Copyright 2021 Bee Clark
  * This file is part of DetristaClient.
  * 
  * DetristaClient is free software: you can redistribute it and/or modify
  * it under the terms of the GNU General Public License as published by
  * the Free Software Foundation, either version 3 of the License, or
  * (at your option) any later version.
  * 
  * DetristaClient is distributed in the hope that it will be useful,
  * but WITHOUT ANY WARRANTY; without even the implied warranty of
  * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the 
  * GNU General Public License for more details.
  * 
  * You should have received a copy of the GNU General Public License
  * along with DetristaClient.  If not, see <https://www.gnu.org/licenses/>.
  */

import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./app";
import Home from "./routes/home";
import "./index.css";

ReactDom.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<App />}>
				<Route path="/home" element={<Home />} />
			</Route>
		</Routes>
	</BrowserRouter>,
	document.getElementById("root")
);