import { createBrowserRouter, redirect } from "react-router-dom";
import SignIn from "../../pages/sign-in/SignIn";
import Root from "../../pages/root/Root";
import { store } from "../store/store";

const rootLoader = () => {
	const state = store.getState();
	const { isUserLoggedIn } = state.auth;
	if (!isUserLoggedIn) {
		return redirect("/login");
	}
	return null;
};

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Root />,
			loader: rootLoader,
		},
		{
			path: "/login",
			element: <SignIn />,
		},
	],
	{
		future: {
			v7_relativeSplatPath: true,
		},
	}
);
