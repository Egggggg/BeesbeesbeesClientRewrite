import { useAuth0 } from "@auth0/auth0-react";

// import config from "./config.json";

export default function AccountSettings() {
	const {
		loginWithRedirect,
		isAuthenticated,
		isLoading,
		user,
		getAccessTokenSilently,
	} = useAuth0();

	if (isLoading) {
		return (
			<div id="account-settings">
				<h5>Loading account information...</h5>
			</div>
		);
	}

	if (isAuthenticated) {
		console.log(user);
		console.log(getAccessTokenSilently());
	}

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
