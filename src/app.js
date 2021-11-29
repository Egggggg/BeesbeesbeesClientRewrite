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

import { NavLink, Outlet } from "react-router-dom";

export default function App() {
	const loggedIn = false;

	return (
		<div>
			<div id="header">
			<nav>
					<ul>
					<li>
						<NavLink to="/">Home</NavLink>
					</li>
					<li>
						<NavLink to="/tournament">Tournament</NavLink>
					</li>
					<li>
						<NavLink to="/shop">Shop</NavLink>
					</li>
					<li>
						<NavLink to="/community">Community</NavLink>
					</li>
					<li>
						<NavLink to={loggedIn ? "/logout" : "/login"}>
							{loggedIn ? "Log Out" : "Log In"}
						</NavLink>
					</li>
				</ul>
			</nav>
			</div>
			<Outlet />
		</div>
	);
}
