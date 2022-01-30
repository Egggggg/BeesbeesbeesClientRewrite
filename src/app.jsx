import { NavLink, Outlet } from "react-router-dom";

import LoginButton from "./components/loginbutton";
import logo from "./img/logo.png";

export default function App() {
	return (
		<div>
			<div id="header">
				<a href="/" id="logo">
					<img src={logo} alt="" width="64px" />
				</a>
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
							<NavLink to="/settings">Settings</NavLink>
						</li>
						<li>
							<LoginButton />
						</li>
					</ul>
				</nav>
			</div>
			<Outlet />
		</div>
	);
}
