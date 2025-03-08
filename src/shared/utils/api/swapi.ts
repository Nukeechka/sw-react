import axios from "axios";
import { API_ROUTES } from "./swapi.constants";

export const getPeople = async () => {
	const { data } = await axios.get(API_ROUTES.people);
	return data;
};
