import { useAuth0 } from "@auth0/auth0-react";

export default function LoginButton() {
	const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

	if (isLoading) {
		return <a>Log In</a>;
	}

	return (
		<a
			onClick={() =>
				isAuthenticated
					? logout({ returnTo: window.location.origin })
					: loginWithRedirect()
			}
		>
			{isAuthenticated ? "Log Out" : "Log In"}
		</a>
	);
}
