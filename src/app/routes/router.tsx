import { createBrowserRouter, redirect } from "react-router-dom";
import SignIn from "../../pages/sign-in/SignIn";
import Root from "../../pages/root/Root";
import { store } from "../store/store";
import People from "../../pages/people/People";
import { getPeople } from "../../shared/utils/api/swapi";
import { PeopleResponse } from "../../shared/interfaces/people.interface";
import { Person } from "../../pages/person/Person";

const rootLoader = () => {
	const state = store.getState();
	const { isUserLoggedIn } = state.auth;
	if (!isUserLoggedIn) {
		return redirect("/login");
	}
	return null;
};

const peopleLoader = async (): Promise<PeopleResponse> => {
	const people = await getPeople();
	return people;
};

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Root />,
			loader: rootLoader,
			children: [
				{
					path: "/people",
					element: <People />,
					loader: peopleLoader,
					children: [
						{
							path: "/people/:peopleId",
							element: <Person />,
						},
					],
				},
			],
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
