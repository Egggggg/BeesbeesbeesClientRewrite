import { useAuth0 } from "@auth0/auth0-react";
import { useState, useEffect } from "react";

export default function AccountSettings() {
	const {
		loginWithRedirect,
		isAuthenticated,
		isLoading,
		getAccessTokenSilently
	} = useAuth0();

	const [token, setToken] = useState("failure");

	useEffect(() => {
		async function getToken() {
			if (isAuthenticated) {
				setToken(await getAccessTokenSilently());
			}
		}

		getToken();
	}, [isAuthenticated, setToken, token, getAccessTokenSilently]);

	useEffect(() => {
		async function getPrivate() {
			console.log(
				await fetch("http://localhost:8080/private", {
					method: "GET",
					headers: {
						Authorization: `Bearer ${token}`
					}
				})
			);
		}

		getPrivate();
	}, [token]);

	if (isLoading) {
		return (
			<div id="account-settings">
				<h5>Loading account information...</h5>
			</div>
		);
	} else {
		return (
			isAuthenticated && (
				<div id="account-settings">
					<label htmlFor="username">Username: </label>
					<input id="username" name="username"></input>
					<button onClick={loginWithRedirect}>Link social accounts</button>
				</div>
			)
		);
	}
}
