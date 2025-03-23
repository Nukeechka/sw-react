import {
	ActionFunctionArgs,
	createBrowserRouter,
	LoaderFunction,
	ParamParseKey,
	Params,
	redirect,
} from "react-router-dom";
import SignIn from "../../pages/sign-in/SignIn";
import Root from "../../pages/root/Root";
import { store } from "../store/store";
import People from "../../pages/people/People";
import { getPeople, getPerson } from "../../shared/utils/api/swapi";
import { Person } from "../../pages/person/Person";

const PathNames = {
	peopleDetails: "people/:peopleId",
} as const;

interface Args extends ActionFunctionArgs {
	params: Params<ParamParseKey<typeof PathNames.peopleDetails>>;
}

const rootLoader = () => {
	const state = store.getState();
	const { isUserLoggedIn } = state.auth;
	if (!isUserLoggedIn) {
		return redirect("/login");
	}
	return null;
};

// const peopleLoader = async ({ params }: Params) => {
// 	const people = await getPeople();
// 	console.log(params);
// 	return people;
// };

const personLoader: LoaderFunction = async ({ params }: Args) => {
	const person = await getPerson(params.peopleId ?? "");
	return person;
};

export const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Root />,
			loader: rootLoader,
			children: [
				{
					index: true,
					element: <People />,
					loader: async () => {
						const people = await getPeople();
						return people;
					},
				},
				{
					path: "people/:peopleId",
					element: <Person />,
					loader: personLoader,
				},
			],
		},
		{
			path: "login",
			element: <SignIn />,
		},
	],
	{
		future: {
			v7_relativeSplatPath: true,
		},
	}
);
