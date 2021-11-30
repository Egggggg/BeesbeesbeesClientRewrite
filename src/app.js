import { NavLink, Outlet } from "react-router-dom";

export default function App() {
	const loggedIn = false;

	return (
		<div>
			<div id="header">
				<a href="/" id="logo">
					<img src="/public/img/logo.png" />
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
