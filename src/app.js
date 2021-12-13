import { NavLink, Outlet } from "react-router-dom";
import logo from "../src/img/logo.png";

export default function App() {
	const loggedIn = false;

	return (
		<div>
			<div id="header">
				<a href="/" id="logo">
					<img src={logo} width="64px" />
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
							<NavLink to={loggedIn ? "/logout" : "/login"}>
								{loggedIn ? "Log Out" : "Log In/Register"}
							</NavLink>
						</li>
					</ul>
				</nav>
			</div>
			<Outlet />
		</div>
	);
}
