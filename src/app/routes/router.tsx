import { createBrowserRouter } from "react-router-dom";
import SignIn from "../../pages/sign-in/SignIn";
import Root from "../../pages/root/Root";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Root />,
	},
	{
		path: "/login",
		element: <SignIn />,
	},
]);
